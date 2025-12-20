import { EXPERIENCE } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="space-y-8">
                    {EXPERIENCE.map((job, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                            <CardContent className="p-0">
                                <div className="p-6 md:p-8">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold">{job.role}</h3>
                                            <div className="flex items-center gap-2 text-primary mt-1">
                                                <Building2 className="h-4 w-4" />
                                                <span className="font-medium">{job.company}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary" className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {job.period}
                                            </Badge>
                                            <Badge variant="outline">{job.type}</Badge>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-3 mt-6">
                                        {job.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                <span className="text-muted-foreground leading-relaxed">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
