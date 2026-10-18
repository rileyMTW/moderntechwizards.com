import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Rocket, Gauge, ShieldCheck } from "lucide-react";
import profileImage from "@assets/1757973172115_1763309380990.jpg";
import iconImage from "@assets/Gemini_Generated_Image_fzb2obfzb2obfzb2_1763412873745.png";

export default function AboutPage() {
  const beliefs = [
    {
      icon: Rocket,
      title: "Production Over Demos",
      description: "A system that looks good in a slide deck is not a result. We build technology that goes live, survives contact with real users, and stays running."
    },
    {
      icon: Gauge,
      title: "Measured, Not Assumed",
      description: "We prove whether a system actually works - with evaluation sets, benchmarking, and monitoring - instead of trusting that the demo was impressive."
    },
    {
      icon: ShieldCheck,
      title: "Compliance Is a Design Constraint",
      description: "In regulated industries, governance is not a document you produce afterward. We design for it from the first line of code."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src={iconImage}
              alt="Modern Tech Wizards Icon"
              className="h-32 w-32 rounded-full object-cover neon-border"
            />
          </div>
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            About Modern Tech Wizards
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <p className="text-lg text-center leading-relaxed" data-testid="text-mission">
                  We help businesses solve hard problems with technology - and we own the result end to end,
                  from architecture to production code to the governance that keeps it auditable. We bring the kind of
                  senior, hands-on engineering usually locked inside large tech teams to companies that need it most.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold mb-8 text-center">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beliefs.map((belief, index) => (
                <Card
                  key={index}
                  className="glass-effect neon-glow-hover transition-all duration-300"
                  data-testid={`card-belief-${index}`}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-md bg-primary/20 flex items-center justify-center mx-auto">
                      <belief.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{belief.title}</h3>
                    <p className="text-muted-foreground">{belief.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Why Modern Tech Wizards?</h2>
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-4">
                <div className="space-y-4" data-testid="text-why-us">
                  <p className="text-lg leading-relaxed">
                    Most vendors sell you a diagram and disappear. We write the production code. We have built and
                    operated enterprise AI, cloud, and data systems for regulated industries - the environments where
                    "move fast and break things" is not an option.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Every engagement starts by understanding your real process - not a template. We design, build, and
                    deploy systems that integrate with your existing tools, speak your customers' language, and hold up
                    under audit.
                  </p>
                  <p className="text-lg leading-relaxed">
                    And because we stay close to the data and pipeline layer, we can sit down with your leadership,
                    reverse-engineer how your team actually operates, and ship something against it the same quarter.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Founder</h2>
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center mb-6">
                  <Avatar className="w-32 h-32 mx-auto mb-4 neon-border">
                    <AvatarImage src={profileImage} alt="Riley Cohen" />
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                  <h3 className="font-display text-2xl font-bold mb-2 gradient-text">Riley Cohen</h3>
                  <p className="text-lg text-muted-foreground">Founder & Principal Engineer</p>
                </div>

                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Riley is an AI engineering leader who architects, builds, and operates production AI products end to
                    end. He leads AI engineering at Insellerate, where he owns a four-product AI line serving roughly 40
                    enterprise mortgage and insurance lenders: real-time voice agents, a call-intelligence engine that
                    scores conversations for deal likelihood and compliance risk, an AI sales-training platform, and the
                    governance layer that keeps all of it auditable.
                  </p>

                  <p>
                    He is the primary engineer on most of it - roughly 250 Databricks pipelines, three multi-tenant SaaS
                    applications (React, Node, TypeScript, PostgreSQL), a 700-plus workflow Azure Logic Apps estate
                    connecting the CRM to more than 40 external systems, and a voice platform that holds sub-second phone
                    conversations over Twilio with live interruption handling and warm transfers.
                  </p>

                  <p>
                    He also authored the SOC 2 AI governance framework that serves as the audit system of record,
                    maintains a 32-model inventory with validation and quarterly review, chairs the Model Risk Committee,
                    and built ECOA and FHA fairness testing into the model lifecycle.
                  </p>

                  <p>
                    Riley founded Modern Tech Wizards to bring that same end-to-end capability - applied AI, cloud and
                    data engineering, integrations, and AI governance - to businesses that want to modernize how they
                    operate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
