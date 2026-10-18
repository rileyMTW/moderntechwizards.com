import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Brain, Cloud, Workflow, Phone, ArrowRight } from "lucide-react";
import iconImage from "@assets/Gemini_Generated_Image_fzb2obfzb2obfzb2_1763412873745.png";

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI & LLM Systems",
      description: "Applied AI that ships: LLM-powered apps, retrieval and agents, predictive models for scoring and classification, plus rigorous evaluation so you know it actually works."
    },
    {
      icon: Cloud,
      title: "Cloud & Data Engineering",
      description: "Architecture and hands-on build on Azure and AWS - serverless, data pipelines, and ETL - designed to scale, stay observable, and run reliably in production."
    },
    {
      icon: Workflow,
      title: "Integration & Automation",
      description: "We connect your CRM, phone systems, and line-of-business tools into automated workflows that remove manual work and keep data flowing across every system."
    }
  ];

  const industries = [
    "Mortgage", "Insurance", "Lending", "Financial Services",
    "Real Estate", "Healthcare", "Home Services", "Any complex operation"
  ];

  const steps = [
    {
      number: "01",
      title: "Discover & Architect",
      description: "We reverse-engineer how your business actually works, pinpoint the highest-impact opportunities, and design a solution that fits your constraints - including compliance."
    },
    {
      number: "02",
      title: "Build & Integrate",
      description: "We write the production code and wire it into your existing systems - CRM, telephony, data platforms - instead of handing you a demo that never ships."
    },
    {
      number: "03",
      title: "Launch & Operate",
      description: "We put it into production, measure the real result, and keep improving it - with monitoring, evaluation, and governance built in from day one."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img
              src={iconImage}
              alt="Modern Tech Wizards Icon"
              className="h-40 w-40 rounded-full object-cover neon-border animate-pulse"
            />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text" data-testid="text-hero-headline">
            Technology that goes to production and stays there
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subheadline">
            We are a technology consultancy that architects, builds, and operates production AI, cloud, data, and automation systems - end to end, including the hard parts like integration and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="neon-glow-hover" data-testid="button-get-in-contact">
                <Phone className="mr-2 h-5 w-5" />
                Get in touch
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="hover-elevate active-elevate-2" data-testid="button-explore-services">
                Explore services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-4" data-testid="text-what-we-do">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Senior, hands-on engineering across the full stack of modern technology - not slideware.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect neon-glow-hover transition-all duration-300 hover:scale-105" data-testid={`card-feature-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" className="hover-elevate active-elevate-2" data-testid="button-see-all-services">
                See all services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-4" data-testid="text-who-we-help">
            Who We Help
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We specialize in complex and regulated industries, where "the demo looked good" is not a result.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-base px-6 py-2 neon-border hover-elevate"
                data-testid={`badge-industry-${index}`}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16" data-testid="text-how-it-works">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4" data-testid={`step-${index}`}>
                <div className="inline-block">
                  <div className="font-display text-6xl font-bold gradient-text">{step.number}</div>
                </div>
                <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="glass-effect text-center p-12 neon-border neon-glow">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                Have a hard technology problem?
              </h2>
              <p className="text-lg text-muted-foreground">
                Tell us what you are trying to do. We will tell you honestly whether we can help, and how we would approach it.
              </p>
              <Link href="/contact">
                <Button size="lg" className="neon-glow-hover" data-testid="button-cta-contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
