
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const SocialMediaSection = () => {
  const [activePost, setActivePost] = useState<number | null>(null);

  const socialPosts = [
    {
      id: 1,
      platform: 'linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      content: "Your website is getting traffic but zero conversions. Sounds familiar?\n\nA founder booked a 1:1 with me, frustrated that their content wasn't converting.\n\nI checked their site.\nIt looked solid... until I read the content.\n\nIt was all AI-generated.\nZero value. Zero originality.\nNo storytelling. No authority.\nJust plain copy-paste.\n\nDuring the session, I showed them how to strategically use AI, not rely on it blindly.\n\nWe didn't talk about just what they were saying.\nWe explored how they were saying it.\n\nThe flow. The clarity. The emotions. The story behind the offer.\n\nI showed them\n\n✅ Why high-quality content ranks better.\n✅ Why Google penalizes thin AI copy.\n✅ Why good content drives conversions.\n\nTheir mindset shifted.\nAnd then they said:\n'Rewrite it for us.'\n\nSo I did.\n\nHere's what happened next (within 14 days):",
      engagement: {
        likes: 2847,
        comments: 195,
        shares: 128
      },
      performance: "+89% engagement"
    },
    {
      id: 2,
      platform: 'linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      content: "7 Ways Live Video Monitoring Secures Your Future\n\nAt Supreme Security Services, we protect your assets with cutting-edge live video monitoring solutions.\n\nHere are the 7 ways live video monitoring secures your future:\n\n1. Enhanced Security through AI-powered threat detection\n2. Faster Response to security incidents\n3. Cost Savings through reduced false alarms\n4. Real-time Monitoring for immediate action\n5. Deterrent to Crime with visible security presence\n6. Evidence Collection for investigations and prosecutions\n7. 24/7 Surveillance for continuous protection\n\nPartner with us for advanced live video monitoring. Contact Supreme Security Services today!",
      engagement: {
        likes: 1924,
        comments: 142,
        shares: 89
      },
      performance: "+156% security leads"
    },
    {
      id: 3,
      platform: 'linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      content: "🔥 Why Content Marketing Beats Paid Ads Every Time\n\nSpent $50K on ads last year?\nHere's what $5K in content marketing can do instead:\n\n❌ Paid Ads: Temporary visibility, expensive clicks, zero brand authority\n✅ Content Marketing: Permanent visibility, organic traffic, thought leadership\n\nReal example from a client:\n• Month 1-3: Built content strategy\n• Month 4-6: Published 24 strategic pieces\n• Month 7-12: Organic traffic increased 340%\n\nThe difference?\n→ Ads stop working when you stop paying\n→ Content keeps working 24/7 for years\n\nContent is not an expense.\nIt's an investment that compounds.\n\nWhat's your content strategy for 2024?",
      engagement: {
        likes: 3567,
        comments: 234,
        shares: 189
      },
      performance: "+340% organic traffic"
    },
    {
      id: 4,
      platform: 'facebook',
      icon: <Facebook className="w-5 h-5" />,
      content: "🎯 Understanding Prompt Engineering\n\nPrompt engineering is the practice of designing precise inputs to guide AI models toward producing useful and meaningful responses.\n\nKey Benefits:\n✅ Clearer AI outputs\n✅ Better task completion\n✅ Reduced ambiguity\n✅ More accurate results\n\nWhy Specification Matters:\n→ Helps AI understand context\n→ Reduces confusion\n→ Increases accuracy\n→ Saves time and effort\n\nSpecifying prompts helps in clarity and gives the context to AI, hence making it easier for the machine to provide the right solution.\n\n#PromptEngineering #AI #ContentStrategy #DigitalMarketing",
      engagement: {
        likes: 1892,
        comments: 167,
        shares: 95
      },
      performance: "+245% AI engagement"
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'from-pink-500 to-orange-500';
      case 'linkedin': return 'from-blue-600 to-blue-700';
      case 'twitter': return 'from-blue-400 to-blue-500';
      case 'facebook': return 'from-blue-600 to-blue-800';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section id="social-media" className="py-20 bg-navy-secondary/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-orange-primary/10 border border-orange-primary/20 rounded-full text-orange-primary text-sm font-medium mb-4">
            <Share2 className="w-4 h-4 mr-2" />
            Social Media Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Social Content That <span className="text-gradient-primary">Drives Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic social media content that builds communities, drives engagement, and converts followers into customers.
          </p>
        </div>

        {/* Social Posts Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {socialPosts.map((post, index) => (
            <div
              key={post.id}
              className={`relative transition-all duration-500 ${
                activePost === post.id ? 'scale-105 z-10' : ''
              }`}
              onMouseEnter={() => setActivePost(post.id)}
              onMouseLeave={() => setActivePost(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Social Media Post Card */}
              <div className="card-primary hover:border-orange-primary/30">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-3 px-3 py-2 bg-gradient-to-r ${getPlatformColor(post.platform)} rounded-full text-white`}>
                    {post.icon}
                    <span className="text-sm font-medium capitalize">{post.platform}</span>
                  </div>
                  <div className="text-xs text-orange-primary font-medium bg-orange-primary/10 px-2 py-1 rounded">
                    {post.performance}
                  </div>
                </div>

                {/* Post Content */}
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                </div>

                {/* Engagement Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-navy-accent/30">
                  <div className="flex items-center space-x-6 text-muted-foreground">
                    <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{formatNumber(post.engagement.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{formatNumber(post.engagement.comments)}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-green-400 transition-colors cursor-pointer">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">{formatNumber(post.engagement.shares)}</span>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-orange-primary transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="card-primary text-center">
            <div className="metric-counter mb-2">2.5M+</div>
            <div className="text-muted-foreground text-sm">Monthly Impressions</div>
          </div>
          <div className="card-primary text-center">
            <div className="metric-counter mb-2">47%</div>
            <div className="text-muted-foreground text-sm">Avg. Engagement Rate</div>
          </div>
          <div className="card-primary text-center">
            <div className="metric-counter mb-2">15K+</div>
            <div className="text-muted-foreground text-sm">New Followers/Month</div>
          </div>
          <div className="card-primary text-center">
            <div className="metric-counter mb-2">380+</div>
            <div className="text-muted-foreground text-sm">Qualified Leads</div>
          </div>
        </div>

        {/* Platforms We Excel At */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Platforms We Dominate</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Instagram', 'LinkedIn', 'Twitter', 'Facebook', 'TikTok', 'Pinterest'].map((platform) => (
              <div key={platform} className="card-primary px-6 py-3 hover:border-orange-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="text-white font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Social Presence?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create a social media strategy that builds your brand and drives real business results.
            </p>
            <button className="btn-primary">
              Get Social Media Strategy
              <Share2 className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
