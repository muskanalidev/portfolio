import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import SplitHeading from "./SplitHeading";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-16 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <AnimatedHeading
          as="h2"
          text="get in touch"
          className="text-xl md:text-2xl font-bold mb-3 text-center text-white"
        />

        <p className="text-center text-muted-foreground mb-7 max-w-2xl mx-auto">
          Open for opportunities, collaborations, and meaningful work. Reach out
          over Instagram DMs, WhatsApp, or email — I respond to collaboration
          requests and professional inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <SplitHeading
              tag="h3"
              text="contact information"
              className="text-base md:text-lg font-semibold mb-5"
              textAlign="left"
            />

            <div className="space-y-5 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <SplitHeading tag="h4" text="email" delay={12} className="font-medium" textAlign="left" />
                  <a
                    href="mailto:mehtabamuskan13@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mehtabamuskan13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <SplitHeading tag="h4" text="whatsapp" delay={12} className="font-medium" textAlign="left" />
                  <a
                    href="https://wa.me/919949790293"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 99497 90293
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-primary/10">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <SplitHeading tag="h4" text="instagram" delay={12} className="font-medium" textAlign="left" />
                  <a
                    href="https://www.instagram.com/muskan4li/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @muskan4li
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <SplitHeading
                tag="h4"
                text="connect with me"
                delay={14}
                className="font-medium mb-4"
                textAlign="center"
              />
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="https://github.com/itsmuskanali" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-5 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <SplitHeading
              tag="h3"
              text="send a message"
              className="text-base md:text-lg font-semibold mb-5"
              textAlign="left"
            />

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3.5 py-2.5 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-3.5 py-2.5 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "sending..." : "send message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
