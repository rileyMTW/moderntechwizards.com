import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play, Pause, Phone, Mic, Repeat, PhoneForwarded, Gauge, ArrowRight } from "lucide-react";
import inboundCsAudio from "@assets/inbound_cs_01.wav";
import newClientAppointmentAudio from "@assets/new_client_appointment_01.wav";
import leadFollowupAudio from "@assets/lead_followup_01.wav";
import statusFollowupAudio from "@assets/status_followup_01.wav";

interface AudioDemo {
  id: string;
  title: string;
  category: string;
  industry: string;
  filePath: string;
  language: string;
  voiceProfile: string;
  description: string;
}

export default function VoiceAgentsPage() {
  const [demos, setDemos] = useState<AudioDemo[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetch('/demo-audio.json')
      .then(res => res.json())
      .then(data => setDemos(data))
      .catch(err => console.error('Failed to load demos:', err));
  }, []);

  // Cleanup: stop audio when leaving the page
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  const categories = Array.from(new Set(demos.map(d => d.category)));

  const capabilities = [
    {
      icon: Gauge,
      title: "Sub-Second Responses",
      description: "Streaming speech-to-text through an LLM to text-to-speech, so conversations feel natural - not like talking to a robot on hold."
    },
    {
      icon: Mic,
      title: "Live Interruption Handling",
      description: "Callers can interrupt, change their mind, and talk over the agent. It keeps up, just like a real person would."
    },
    {
      icon: PhoneForwarded,
      title: "Warm Transfers & Booking",
      description: "Agents qualify the caller, book appointments on your calendar, and hand off to a human with full context when it matters."
    },
    {
      icon: Repeat,
      title: "Inbound & Outbound",
      description: "Answer every inbound call 24/7, and place outbound calls for follow-ups, reminders, reactivation, and lead nurturing."
    }
  ];

  const getAudioPath = (filePath: string) => {
    if (filePath.includes('inbound_cs_01.wav')) return inboundCsAudio;
    if (filePath.includes('new_client_appointment_01.wav')) return newClientAppointmentAudio;
    if (filePath.includes('lead_followup_01.wav')) return leadFollowupAudio;
    if (filePath.includes('status_followup_01.wav')) return statusFollowupAudio;
    return '';
  };

  const handlePlay = (id: string, filePath: string) => {
    const audioPath = getAudioPath(filePath);

    if (!audioPath) {
      console.log('No audio file available for:', id);
      return;
    }

    // If clicking the same audio that's playing, pause it
    if (playingId === id && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
      setPlayingId(null);
      return;
    }

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    // Create and play new audio
    const audio = new Audio(audioPath);
    audioRef.current = audio;

    audio.onended = () => {
      setPlayingId(null);
      audioRef.current = null;
    };

    audio.onerror = (err) => {
      console.error('Audio playback error:', err);
      setPlayingId(null);
      audioRef.current = null;
    };

    audio.play()
      .then(() => {
        setPlayingId(id);
      })
      .catch(err => {
        console.error('Playback error:', err);
        setPlayingId(null);
        audioRef.current = null;
      });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 neon-border">
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            Real-Time AI Voice Agents
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4" data-testid="text-page-description">
            One of our specialties: AI phone agents that hold natural, sub-second conversations, handle real call flows, and connect straight into your systems.
          </p>
          <p className="text-lg text-foreground/90 max-w-4xl mx-auto">
            The clips below are sample agents. We build custom agents around your business, your scripts, and your integrations - tell us what you want and we will build it.
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((cap, index) => (
            <Card key={index} className="glass-effect neon-glow-hover transition-all duration-300" data-testid={`card-capability-${index}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-3">
                  <cap.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{cap.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{cap.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demos */}
        <h2 className="font-display text-4xl font-bold text-center mb-4 gradient-text" data-testid="text-demos-heading">
          Hear It In Action
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Real sample conversations across common call types.
        </p>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="font-display text-2xl font-bold mb-8 text-center" data-testid={`text-category-${catIndex}`}>
              {category}
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-6 max-w-2xl w-full">
                {demos
                  .filter(demo => demo.category === category)
                  .map((demo) => (
                  <Card
                    key={demo.id}
                    className="glass-effect neon-glow-hover transition-all duration-300"
                    data-testid={`card-demo-${demo.id}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{demo.title}</CardTitle>
                          {demo.industry && (
                            <div className="flex gap-2 mb-3">
                              <Badge variant="outline">{demo.industry}</Badge>
                            </div>
                          )}
                        </div>
                        <Button
                          size="icon"
                          variant={playingId === demo.id ? "default" : "outline"}
                          onClick={() => handlePlay(demo.id, demo.filePath)}
                          className="neon-glow-hover"
                          data-testid={`button-play-${demo.id}`}
                          disabled={!demo.filePath}
                        >
                          {playingId === demo.id ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                      <CardDescription>{demo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm space-y-1">
                        <p className="text-muted-foreground">
                          <span className="text-foreground font-medium">Voice:</span> {demo.voiceProfile}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="text-foreground font-medium">Language:</span> {demo.language}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-8 text-center glass-effect rounded-lg p-10 neon-border">
          <h3 className="font-display text-3xl font-bold mb-4 gradient-text">
            Want a voice agent built for your business?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We design the conversation, the voice, and the integrations around how you actually work.
          </p>
          <Link href="/contact" data-testid="link-contact-cta">
            <Button size="lg" className="neon-glow-hover font-semibold px-8 py-6 text-lg" data-testid="button-contact">
              Let's build it
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
