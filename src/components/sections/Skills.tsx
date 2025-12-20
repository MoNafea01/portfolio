import { SKILLS, CERTIFICATES } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Sparkles, ExternalLink } from "lucide-react";

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                {/* Technical Skills */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3">
                            <Sparkles className="h-8 w-8 text-primary" />
                            Technical Skills
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(SKILLS).map(([category, items]) => (
                            <Card key={category} className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold text-primary mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3">
                            <Award className="h-8 w-8 text-primary" />
                            Certifications
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {CERTIFICATES.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Card className="group h-full overflow-hidden border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <Award className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <p className="font-semibold leading-tight group-hover:text-primary transition-colors">
                                                        {cert.name}
                                                    </p>
                                                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
