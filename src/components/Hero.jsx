import { ArrowRight, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative bg-background pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 animate-slide-in">
                            {/* Professional Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Available for new opportunities
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                                    Hi, I'm <span className="text-gradient">Om Mistri</span>
                                </h1>
                                <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
                                    Software Engineer
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                Specialized in building scalable full-stack applications with modern technologies.
                                Experienced in <strong className="text-foreground">MERN stack</strong>, <strong className="text-foreground">Spring Boot</strong>,
                                and <strong className="text-foreground">cloud technologies</strong>.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#projects"
                                    className="btn-primary"
                                >
                                    View Projects
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#contact"
                                    className="btn-secondary"
                                >
                                    <Mail className="w-4 h-4" />
                                    Get In Touch
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-4 pt-4">
                                <a
                                    href="https://github.com/ommistry2914"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/om-mistri"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:ommistry2914@gmail.com"
                                    className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Professional Info Card */}
                        <div className="animate-slide-up delay-200">
                            <div className="card-professional p-8 space-y-6">
                                {/* Quick Info */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Quick Info</h3>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                            <div>
                                                <p className="font-medium text-foreground">Location</p>
                                                <p className="text-sm text-muted-foreground">Vadodara, India</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-primary mt-0.5" />
                                            <div>
                                                <p className="font-medium text-foreground">Email</p>
                                                <a href="mailto:ommistry2914@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                                    ommistry2914@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">500+</div>
                                        <div className="text-xs text-muted-foreground">Problems Solved</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">3+</div>
                                        <div className="text-xs text-muted-foreground">Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">1.5+</div>
                                        <div className="text-xs text-muted-foreground">Years Exp</div>
                                    </div>
                                </div>

                                {/* Download Resume */}
                                <a
                                    href="/src/assets/resume/Om_Mistri_Resume.pdf"
                                    download="Om_Mistri_Resume.pdf"
                                    className="w-full btn-primary"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
