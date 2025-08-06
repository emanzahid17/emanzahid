
import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-navy-secondary to-navy-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-primary/10 border border-orange-primary/20 rounded-full text-orange-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Weekly AI Content Insights
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Stay Ahead with <span className="text-gradient-primary">AI Content</span> Strategies
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get weekly insights, proven strategies, and AI tools that are transforming content marketing. 
                Join 5,000+ creators and marketers who rely on actionable tips to grow their business.
              </p>

              {/* Value Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Weekly AI Tool Reviews</div>
                    <div className="text-muted-foreground text-sm">Discover and master the latest AI content tools</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Exclusive Prompt Templates</div>
                    <div className="text-muted-foreground text-sm">Access my private collection of high-converting prompts</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Case Study Breakdowns</div>
                    <div className="text-muted-foreground text-sm">Deep dives into successful campaigns and strategies</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">First Access to Resources</div>
                    <div className="text-muted-foreground text-sm">Be the first to access new templates and guides</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Newsletter Signup */}
            <div className="card-primary">
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Join the Newsletter</h3>
                <p className="text-muted-foreground">
                  5,000+ marketers already subscribed
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 bg-navy-accent/50 border border-navy-accent/50 rounded-xl text-white placeholder-muted-foreground focus:outline-none focus:border-orange-primary/50 transition-colors duration-300"
                    />
                  </div>
                  
                  <button type="submit" className="w-full btn-primary">
                    Get Weekly AI Insights
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    No spam, unsubscribe anytime. I respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 animate-fade-in">
                  <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    Welcome Aboard! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    Check your email for a confirmation link and your first AI content strategy guide.
                  </p>
                </div>
              )}

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-navy-accent/30">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-3">Trusted by professionals from</div>
                  <div className="flex items-center justify-center space-x-6 text-muted-foreground">
                    <span className="font-medium">Google</span>
                    <span>•</span>
                    <span className="font-medium">Meta</span>
                    <span>•</span>
                    <span className="font-medium">Shopify</span>
                    <span>•</span>
                    <span className="font-medium">HubSpot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
