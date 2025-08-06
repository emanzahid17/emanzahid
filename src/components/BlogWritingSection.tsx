
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, BookOpen, Clock, TrendingUp, Eye, Heart, Share2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BlogWritingSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const headerRef = useScrollAnimation();

  const blogSamples = [
    {
      id: 1,
      title: "AI Content Strategy: 10x Your Results in 30 Days",
      category: "Strategy",
      readTime: "12 min read",
      engagement: "15.2K views",
      excerpt: "The complete guide to implementing AI in your content workflow. From ideation to distribution, discover the exact process that's helped 200+ businesses scale their content impact.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI Strategy", "Content Marketing", "Growth"],
      metrics: {
        views: "15.2K",
        engagement: "340%",
        leads: "89"
      }
    },
    {
      id: 2,
      title: "The Psychology of High-Converting Copy",
      category: "Psychology",
      readTime: "9 min read", 
      engagement: "22.8K views",
      excerpt: "Uncover the psychological triggers that make people buy. Based on analysis of $50M+ in sales data and cognitive bias research from leading universities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tags: ["Psychology", "Conversion", "Sales Copy"],
      metrics: {
        views: "22.8K", 
        engagement: "520%",
        leads: "156"
      }
    },
    {
      id: 3,
      title: "Prompt Engineering Mastery: $10K+ Per Month",
      category: "Technical",
      readTime: "15 min read",
      engagement: "31.5K views", 
      excerpt: "Turn prompt engineering into a high-income skill. Real case studies, proven frameworks, and the exact prompts generating $10K+/month for freelancers.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tags: ["Prompt Engineering", "AI Tools", "Freelancing"],
      metrics: {
        views: "31.5K",
        engagement: "680%", 
        leads: "234"
      }
    }
  ];

  return (
    <section id="blog-writing" className="py-24 bg-gradient-to-br from-navy-secondary/50 via-navy-primary to-navy-secondary/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-blue-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-accent/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-accent/20 to-purple-accent/20 border border-blue-accent/30 rounded-full text-blue-accent text-sm font-medium mb-6 backdrop-blur-glass">
            <BookOpen className="w-4 h-4 mr-2" />
            Strategic Blog Content
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
            Blog Content That <span className="text-gradient-blue">Drives Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every blog post is strategically crafted to build authority, drive traffic, and convert readers into customers. 
            See the content that's generating millions of views and thousands of leads.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 stagger-animation">
          {blogSamples.map((blog, index) => (
            <div
              key={blog.id}
              className={`group card-primary card-hover-lift cursor-pointer relative overflow-hidden ${
                activeCard === blog.id ? 'border-blue-accent/50 shadow-2xl shadow-blue-accent/20' : ''
              } fade-in-up`}
              onMouseEnter={() => setActiveCard(blog.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 group-hover:shadow-xl group-hover:shadow-blue-accent/10 transition-all duration-500">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 via-navy-primary/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-accent to-purple-accent text-white px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-sm">
                  {blog.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="space-y-4">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {blog.engagement}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-accent transition-colors duration-300 leading-tight">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-navy-accent/50 text-blue-accent text-xs rounded-full border border-blue-accent/20 hover:bg-blue-accent/10 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-navy-accent/30">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center text-green-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="font-semibold">+{blog.metrics.engagement}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {blog.metrics.leads} leads
                    </div>
                  </div>
                  
                  <button className="btn-ghost text-sm group-hover:scale-105 transition-transform duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 fade-in-up">
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3">2.5M+</div>
            <div className="text-muted-foreground font-medium">Monthly Blog Readers</div>
            <div className="text-green-400 text-sm mt-2">↗ 340% growth</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3">85%</div>
            <div className="text-muted-foreground font-medium">Content Engagement Rate</div>
            <div className="text-green-400 text-sm mt-2">↗ Industry avg: 12%</div>
          </div>
          <div className="card-primary text-center hover:scale-105 transition-all duration-500">
            <div className="metric-counter mb-3">1,200+</div>
            <div className="text-muted-foreground font-medium">Qualified Leads/Month</div>
            <div className="text-green-400 text-sm mt-2">↗ $240K value</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <div className="card-primary max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/5 via-transparent to-purple-accent/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Authority Through <span className="text-gradient-blue">Strategic Content?</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's create a blog strategy that positions you as the go-to expert and drives consistent, qualified leads.
              </p>
              <button className="btn-primary text-lg px-8 py-4">
                Get My Blog Strategy
                <BookOpen className="w-6 h-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogWritingSection;
