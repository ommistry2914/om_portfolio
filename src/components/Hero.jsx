import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float delay-300"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-500"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground/80">Available for Freelance & Full-time</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up delay-100">
                        Hi, I'm <span className="gradient-text">Om Mistri</span>
                    </h1>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 mb-6 animate-slide-up delay-200">
                        Full Stack Software Engineer
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up delay-300">
                        Building scalable web applications with modern technologies. Specialized in{' '}
                        <span className="text-primary font-semibold">Backend</span> and{' '}
                        <span className="text-secondary font-semibold">Frontend</span> development with 1 year of industry
                        experience and multiple successful projects.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up delay-400">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 glass rounded-lg font-semibold hover:scale-105 transition-all hover:shadow-xl"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center animate-bounce">
                        <a href="#about" className="flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground transition-colors">
                            <span className="text-sm">Scroll Down</span>
                            <ArrowDown className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
