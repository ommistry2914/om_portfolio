import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: '1+ Year Experience',
            description: 'Professional software development in industry',
        },
        {
            icon: Rocket,
            title: 'Multiple Projects',
            description: 'Built and deployed real-world applications',
        },
        {
            icon: Users,
            title: 'Freelance Success',
            description: 'Delivered projects for satisfied clients',
        },
        {
            icon: Award,
            title: 'AI/ML Knowledge',
            description: 'Experience with modern AI implementations',
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                            Passionate about creating elegant solutions to complex problems
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left: Description */}
                        <div className="space-y-6">
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                I'm a <span className="text-primary font-semibold">Full Stack Software Engineer</span> with a passion
                                for building scalable, user-centric applications. With expertise in both{' '}
                                <span className="text-secondary font-semibold">backend</span> and{' '}
                                <span className="text-accent font-semibold">frontend</span> technologies, I bring ideas to life
                                through clean, efficient code.
                            </p>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                My journey includes working with cutting-edge technologies like{' '}
                                <strong>React.js, Node.js, Spring Boot, and modern databases</strong>. I've successfully delivered
                                freelance projects and built personal digital products that solve real-world problems.
                            </p>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                Beyond traditional development, I have hands-on experience with{' '}
                                <strong>AI/ML concepts and implementations</strong>, allowing me to integrate intelligent features
                                into modern applications.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                                >
                                    Hire Me
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-6 py-3 glass rounded-lg font-semibold hover:scale-105 transition-all"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* Right: Highlights Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-6 rounded-xl hover-lift group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-foreground/70 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: '10+', label: 'Projects Completed' },
                            { number: '5+', label: 'Happy Clients' },
                            { number: '8+', label: 'Technologies' },
                            { number: '1+', label: 'Years Experience' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center glass-card p-6 rounded-xl hover-lift">
                                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                                <div className="text-foreground/70">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
