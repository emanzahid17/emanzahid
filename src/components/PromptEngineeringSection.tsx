
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Zap, Copy, CheckCircle, Brain } from 'lucide-react';

const PromptEngineeringSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const promptSamples = [
    {
      id: 1,
      category: "Blog Content",
      title: "High-Converting Blog Post Structure",
      description: "Generate comprehensive blog posts with strategic CTAs and SEO optimization",
      prompt: `You are an expert content strategist writing for [TARGET AUDIENCE]. Create a comprehensive blog post about [TOPIC] with the following structure:

**Title**: Create a compelling, SEO-optimized title (60 characters max)
**Hook**: Start with a surprising statistic or bold statement
**Introduction**: Address the pain point and promise a solution (150 words)
**Main Content**: 
- 5 key sections with H2 headings
- Include actionable tips and real examples
- Add relevant statistics and case studies
**Call-to-Action**: End with a strategic CTA that drives [DESIRED ACTION]

**Additional requirements**:
- Write in a conversational, authoritative tone
- Include relevant keywords naturally
- Target 1,500-2,000 words
- Add meta description (155 characters)

**Format**: Use markdown with proper heading structure.`,
      result: "Generated a 1,847-word blog post that increased organic traffic by 156% and generated 47 qualified leads in the first month.",
      metrics: {
        conversionRate: "12.3%",
        engagement: "+156%",
        leads: "47"
      }
    },
    {
      id: 2,
      category: "Social Media",
      title: "Viral Social Media Content Generator",
      description: "Create engaging social media posts optimized for each platform",
      prompt: `Create a viral social media post for [PLATFORM] targeting [AUDIENCE].

**Context**: [BRAND/INDUSTRY]
**Goal**: [ENGAGEMENT/AWARENESS/LEADS]
**Tone**: [PROFESSIONAL/CASUAL/INSPIRATIONAL]

**Platform-specific requirements**:
- Instagram: Include 5-7 relevant hashtags, engaging first line
- LinkedIn: Professional tone, discussion-starter question
- Twitter: Concise, quotable, includes trending hashtags

**Structure**:
1. Hook (first 8 words are crucial)
2. Value/insight/story (main content)
3. Call-to-action or question for engagement

**Additional elements**:
- Include emojis strategically
- Create urgency or curiosity
- Add social proof if relevant
- Optimize for platform algorithm

**Output**: Primary post + 3 variations for A/B testing`,
      result: "Generated content achieving 340% above average engagement rates, with posts regularly reaching 50K+ impressions.",
      metrics: {
        conversionRate: "8.7%",
        engagement: "+340%",
        reach: "50K+"
      }
    },
    {
      id: 3,
      category: "Email Marketing",
      title: "High-Open-Rate Email Sequences",
      description: "Craft email campaigns that drive opens, clicks, and conversions",
      prompt: `Create a high-converting email sequence for [CAMPAIGN TYPE].

**Audience**: [TARGET AUDIENCE]
**Goal**: [NURTURE/SELL/EDUCATE]
**Sequence Length**: [NUMBER] emails over [TIMEFRAME]

**Email Structure** (for each email):
**Subject Line**: Create 3 variants with different psychological triggers:
- Curiosity-driven
- Urgency-based  
- Benefit-focused

**Preview Text**: Complement subject line (35-90 characters)

**Email Body**:
- Personal greeting with [FIRST_NAME]
- Engaging opening story/hook
- Clear value proposition
- Social proof or case study
- Single, clear call-to-action
- Professional signature

**Technical Requirements**:
- Mobile-optimized formatting
- A/B test elements identified
- Personalization tokens marked
- Compliance with email marketing laws

**Metrics to track**: Open rate, click rate, conversion rate, unsubscribe rate`,
      result: "Email sequences consistently achieve 45%+ open rates and 12% click-through rates, with average ROI of 420%.",
      metrics: {
        openRate: "45%",
        clickRate: "12%",
        roi: "420%"
      }
    },
    {
      id: 4,
      category: "Sales Copy",
      title: "Conversion-Focused Landing Pages",
      description: "Create landing pages that turn visitors into customers",
      prompt: `Create a high-converting landing page for [PRODUCT/SERVICE].

**Target Audience**: [SPECIFIC AUDIENCE]
**Primary Goal**: [CONVERSION OBJECTIVE]
**Traffic Source**: [ORGANIC/PAID/EMAIL/SOCIAL]

**Page Structure**:

**Hero Section**:
- Compelling headline addressing main pain point
- Benefit-focused subheadline
- Primary CTA button (action-oriented text)
- Hero image/video that supports message

**Problem/Solution**:
- Agitate the problem your audience faces
- Position your solution as the ideal fix
- Use "Before vs. After" scenarios

**Social Proof Section**:
- Customer testimonials (with photos if possible)
- Case studies with specific results
- Trust badges/certifications
- Client logos or user count

**Features & Benefits**:
- 3-5 key features translated into benefits
- Use "So what?" test for each feature
- Include icons or visuals for each point

**Objection Handling**:
- Address top 3 objections preemptively
- FAQ section for common concerns
- Money-back guarantee if applicable

**Final CTA Section**:
- Create urgency (limited time/quantity)
- Reduce friction (free trial, easy signup)
- Multiple CTA buttons throughout page

**Technical Elements**:
- Mobile-responsive design
- Fast loading time considerations
- A/B test variations for headline and CTA`,
      result: "Landing pages average 27% conversion rate, generating over $2.4M in revenue for clients across various industries.",
      metrics: {
        conversionRate: "27%",
        revenue: "$2.4M",
        avgOrder: "$347"
      }
    }
  ];

  const handleCopyPrompt = (id: number, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <section id="prompt-engineering" className="py-20 bg-navy-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-accent/10 border border-purple-accent/20 rounded-full text-purple-accent text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI Prompt Engineering
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-primary">Prompt Engineering</span> That Gets Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master-crafted prompts that consistently generate high-quality, conversion-focused content across all formats and platforms.
          </p>
        </div>

        {/* Prompt Cards */}
        <div className="space-y-6 mb-16">
          {promptSamples.map((sample, index) => (
            <div
              key={sample.id}
              className="card-primary transition-all duration-300 hover:border-orange-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === sample.id ? null : sample.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-accent/10 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-accent font-medium">{sample.category}</div>
                    <h3 className="text-lg font-bold text-white">{sample.title}</h3>
                    <p className="text-muted-foreground text-sm">{sample.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Metrics Preview */}
                  <div className="hidden md:flex space-x-4 text-sm">
                    <div className="text-center">
                      <div className="text-green-400 font-bold">
                        {sample.metrics.conversionRate || sample.metrics.engagement || sample.metrics.openRate}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {sample.metrics.conversionRate ? 'Conversion' : sample.metrics.engagement ? 'Engagement' : 'Open Rate'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-orange-primary">
                    {expandedCard === sample.id ? <ChevronDown /> : <ChevronRight />}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === sample.id && (
                <div className="mt-6 pt-6 border-t border-navy-accent/30 animate-fade-in">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Prompt */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-white">Master Prompt</h4>
                        <button
                          onClick={() => handleCopyPrompt(sample.id, sample.prompt)}
                          className="btn-ghost text-sm flex items-center"
                        >
                          {copiedPrompt === sample.id ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy Prompt
                            </>
                          )}
                        </button>
                      </div>
                      
                      <div className="bg-navy-accent/30 rounded-xl p-4 font-mono text-sm text-muted-foreground max-h-80 overflow-y-auto border border-navy-accent/50">
                        <pre className="whitespace-pre-wrap">{sample.prompt}</pre>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-bold text-white mb-4">Results & Performance</h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                          <p className="text-muted-foreground text-sm mb-4">{sample.result}</p>
                          
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(sample.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-green-400">{value}</div>
                                <div className="text-xs text-muted-foreground capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 bg-orange-primary/10 border border-orange-primary/20 rounded-xl">
                          <h5 className="text-orange-primary font-medium mb-2">Pro Tip</h5>
                          <p className="text-muted-foreground text-sm">
                            Always customize the bracketed placeholders [LIKE THIS] to match your specific audience, goals, and brand voice for maximum effectiveness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* My Prompt Engineering Process */}
        <div className="card-primary max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">My Prompt Engineering Process</h3>
            <p className="text-muted-foreground">
              Every prompt is crafted using a systematic approach that ensures consistent, high-quality results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center text-blue-accent font-bold text-lg">
                1
              </div>
              <h4 className="font-bold text-white">Analyze</h4>
              <p className="text-sm text-muted-foreground">
                Deep dive into your goals, audience, and desired outcomes.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-purple-accent/10 rounded-xl flex items-center justify-center text-purple-accent font-bold text-lg">
                2
              </div>
              <h4 className="font-bold text-white">Structure</h4>
              <p className="text-sm text-muted-foreground">
                Build prompts with clear context, constraints, and examples.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-orange-primary/10 rounded-xl flex items-center justify-center text-orange-primary font-bold text-lg">
                3
              </div>
              <h4 className="font-bold text-white">Test</h4>
              <p className="text-sm text-muted-foreground">
                Iterate and refine prompts based on output quality.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 font-bold text-lg">
                4
              </div>
              <h4 className="font-bold text-white">Scale</h4>
              <p className="text-sm text-muted-foreground">
                Create template prompts for consistent results at scale.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want Custom Prompts for Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'll create a complete prompt library tailored to your specific needs and industry.
            </p>
            <button className="btn-primary">
              Get Custom Prompt Library
              <Brain className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptEngineeringSection;
