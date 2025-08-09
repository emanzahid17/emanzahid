import React, { useState } from 'react';
import { Globe, ArrowRight, Zap, Target, Award, TrendingUp, Code, Palette, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WebsiteContentSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const headerRef = useScrollAnimation();
  const metricsRef = useScrollAnimation();

  const contentSamples = [
    {
      id: 1,
      type: "Social Media Marketing",
      industry: "Digital Agency", 
      title: "Social Media Presence",
      image: "/lovable-uploads/0af3968b-0f37-4dd1-bc88-478c6cc09a9d.png",
      headline: "Helping brands own their social media presence",
      description: "Helping brands own their social media presence by deploying result-driven services around social strategy, content production, community management, paid social advertising, influencer marketing social selling & more.",
      cta: "Get Social Strategy",
      conversionRate: "47% increase",
      bgColor: "from-purple-600/20 to-blue-600/20",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 2,
      type: "Digital Marketing",
      industry: "Marketing Agency",
      title: "Digital Marketing Services",
      image: "/lovable-uploads/82d7e657-1956-4731-a7a4-98b8653c419d.png",
      headline: "Think big, think different with digital marketing",
      description: "Comprehensive digital marketing services including SEO, copywriting, content marketing, Facebook ads, lead generation, and email marketing to boost your brand's visibility and engagement.",
      cta: "Schedule A Call",
      conversionRate: "520% ROI boost",
      bgColor: "from-orange-600/20 to-red-600/20",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 3,
      type: "Startup Growth",
      industry: "Business Development",
      title: "Startup Domination",
      image: "/lovable-uploads/1b17ec11-80bb-4a36-9824-67a96f206ee2.png",
      headline: "Helping Startups, Agencies and Creators Dominate the Online Market",
      description: "We empower businesses with innovative solutions to enhance visibility and engagement. From startups to agencies, we help you outshine the competition with 10k+ worldwide clients.",
      cta: "Get Started",
      conversionRate: "300% rate increase",
      bgColor: "from-green-600/20 to-emerald-600/20",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 4,
      type: "Security Services",
      industry: "Professional Services",
      title: "Security Guard Services",
      image: "/lovable-uploads/f1c2f414-279f-4e1d-86eb-81345b06a0ce.png",
      headline: "Why Clients Trust Supreme Security Services",
      description: "With over 15 years of dedicated service across Ontario, we've protected thousands of homes, businesses, and public spaces with 300+ happy clients, 35 branches, 1,000+ total guards, and 5+ years in business.",
      cta: "Learn More",
      conversionRate: "89% trust boost",
      bgColor: "from-red-600/20 to-orange-600/20",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategic Analysis",
      description: "Deep dive into your audience, competitors, and conversion bottlenecks",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "Content Architecture",
      description: "Map out the perfect content flow that guides users to conversion",
      icon: <Palette className="w-8 h-8" />
    },
    {
      step: "03",
      title: "AI-Powered Creation", 
      description: "Craft compelling copy using advanced prompts and proven frameworks",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuously improve based on performance data and user feedback", 
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  return (
    <section id="website-content" className="py-24 bg-gradient-to-br from-navy-primary via-navy-secondary to-navy-primary relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-accent/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20 border border-orange-primary/30 rounded-full text-orange-primary text-sm font-medium mb-6 backdrop-blur-glass">
            <Globe className="w-4 h-4 mr-2" />
            Website Content That Converts
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
            High-Converting <span className="text-gradient-primary">Website Content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every word is strategically placed to guide your visitors through a seamless journey from curiosity to conversion. 
            See real examples of content that's generating millions in revenue.
          </p>
        </div>

        {/* Content Samples Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 stagger-animation">
          {contentSamples.map((sample, index) => (
            <div
              key={sample.id}
              className={`group relative card-primary card-hover-lift transition-all duration-700 overflow-hidden ${
                hoveredCard === sample.id 
                  ? 'border-orange-primary/60 shadow-2xl shadow-orange-primary/20 scale-105' 
                  : 'hover:border-orange-primary/40'
              } fade-in-up`}
              onMouseEnter={() => setHoveredCard(sample.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sample.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20 rounded-xl text-orange-primary group-hover:scale-110 transition-transform duration-300">
                      {sample.icon}
                    </div>
                    <div>
                      <div className="text-orange-primary font-semibold text-sm tracking-wide uppercase">
                        {sample.type}
                      </div>
                      <div className="text-muted-foreground text-xs">{sample.industry}</div>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {sample.conversionRate}
                  </div>
                </div>

                {/* Website Preview */}
                <div className="bg-navy-primary/50 backdrop-blur-sm rounded-xl p-6 border border-navy-accent/30 group-hover:border-orange-primary/20 transition-all duration-300">
                  {/* Browser Header */}
                  <div className="flex items-center space-x-2 mb-6 pb-3 border-b border-navy-accent/30">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="flex-1 bg-navy-secondary/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground font-mono">
                      https://{sample.title.toLowerCase().replace(/\s+/g, '')}.com
                    </div>
                  </div>

        {/* Website Content Preview */}
                  <div className="space-y-6">
                    {/* Website Image */}
                    <div className="relative rounded-lg overflow-hidden border border-navy-accent/20 group-hover:border-orange-primary/20 transition-all duration-300">
                      <img 
                        src={sample.image} 
                        alt={sample.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', sample.image);
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={() => console.log('Image loaded successfully:', sample.image)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient-primary transition-all duration-500 leading-tight">
                      {sample.headline}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {sample.description}
                    </p>
                    <div className="pt-4">
                      <button 
                        className={`btn-primary group-hover:animate-glow transition-all duration-500 ${
                          hoveredCard === sample.id ? 'scale-110 shadow-xl shadow-orange-primary/30' : ''
                        }`}
                      >
                        {sample.cta}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16 fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-gradient-primary">Proven Process</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every high-converting website follows this strategic framework
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center space-y-4 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-primary/20 to-orange-secondary/20 rounded-2xl border border-orange-primary/30 text-orange-primary group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-navy-primary border-2 border-orange-primary rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold text-orange-primary">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Metrics */}
        <div ref={metricsRef} className="grid md:grid-cols-4 gap-6 mb-20 fade-in-up">
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">340%</div>
            <div className="text-muted-foreground font-medium">Average Conversion Lift</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">$4.8M</div>
            <div className="text-muted-foreground font-medium">Revenue Generated</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">200+</div>
            <div className="text-muted-foreground font-medium">Websites Optimized</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">12.7%</div>
            <div className="text-muted-foreground font-medium">Avg Conversion Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <div className="card-primary max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 via-transparent to-blue-accent/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your Website Into a <span className="text-gradient-primary">Conversion Machine?</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Get a comprehensive audit of your current copy and a strategic roadmap to 10x your conversions.
              </p>
              <button className="btn-primary text-lg px-8 py-4 animate-glow">
                Get Your Free Website Audit
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              <div className="mt-6 text-sm text-muted-foreground">
                ⚡ Usually $497 - Free for the next 48 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteContentSection;
