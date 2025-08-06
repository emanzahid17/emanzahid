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

        {/* Real Analytics Screenshots */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Google Search Console Analytics */}
          <div className="card-primary">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Google Search Console</h3>
              <div className="text-sm text-muted-foreground">Last 3 months</div>
            </div>
            
            <div className="bg-navy-accent/20 rounded-xl p-4 mb-6 border border-navy-accent/30">
              <img 
                src="/lovable-uploads/82d7e657-1956-4731-a7a4-98b8653c419d.png" 
                alt="Google Search Console Analytics - 3 months data showing 2.58K clicks, 95.6K impressions, 2.7% CTR, 22.2 average position"
                className="w-full rounded-lg border border-navy-accent/20"
              />
            </div>

            <div className="bg-navy-accent/20 rounded-xl p-4 border border-navy-accent/30">
              <img 
                src="/lovable-uploads/1b17ec11-80bb-4a36-9824-67a96f206ee2.png" 
                alt="Google Search Console Analytics - Last 28 days showing 834 clicks, 34.8K impressions, 2.4% CTR, 20.1 average position"
                className="w-full rounded-lg border border-navy-accent/20"
              />
            </div>
          </div>

          {/* Social Media Analytics */}
          <div className="card-primary">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Social Media Growth</h3>
              <div className="text-sm text-muted-foreground">Recent Performance</div>
            </div>

            <div className="space-y-6">
              <div className="bg-navy-accent/20 rounded-xl p-4 border border-navy-accent/30">
                <img 
                  src="/lovable-uploads/0af3968b-0f37-4dd1-bc88-478c6cc09a9d.png" 
                  alt="Social Media Insights - 16,872 views (+20%), 439 interactions (-24%), 32 net follows (+52%)"
                  className="w-full rounded-lg border border-navy-accent/20"
                />
              </div>

              <div className="bg-navy-accent/20 rounded-xl p-4 border border-navy-accent/30">
                <img 
                  src="/lovable-uploads/f1c2f414-279f-4e1d-86eb-81345b06a0ce.png" 
                  alt="Total Followers Growth - 1,402 total followers (+2.4% from previous 7 days)"
                  className="w-full rounded-lg border border-navy-accent/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Performance Analytics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-primary">
            <h3 className="text-xl font-bold text-white mb-6">Content Performance Analytics</h3>
            <div className="space-y-6">
              <div className="bg-navy-accent/20 rounded-xl p-4 border border-navy-accent/30">
                <img 
                  src="/lovable-uploads/51ab72cf-e73c-4e78-bf3f-35a1979a2850.png" 
                  alt="Content Performance by Type - Photo 55.8%, Multi Photo 17%, Text 11.1%, Video 6.2%, Reel 4.4%, Multi Media 4.1%"
                  className="w-full rounded-lg border border-navy-accent/20"
                />
              </div>
            </div>
          </div>

          <div className="card-primary">
            <h3 className="text-xl font-bold text-white mb-6">Publishing Activity & Views</h3>
            <div className="bg-navy-accent/20 rounded-xl p-4 border border-navy-accent/30">
              <img 
                src="/lovable-uploads/f1db21d0-d733-441d-a194-5c63254a44cd.png" 
                alt="Publishing Activity - 16,872 views (+19.8% from previous 7 days) with activity tracking"
                className="w-full rounded-lg border border-navy-accent/20"
              />
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
