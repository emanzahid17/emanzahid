
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, BookOpen, Clock, TrendingUp, Eye, Heart, Share2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BlogWritingSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const headerRef = useScrollAnimation();

  const blogSamples = [
    {
      id: 1,
      title: "Step-by-Step Process for Data Analysis",
      category: "Analytics", 
      readTime: "8 min read",
      engagement: "18.5K views",
      excerpt: "Master the complete process of data analysis with Napkin AI. From univariate analysis to exploratory data analysis (EDA), learn the techniques and tools that drive insights.",
      image: "/lovable-uploads/40996d7d-91eb-46e5-b4a7-8f2ab6bb8395.png",
      tags: ["Data Analysis", "Analytics", "AI Tools"],
      metrics: {
        views: "18.5K",
        engagement: "420%",
        leads: "127"
      }
    },
    {
      id: 2,
      title: "ChatGPT: Level Up Your Sales Game",
      category: "Sales",
      readTime: "10 min read",
      engagement: "25.3K views", 
      excerpt: "Discover how ChatGPT revolutionizes sales with compelling pitches, personalized marketing messages, and effective lead follow-up. Transform your sales process with AI.",
      image: "/lovable-uploads/90aa34bf-cf22-458c-89ed-ecf7098f4ad0.png",
      tags: ["Sales", "ChatGPT", "Marketing"],
      metrics: {
        views: "25.3K",
        engagement: "580%",
        leads: "198"
      }
    },
    {
      id: 3,
      title: "Understanding Prompt Engineering",
      category: "Technical",
      readTime: "12 min read",
      engagement: "31.8K views",
      excerpt: "Deep dive into prompt engineering best practices. Learn why specification matters and how to craft precise inputs for maximum AI model effectiveness.",
      image: "/lovable-uploads/e9011b41-2485-4d7b-94ee-1594492a2b5b.png", 
      tags: ["Prompt Engineering", "AI", "Technical Writing"],
      metrics: {
        views: "31.8K",
        engagement: "690%",
        leads: "245"
      }
    },
    {
      id: 4,
      title: "Why Specificity is Important in Prompt Engineering",
      category: "AI Strategy",
      readTime: "9 min read",
      engagement: "22.7K views",
      excerpt: "By Eman Zahid - Explore the critical importance of specificity in prompt engineering and how it dramatically improves AI model outputs and reduces confusion.",
      image: "/lovable-uploads/757c4d96-a5e5-48f2-9262-07cd07f4afef.png",
      tags: ["Prompt Engineering", "AI Strategy", "Best Practices"],
      metrics: {
        views: "22.7K", 
        engagement: "510%",
        leads: "167"
      }
    },
    {
      id: 5,
      title: "Security Industry Blog Collection",
      category: "Security",
      readTime: "15 min read",
      engagement: "45.2K views",
      excerpt: "Comprehensive collection covering mall security, CCTV regulations, commercial security guards, long-term care security, private investigators, and security officer differences in Canada.",
      image: "/lovable-uploads/9128339f-1231-4116-8047-7e07a36395fe.png",
      tags: ["Security", "Industry Analysis", "Canadian Law"],
      metrics: {
        views: "45.2K",
        engagement: "760%", 
        leads: "312"
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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 stagger-animation">
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
