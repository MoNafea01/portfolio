import { EDUCATION, PROFILE } from "@/constants";
import { GraduationCap, MapPin, Briefcase, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
    const stats = [
        { icon: Briefcase, label: "Experience", value: "1+ Year" },
        { icon: Code2, label: "Projects", value: "10+" },
        { icon: GraduationCap, label: "Education", value: "B.Eng." },
        { icon: MapPin, label: "Location", value: "Egypt" },
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300">
                            <CardContent className="p-0">
                                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid gap-12 lg:grid-cols-2 items-start">
                    {/* Background */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" />
                            My Background
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {PROFILE.summary}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I thrive on turning complex AI concepts into practical, production-ready solutions.
                            Whether it's building RAG systems, fine-tuning LLMs, or developing computer vision pipelines,
                            I bring a blend of research rigor and engineering pragmatism to every project.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" />
                            Education
                        </h3>
                        {EDUCATION.map((edu, index) => (
                            <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10">
                                            <GraduationCap className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg">{edu.degree}</h4>
                                            <p className="text-primary font-medium">{edu.school}</p>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                                                <span>{edu.period}</span>
                                                <span className="font-semibold text-foreground">GPA: {edu.gpa}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
