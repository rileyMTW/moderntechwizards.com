import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Brain, Phone, Cloud, Workflow, Code2, ShieldCheck, Compass,
  Lightbulb, Rocket, Activity, ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "AI & LLM Systems",
      description: "Applied AI that makes it to production - not prototypes that stall.",
      features: [
        "LLM-powered apps, assistants, agents, and retrieval (RAG) over your own data",
        "MCP servers and tool integrations for Claude and ChatGPT",
        "Predictive models: lead and deal scoring, classification, risk and intent detection",
        "Multi-provider builds across Anthropic, OpenAI, Azure OpenAI, and Gemini"
      ]
    },
    {
      icon: Phone,
      title: "Real-Time Voice AI & Telephony",
      description: "Phone systems that hold natural, sub-second conversations.",
      features: [
        "Voice agents streaming speech-to-text through an LLM to text-to-speech over Twilio",
        "Call intelligence: transcription, scoring, and automatic summaries",
        "SIP trunking and phone-number provisioning at scale",
        "Integrations with major telephony platforms (RingCentral, Genesys, Dialpad, and more)"
      ],
      link: "/voice"
    },
    {
      icon: Cloud,
      title: "Cloud & Data Engineering",
      description: "Architecture and hands-on build on Azure and AWS, designed to scale.",
      features: [
        "Azure (Functions, Logic Apps, App Service, Key Vault) and AWS (Lambda, SageMaker, S3)",
        "Databricks pipelines, Delta tables, and large-scale ETL",
        "Infrastructure as code with Terraform",
        "PostgreSQL and SQL Server data platforms, observability, and cost control"
      ]
    },
    {
      icon: Workflow,
      title: "Integration & Workflow Automation",
      description: "Make your systems talk to each other - and run themselves.",
      features: [
        "Connect your CRM, LOS/POS, telephony, and lead providers",
        "Azure Logic Apps estates and custom API engineering",
        "Automate manual, multi-step processes across dozens of systems",
        "Reliable, observable data flow so nothing falls through the cracks"
      ]
    },
    {
      icon: Code2,
      title: "Custom Software & SaaS",
      description: "When off-the-shelf does not fit, we build exactly what you need.",
      features: [
        "Multi-tenant web applications (React, Node, TypeScript, PostgreSQL)",
        "Internal tools, dashboards, and custom reporting",
        "Document generation and task automation",
        "Designed around your exact workflow, not a template"
      ]
    },
    {
      icon: ShieldCheck,
      title: "ML Evaluation & AI Governance",
      description: "Proof that a system works - and stays compliant.",
      features: [
        "Gold-standard eval sets, benchmarking, calibration, and drift monitoring",
        "Model fine-tuning when a smaller, cheaper model will do the job",
        "AI governance under SOC 2: model inventories, validation, and risk review",
        "Fairness and compliance testing (ECOA, FHA, TCPA, GLBA) and Do-Not-Call handling"
      ]
    },
    {
      icon: Compass,
      title: "Advisory & Technical Leadership",
      description: "Senior guidance that reverse-engineers how you actually operate.",
      features: [
        "Discovery consulting that maps your real process end to end",
        "Architecture reviews and pragmatic technology roadmaps",
        "Fractional or embedded engineering leadership",
        "Build-versus-buy and vendor selection guidance"
      ]
    }
  ];

  const capabilities = [
    "Azure", "AWS", "Databricks", "Python", "TypeScript / React", "Node.js",
    ".NET / C#", "Twilio", "Anthropic & OpenAI", "PostgreSQL & SQL Server",
    "Terraform", "Azure Logic Apps"
  ];

  const engagements = [
    {
      icon: Lightbulb,
      title: "Advisory & Architecture",
      description: "A short, focused engagement to assess your systems, design the right architecture, and hand you a concrete roadmap you can act on - with or without us."
    },
    {
      icon: Rocket,
      title: "Build & Ship",
      description: "Hands-on, fixed-scope project work. We write the production code and deliver a working system that is integrated with your stack and measured against a real outcome."
    },
    {
      icon: Activity,
      title: "Operate & Improve",
      description: "An ongoing partnership to run, monitor, and continuously improve what is live - including fractional technical leadership for your team."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            End-to-end technology consulting and engineering. We solve hard problems with software, data, and AI - and we own the result from architecture to production.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">Technologies We Work In</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {capabilities.map((capability, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-base px-4 py-2 neon-border"
                data-testid={`badge-capability-${index}`}
              >
                {capability}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-effect neon-glow-hover transition-all duration-300 hover:scale-[1.02]"
              data-testid={`card-service-${index}`}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-md bg-primary/20 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link href={service.link}>
                    <Button variant="outline" size="sm" className="mt-6 hover-elevate active-elevate-2" data-testid={`button-service-link-${index}`}>
                      Hear it in action
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4 gradient-text" data-testid="text-how-we-work">
              How We Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every engagement is scoped to what you actually need. We pick the model that fits the problem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.map((engagement, index) => (
              <Card
                key={index}
                className="glass-effect neon-glow-hover transition-all duration-300"
                data-testid={`card-engagement-${index}`}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-md bg-primary/20 flex items-center justify-center mb-4">
                    <engagement.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-display">{engagement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{engagement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center glass-effect rounded-lg p-10 neon-border">
          <h3 className="font-display text-3xl font-bold mb-4 gradient-text">
            Let's scope your project
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We do not post fixed prices, because serious consulting work is not one-size-fits-all. Tell us what you are trying to do and we will put together a proposal.
          </p>
          <Link href="/contact" data-testid="link-contact-cta">
            <Button size="lg" className="neon-glow-hover font-semibold px-8 py-6 text-lg" data-testid="button-get-proposal">
              Get a proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
