import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Clock, Phone, CheckCircle2 } from "lucide-react";
import iconImage from "@assets/Gemini_Generated_Image_fzb2obfzb2obfzb2_1763412873745.png";

const WEBHOOK_URL = "https://prod-54.westus.logic.azure.com:443/workflows/f81d896d1c2643509b532e2069a339d0/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=j7NMFa6JhJnE14jGDNW1CSUagYu5itl7VYMeuFiXkBU";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError('There was an error submitting your inquiry. Please try again or email us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            Ready to modernize your business? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="py-12 text-center space-y-4" data-testid="success-message">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Thank you for your interest!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We'll be reaching out to you shortly to discuss how we can help.
                    </p>
                    <Button 
                      onClick={() => setIsSuccess(false)} 
                      variant="outline"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="glass-effect"
                        data-testid="input-full-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        required
                        className="glass-effect"
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@acme.com"
                        required
                        className="glass-effect"
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="glass-effect"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your use case *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'm interested in automating..."
                      required
                      className="min-h-32 glass-effect"
                      data-testid="input-message"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-md bg-destructive/20 border border-destructive/50 text-destructive text-sm" data-testid="error-message">
                      {error}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full neon-glow-hover" 
                    size="lg"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:riley@moderntechwizards.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="text-contact-email"
                >
                  riley@moderntechwizards.com
                </a>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:949-887-9822" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="text-contact-phone"
                >
                  949-887-9822
                </a>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-response-time">
                  We typically respond within 1 business day
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
