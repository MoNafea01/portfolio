import { PROFILE } from "@/constants";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/50">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Let's Connect
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm currently open to new opportunities, collaborations, and interesting AI projects.
                        Feel free to reach out — I'd love to hear from you!
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <a href={`mailto:${PROFILE.email}`}>
                        <Button size="lg" className="w-full sm:w-auto px-8">
                            <Mail className="mr-2 h-5 w-5" /> Send Email
                        </Button>
                    </a>
                    <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                            <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
                        </Button>
                    </a>
                </div>

                {/* Footer */}
                <div className="pt-8 border-t">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind CSS & shadcn/ui.
                    </p>
                </div>
            </div>
        </section>
    );
};
