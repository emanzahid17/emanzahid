
import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          {/* Main Content - Centered */}
          <div className={`text-center space-y-8 max-w-4xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-primary/10 border border-orange-primary/20 rounded-full text-orange-primary text-sm font-medium">
                <div className="w-2 h-2 bg-orange-primary rounded-full mr-2 animate-pulse"></div>
                Available for Strategic Partnerships
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">AI Content</span>
                <br />
                <span className="hero-text-gradient">Strategist &</span>
                <br />
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <span className="text-white">AI Content</span>
                  {/* Profile Image alongside AI CONTENT MARKETER */}
                  <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-orange-primary/20 hover:border-orange-primary/40 transition-all duration-500 hover:scale-105">
                      <img 
                        src="/lovable-uploads/7290b180-01b2-4ba4-950a-6fb1f673b4ae.png" 
                        alt="Eman Zahid - AI Content Strategist Profile" 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/20 to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        Eman Zahid
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-lg opacity-20 animate-pulse"></div>
                  </div>
                </div>
                <br />
                <span className="hero-text-gradient">Marketer</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transforming brands through data-driven AI content strategies. I help entrepreneurs, 
                founders, and creators amplify their message with precision-crafted content that converts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <a 
                href="https://substack.com/@ezprompt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group inline-flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Join my Newsletter
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="metric-counter">500+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="metric-counter">95%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="metric-counter">2.5M+</div>
                <div className="text-muted-foreground text-sm">Content Impressions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
