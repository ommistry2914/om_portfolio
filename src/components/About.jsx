import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: 'Software Engineer',
            description: 'Currently at Alois Solutions building fintech apps',
        },
        {
            icon: Rocket,
            title: '500+ Problems Solved',
            description: 'Active on LeetCode and GeeksforGeeks',
        },
        {
            icon: Users,
            title: 'Full Stack Developer',
            description: 'MERN, Spring Boot, AWS & DevOps expertise',
        },
        {
            icon: Award,
            title: 'AWS Certified',
            description: 'Cloud Computing Workshop from MSU',
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
                                I'm a <span className="text-primary font-semibold">Software Engineer</span> with a passion for
                                building <span className="text-secondary font-semibold">scalable, user-centric applications</span> that
                                solve real-world problems. I specialize in full-stack development, bringing ideas to life through
                                clean, efficient code and modern development practices.
                            </p>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                My tech stack includes <strong>React.js, Next.js, Node.js, Express.js, Spring Boot, FastAPI</strong>,
                                and databases like <strong>MongoDB, PostgreSQL, and MySQL</strong>. I've implemented role-based access control,
                                RESTful APIs, real-time features, and deployed applications on <strong>AWS (EC2, S3, CloudFront)</strong>.
                            </p>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                I'm also a competitive programmer with <strong>500+ problems solved</strong> on LeetCode and GeeksforGeeks.
                                Additionally, I have experience with <strong>Machine Learning</strong>, having developed ML models for
                                predictive systems using Python, Scikit-learn, and Streamlit.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                                >
                                    Hire Me
                                </a>
                                <a
                                    href="/Om_Mistri_Resume.pdf"
                                    download="Om_Mistri_Resume.pdf"
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
                            { number: '3+', label: 'Major Projects' },
                            { number: '500+', label: 'Problems Solved' },
                            { number: '10+', label: 'Technologies' },
                            { number: '1.5+', label: 'Years Experience' },
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
