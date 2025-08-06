
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Instagram, Twitter, Linkedin } from 'lucide-react';

const SocialMediaSection = () => {
  const [activePost, setActivePost] = useState<number | null>(null);

  const socialPosts = [
    {
      id: 1,
      platform: 'instagram',
      icon: <Instagram className="w-5 h-5" />,
      content: "🚀 Just helped a SaaS startup increase their organic reach by 340% in 60 days using AI-powered content strategy.\n\nThe secret? We didn't just create more content – we created SMARTER content.\n\n✨ Here's what we did:\n• Analyzed competitor gaps using AI tools\n• Optimized posting times with data insights\n• Created content pillars that actually convert\n• Used strategic hashtag research\n\n💡 The result: 15K new followers, 2.3M impressions, and most importantly – 127 new qualified leads.\n\n#AIContent #ContentStrategy #SaaS #Growth",
      engagement: {
        likes: 1847,
        comments: 156,
        shares: 89
      },
      performance: "+340% reach"
    },
    {
      id: 2,
      platform: 'linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      content: "Most content creators are asking the wrong question.\n\nInstead of \"What should I post?\"\n\nThey should be asking \"What problem am I solving?\"\n\nHere's the mindset shift that changed everything for my clients:\n\n❌ Content for content's sake\n✅ Content with clear intent\n\n❌ Posting daily without strategy\n✅ Posting strategically with purpose\n\n❌ Focusing on vanity metrics\n✅ Tracking business metrics\n\nResult? My clients see an average of 150% increase in qualified leads within 90 days.\n\nWhat's your biggest content challenge right now?",
      engagement: {
        likes: 3241,
        comments: 287,
        shares: 156
      },
      performance: "+150% leads"
    },
    {
      id: 3,
      platform: 'twitter',
      icon: <Twitter className="w-5 h-5" />,
      content: "AI won't replace content creators.\n\nContent creators who use AI will replace those who don't.\n\nHere are 5 AI tools I use daily:\n\n1. @OpenAI for ideation\n2. @jasper_ai for long-form content\n3. @copy_ai for social captions\n4. @luma_ai for video content\n5. @midjourney for visuals\n\nThe key? AI amplifies creativity, it doesn't replace it.\n\n#AI #ContentCreation #MarketingTools",
      engagement: {
        likes: 2156,
        comments: 194,
        shares: 267
      },
      performance: "+89% engagement"
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'from-pink-500 to-orange-500';
      case 'linkedin': return 'from-blue-600 to-blue-700';
      case 'twitter': return 'from-blue-400 to-blue-500';
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
