
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://www.facebook.com/share/16mN2pXma1/' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, url: 'https://whatsapp.com/channel/0029VaD8E9m1yT27X8u0GK33' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/emanxzahid17?igsh=Z3FrNmU4a2Q0MXhx' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/eman-zahid-b384a6300' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@emanzahid17' },
    { name: 'Medium', icon: <Mail className="w-5 h-5" />, url: 'https://medium.com/@emaanzahid' }
  ];

  return (
    <footer className="footer-gradient">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Section - Contact Info & Social */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's Create Something <span className="text-gradient-primary">Amazing</span>
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Ready to transform your content strategy with AI? Let's discuss how we can drive real results for your business.
                </p>

                {/* Quick CTA */}
                <div className="p-6 bg-gradient-primary rounded-2xl mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Ready to Get Started?</h4>
                      <p className="text-white/90 text-sm">Book a free 30-minute strategy call</p>
                    </div>
                    <button className="bg-white text-navy-primary px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Call
                    </button>
                  </div>
                </div>
              </div>

               {/* Contact Information */}
               <div className="space-y-6">
                 <h4 className="text-xl font-bold text-white">Get in Touch</h4>
                 
                 <div className="space-y-4">
                   <div className="flex items-center space-x-4">
                     <div className="w-10 h-10 bg-orange-primary/10 rounded-xl flex items-center justify-center">
                       <Mail className="w-5 h-5 text-orange-primary" />
                     </div>
                     <div>
                       <div className="text-white font-medium">Email</div>
                       <div className="text-muted-foreground">emaanzahid60@gmail.com</div>
                     </div>
                   </div>
                 </div>
               </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Follow the Journey</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 bg-navy-secondary border border-navy-accent hover:border-orange-primary/50 rounded-xl flex items-center justify-center text-muted-foreground hover:text-orange-primary transition-all duration-300 hover:scale-105"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="card-primary">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">Send a Message</h4>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's discuss how AI content strategy can transform your business.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-accent/50 border border-navy-accent/50 rounded-xl text-white placeholder-muted-foreground focus:outline-none focus:border-orange-primary/50 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-accent/50 border border-navy-accent/50 rounded-xl text-white placeholder-muted-foreground focus:outline-none focus:border-orange-primary/50 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-accent/50 border border-navy-accent/50 rounded-xl text-white placeholder-muted-foreground focus:outline-none focus:border-orange-primary/50 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project and goals..."
                    />
                  </div>
                  
                  <button type="submit" className="w-full btn-primary">
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 animate-fade-in">
                  <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    Message Sent! 🚀
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-navy-accent/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold text-gradient-primary">AI Content Pro</div>
              <div className="w-2 h-2 bg-orange-primary rounded-full animate-pulse"></div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2024 AI Content Pro. Transforming businesses with strategic AI content.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2 text-xs text-muted-foreground">
                <a href="#" className="hover:text-orange-primary transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-orange-primary transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-orange-primary transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
