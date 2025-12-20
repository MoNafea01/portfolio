import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
            <main className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
                <ThemeToggle />
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </ThemeProvider>
    );
}

export default App;
