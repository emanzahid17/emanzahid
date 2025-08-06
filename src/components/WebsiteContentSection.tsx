
import React, { useState } from 'react';
import { Globe, ArrowRight, Zap, Target, Award } from 'lucide-react';

const WebsiteContentSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentSamples = [
    {
      id: 1,
      type: "Landing Page",
      industry: "SaaS",
      title: "AI-Powered Analytics Dashboard",
      headline: "Turn Data Into Decisions That Drive Growth",
      description: "Transform complex analytics into actionable insights with our AI-powered dashboard. Get real-time metrics, predictive forecasting, and automated reporting.",
      cta: "Start Your Free Trial",
      conversionRate: "24% increase",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 2,
      type: "Sales Page",
      industry: "E-commerce",
      title: "Premium Fitness Equipment",
      headline: "Achieve Your Fitness Goals From Home",
      description: "Professional-grade equipment designed for maximum results. Used by Olympic athletes and fitness professionals worldwide.",
      cta: "Shop Now - Free Shipping",
      conversionRate: "31% increase",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 3,
      type: "Service Page",
      industry: "Consulting",
      title: "Strategic Business Consulting",
      headline: "Scale Your Business With Proven Strategies",
      description: "Get expert guidance from consultants who've helped 500+ companies achieve sustainable growth and operational excellence.",
      cta: "Book Strategy Session",
      conversionRate: "18% increase",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="website-content" className="py-20 bg-navy-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-accent/10 border border-purple-accent/20 rounded-full text-purple-accent text-sm font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Website Copy That Converts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            High-Converting <span className="text-gradient-primary">Website Content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every word is strategically placed to guide your visitors through a seamless journey from curiosity to conversion.
          </p>
        </div>

        {/* Content Samples */}
        <div className="space-y-8 mb-16">
          {contentSamples.map((sample, index) => (
            <div
              key={sample.id}
              className={`card-primary transition-all duration-500 ${
                hoveredCard === sample.id 
                  ? 'border-orange-primary/50 shadow-2xl shadow-orange-primary/10 scale-105' 
                  : 'hover:border-orange-primary/30'
              }`}
              onMouseEnter={() => setHoveredCard(sample.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Left: Sample Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-orange-primary/10 rounded-xl text-orange-primary">
                      {sample.icon}
                    </div>
                    <div>
                      <div className="text-sm text-orange-primary font-medium">{sample.type}</div>
                      <div className="text-xs text-muted-foreground">{sample.industry}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">{sample.title}</h3>
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {sample.conversionRate}
                  </div>
                </div>

                {/* Center: Website Preview */}
                <div className="lg:col-span-2">
                  <div className="bg-navy-accent/30 rounded-xl p-6 border border-navy-accent/50">
                    {/* Browser Header */}
                    <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-navy-accent/30">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-navy-secondary/50 rounded px-3 py-1 text-xs text-muted-foreground">
                        https://example.com
                      </div>
                    </div>

                    {/* Website Content */}
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-white group-hover:text-orange-primary transition-colors duration-300">
                        {sample.headline}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {sample.description}
                      </p>
                      <div className="pt-4">
                        <button 
                          className={`btn-primary text-sm transition-all duration-300 ${
                            hoveredCard === sample.id ? 'scale-105' : ''
                          }`}
                        >
                          {sample.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-primary text-center">
            <div className="metric-counter mb-2">87%</div>
            <div className="text-muted-foreground">Average Conversion Lift</div>
          </div>
          <div className="card-primary text-center">
            <div className="metric-counter mb-2">150+</div>
            <div className="text-muted-foreground">Websites Optimized</div>
          </div>
          <div className="card-primary text-center">
            <div className="metric-counter mb-2">$2.4M</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transform Your Website Into a Conversion Machine
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's audit your current copy and create content that turns visitors into customers.
            </p>
            <button className="btn-primary">
              Get Website Copy Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteContentSection;
