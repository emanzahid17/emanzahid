
import React, { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, Eye, Users, MousePointer, Target } from 'lucide-react';

const AnalyticsSection = () => {
  const [animatedValues, setAnimatedValues] = useState({
    clicks: 0,
    impressions: 0,
    ctr: 0,
    position: 0
  });

  useEffect(() => {
    const duration = 2000;
    const targetValues = {
      clicks: 2580,
      impressions: 95600,
      ctr: 2.7,
      position: 22.2
    };

    const startTime = Date.now();
    
    const animateValues = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedValues({
        clicks: Math.round(targetValues.clicks * easeOut),
        impressions: Math.round(targetValues.impressions * easeOut),
        ctr: Number((targetValues.ctr * easeOut).toFixed(1)),
        position: Number((targetValues.position * easeOut).toFixed(1))
      });

      if (progress < 1) {
        requestAnimationFrame(animateValues);
      }
    };

    const timer = setTimeout(animateValues, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <section id="analytics" className="py-20 bg-navy-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-accent/10 border border-blue-accent/20 rounded-full text-blue-accent text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            Data-Driven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-primary">Analytics</span> That Drive Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I don't just create content—I create content that performs. Every strategy is backed by comprehensive analytics and continuous optimization.
          </p>
        </div>

        {/* Main Analytics Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Google Search Console Style Metrics */}
          <div className="card-primary">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Search Performance</h3>
              <div className="text-sm text-muted-foreground">Last 3 months</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-xl border border-blue-600/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 text-sm font-medium">Total Clicks</span>
                  <MousePointer className="w-4 h-4 text-blue-400" />
                </div>
                <div className="metric-counter text-blue-400">
                  {formatNumber(animatedValues.clicks)}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-xl border border-purple-600/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 text-sm font-medium">Total Impressions</span>
                  <Eye className="w-4 h-4 text-purple-400" />
                </div>
                <div className="metric-counter text-purple-400">
                  {formatNumber(animatedValues.impressions)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-navy-accent/30 rounded-xl">
                <div className="text-muted-foreground text-sm mb-1">Average CTR</div>
                <div className="text-2xl font-bold text-green-400">{animatedValues.ctr}%</div>
              </div>
              
              <div className="p-4 bg-navy-accent/30 rounded-xl">
                <div className="text-muted-foreground text-sm mb-1">Average Position</div>
                <div className="text-2xl font-bold text-orange-primary">{animatedValues.position}</div>
              </div>
            </div>
          </div>

          {/* Social Media Analytics */}
          <div className="card-primary">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Social Media Growth</h3>
              <div className="text-sm text-muted-foreground">Last 7 days</div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Profile Views</span>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-green-400">16,872</div>
                  <div className="text-green-400 text-sm font-medium bg-green-500/10 px-2 py-1 rounded">
                    +20%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-navy-accent/30 rounded-xl">
                  <div className="text-lg font-bold text-blue-400">439</div>
                  <div className="text-xs text-muted-foreground">Interactions</div>
                  <div className="text-xs text-red-400">-24%</div>
                </div>
                
                <div className="text-center p-3 bg-navy-accent/30 rounded-xl">
                  <div className="text-lg font-bold text-green-400">32</div>
                  <div className="text-xs text-muted-foreground">New Follows</div>
                  <div className="text-xs text-green-400">+52%</div>
                </div>
                
                <div className="text-center p-3 bg-navy-accent/30 rounded-xl">
                  <div className="text-lg font-bold text-orange-primary">1,402</div>
                  <div className="text-xs text-muted-foreground">Total Followers</div>
                  <div className="text-xs text-green-400">+2.4%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Performance Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-primary">
            <h3 className="text-xl font-bold text-white mb-6">Content Performance by Type</h3>
            <div className="space-y-4">
              {[
                { type: 'Photo', percentage: 55.8, color: 'bg-blue-500' },
                { type: 'Multi Photo', percentage: 17, color: 'bg-purple-500' },
                { type: 'Text', percentage: 11.1, color: 'bg-orange-500' },
                { type: 'Video', percentage: 6.2, color: 'bg-green-500' },
                { type: 'Reel', percentage: 4.4, color: 'bg-pink-500' },
                { type: 'Multi Media', percentage: 4.1, color: 'bg-cyan-500' }
              ].map((item) => (
                <div key={item.type} className="flex items-center space-x-4">
                  <div className="w-16 text-sm text-muted-foreground">{item.type}</div>
                  <div className="flex-1 bg-navy-accent/30 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm text-white font-medium text-right">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-primary">
            <h3 className="text-xl font-bold text-white mb-6">Key Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">High Performance Alert</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Photo content performing 340% above average. Recommend increasing photo-based content strategy.
                </p>
              </div>

              <div className="p-4 bg-orange-primary/10 border border-orange-primary/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-orange-primary rounded-full animate-pulse"></div>
                  <span className="text-orange-primary font-medium">Growth Opportunity</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Video engagement trending upward. Consider incorporating more video content in upcoming campaigns.
                </p>
              </div>

              <div className="p-4 bg-blue-accent/10 border border-blue-accent/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-blue-accent rounded-full animate-pulse"></div>
                  <span className="text-blue-accent font-medium">Optimization Note</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Peak engagement time: 2-4 PM weekdays. Optimize posting schedule for maximum reach.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Analytics Approach */}
        <div className="card-primary max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">My Analytics Approach</h3>
            <p className="text-muted-foreground">
              Data without action is just noise. Here's how I turn analytics into growth strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-accent" />
              </div>
              <h4 className="font-bold text-white">Track What Matters</h4>
              <p className="text-sm text-muted-foreground">
                Focus on metrics that directly impact your business goals, not vanity numbers.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-orange-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-primary" />
              </div>
              <h4 className="font-bold text-white">Identify Patterns</h4>
              <p className="text-sm text-muted-foreground">
                Analyze trends and patterns to predict what content will perform best.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-bold text-white">Optimize & Scale</h4>
              <p className="text-sm text-muted-foreground">
                Use insights to continuously improve and scale successful strategies.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want Analytics That Actually Drive Growth?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let me show you how to turn your data into a competitive advantage with actionable insights.
            </p>
            <button className="btn-primary">
              Get Analytics Audit
              <BarChart3 className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
