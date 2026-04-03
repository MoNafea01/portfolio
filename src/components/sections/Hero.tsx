import { ArrowRight, Download, Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/constants";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-background pt-20 pb-10">
            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500 slide-in-from-bottom-4">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                        Available for Hire
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/80 to-foreground/60 pb-2">
                        {PROFILE.name}
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-medium">
                        {PROFILE.title}
                    </p>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        {PROFILE.summary}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#experience">
                        <Button size="lg" className="h-11 px-8">
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                    <a href={PROFILE.resumeLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="h-11 px-8">
                            Download CV <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </div>
                <div className="flex gap-6 text-muted-foreground pt-4">
                    <a href={PROFILE.github} target="_blank" className="hover:text-foreground transition-colors"><Github className="h-6 w-6" /></a>
                    <a href={PROFILE.linkedin} target="_blank" className="hover:text-foreground transition-colors"><Linkedin className="h-6 w-6" /></a>
                    <a href={`mailto:${PROFILE.email}`} className="hover:text-foreground transition-colors"><Mail className="h-6 w-6" /></a>
                    <a href={PROFILE.kaggle} target="_blank" className="hover:text-foreground transition-colors"><Code className="h-6 w-6" /></a>
                </div>
            </div>
        </section>
    )
}
