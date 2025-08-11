import React from 'react';
import { ExternalLink, Award, Globe, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PortfolioSection = () => {
  const headerRef = useScrollAnimation();
  const metricsRef = useScrollAnimation();

  const portfolioWebsites = [
    {
      id: 1,
      name: "Supreme Security Services",
      url: "https://supremesecurityservices.ca/",
      clickable: true,
      description: "Professional security services across Ontario with comprehensive protection solutions",
      category: "Security Services",
      highlight: "15+ Years Experience"
    },
    {
      id: 2,
      name: "Xpert Prompt",
      url: "https://xpertprompt.com/",
      clickable: true,
      description: "Advanced AI prompt engineering and optimization platform for professionals",
      category: "AI Technology",
      highlight: "AI Innovation"
    },
    {
      id: 3,
      name: "Corteiz Sites",
      url: "https://corteizsites.fr/",
      clickable: true,
      description: "Premium web development and digital solutions for French businesses",
      category: "Web Development",
      highlight: "Premium Solutions"
    },
    {
      id: 4,
      name: "Catty Foods",
      url: "https://cattyfoods.com/",
      clickable: false,
      description: "Organic pet food and nutrition products for healthy companion animals",
      category: "Pet Products",
      highlight: "Organic Quality"
    },
    {
      id: 5,
      name: "Smart Aristo Solutions",
      url: "https://smartaristosolutions.com/",
      clickable: false,
      description: "Intelligent business solutions and consulting for modern enterprises",
      category: "Business Solutions",
      highlight: "Smart Solutions"
    },
    {
      id: 6,
      name: "Digitize Way",
      url: "https://digitizeway.com/",
      clickable: false,
      description: "Digital transformation services helping businesses modernize operations",
      category: "Digital Services",
      highlight: "Digital Growth"
    },
    {
      id: 7,
      name: "Prompts Topia",
      url: "https://promptstopia.com/",
      clickable: false,
      description: "Comprehensive prompt library and AI content creation marketplace",
      category: "AI Content",
      highlight: "Content Creation"
    }
  ];

  console.log('PortfolioSection rendering with websites:', portfolioWebsites);
  
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-navy-primary via-navy-secondary to-navy-primary relative overflow-hidden">
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
            Websites I've Worked On
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
            My <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore the diverse range of websites I've crafted compelling content for, 
            helping businesses across various industries achieve their goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 stagger-animation">
          {portfolioWebsites.map((site, index) => (
            <div
              key={site.id}
              className="card-primary card-hover-lift group relative overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 via-transparent to-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-orange-primary/20 border border-orange-primary/30 rounded-full text-orange-primary text-xs font-medium">
                    {site.category}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                    <Award className="w-3 h-3 mr-1" />
                    {site.highlight}
                  </div>
                </div>

                {/* Website Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20 rounded-lg text-orange-primary group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-primary transition-all duration-500">
                      {site.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                    {site.description}
                  </p>

                  {/* URL Display */}
                  <div className="bg-navy-secondary/50 border border-navy-accent/30 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-orange-primary" />
                      <span className="text-xs text-muted-foreground font-mono">
                        {site.url}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    {site.clickable ? (
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group-hover:animate-glow transition-all duration-500 inline-flex items-center text-sm py-2 px-4"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center px-4 py-2 bg-navy-accent/30 border border-navy-accent/50 rounded-lg text-muted-foreground text-sm cursor-not-allowed">
                        <Globe className="w-4 h-4 mr-2" />
                        Not Available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Metrics */}
        <div ref={metricsRef} className="grid md:grid-cols-4 gap-6 mb-20 fade-in-up">
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">50+</div>
            <div className="text-muted-foreground font-medium">Websites Worked On</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">7</div>
            <div className="text-muted-foreground font-medium">Industries Served</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">95%</div>
            <div className="text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3 text-4xl">3x</div>
            <div className="text-muted-foreground font-medium">Avg Traffic Increase</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <div className="card-primary max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 via-transparent to-blue-accent/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Join My <span className="text-gradient-primary">Success Stories?</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Let's work together to create compelling content that drives results for your business.
              </p>
              <button className="btn-primary text-lg px-8 py-4 animate-glow">
                Start Your Project
                <TrendingUp className="w-6 h-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;