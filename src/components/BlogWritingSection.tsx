
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, BookOpen, Clock, TrendingUp } from 'lucide-react';

const BlogWritingSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const blogSamples = [
    {
      id: 1,
      title: "AI-Powered Content Strategy: The Future is Now",
      category: "Strategy",
      readTime: "8 min read",
      engagement: "2.5K views",
      excerpt: "Discover how artificial intelligence is revolutionizing content creation and why your brand needs an AI-first approach to stay competitive.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["AI", "Strategy", "Content Marketing"]
    },
    {
      id: 2,
      title: "10 Prompt Engineering Techniques That Drive Results",
      category: "Technical",
      readTime: "12 min read",
      engagement: "4.2K views",
      excerpt: "Master the art of prompt engineering with proven techniques that consistently generate high-converting content across all platforms.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      tags: ["Prompt Engineering", "AI", "Tools"]
    },
    {
      id: 3,
      title: "From Zero to Viral: Social Media Analytics Deep Dive",
      category: "Analytics",
      readTime: "15 min read",
      engagement: "6.8K views",
      excerpt: "Learn how to interpret social media analytics and turn data insights into content that consistently drives engagement and conversions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Analytics", "Social Media", "Growth"]
    }
  ];

  return (
    <section id="blog-writing" className="py-20 bg-navy-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-accent/10 border border-blue-accent/20 rounded-full text-blue-accent text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog Writing Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Strategic <span className="text-gradient-primary">Blog Content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every blog post is crafted with precision, backed by data, and optimized for both search engines and human engagement.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogSamples.map((blog, index) => (
            <div
              key={blog.id}
              className={`card-primary card-hover-lift cursor-pointer group ${
                activeCard === blog.id ? 'border-orange-primary/50' : ''
              }`}
              onMouseEnter={() => setActiveCard(blog.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/60 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-orange-primary text-white px-2 py-1 rounded text-xs font-medium">
                  {blog.category}
                </div>
              </div>

              {/* Blog Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {blog.engagement}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-orange-primary transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-navy-accent/50 text-blue-accent text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button className="btn-ghost text-sm">
                    Read Full Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Blog Strategy?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create content that not only ranks but converts your readers into loyal customers.
            </p>
            <button className="btn-primary">
              Discuss Your Blog Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogWritingSection;
