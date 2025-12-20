import { PROJECTS } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, Trophy, Calendar } from "lucide-react";

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work in AI, Machine Learning, and Software Engineering
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, index) => (
                        <Card
                            key={index}
                            className="group flex flex-col h-full border-primary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                                        )}
                                    </div>
                                    {project.award && (
                                        <Badge className="flex items-center gap-1 bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                                            <Trophy className="h-3 w-3" />
                                            Award
                                        </Badge>
                                    )}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                                    <Calendar className="h-3 w-3" />
                                    {project.period}
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 space-y-4">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {project.description[0]}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.stack.slice(0, 8).map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.stack.length > 8 && (
                                        <Badge variant="outline" className="text-xs px-2 py-0.5">
                                            +{project.stack.length - 8}
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="pt-4 border-t">
                                <div className="flex gap-2 w-full">
                                    {project.links.code && (
                                        <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="outline" className="w-full group/btn">
                                                <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                                                Code
                                            </Button>
                                        </a>
                                    )}
                                    {(project.links as { demo?: string }).demo && (
                                        <a href={(project.links as { demo?: string }).demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button className="w-full">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
