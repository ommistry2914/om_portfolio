import { Code2, Database, Cloud, Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Briefcase,
            title: 'Current Role',
            description: 'Software Engineer at Alois Solutions',
        },
        {
            icon: Code2,
            title: 'Expertise',
            description: 'Full-Stack Development & System Design',
        },
        {
            icon: Database,
            title: 'Specialization',
            description: 'MERN Stack, Spring Boot, Cloud',
        },
        {
            icon: Award,
            title: 'Achievement',
            description: '500+ Problems Solved on LeetCode',
        },
    ];

    return (
        <section id="about" className="section-padding bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            About Me
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Passionate software engineer focused on building impactful solutions
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Left: Description */}
                        <div className="space-y-6 animate-slide-in">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm a <strong className="text-foreground">Software Engineer</strong> with expertise in building
                                    scalable, user-centric applications. I specialize in full-stack development, bringing ideas to life
                                    through clean, efficient code and modern development practices.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-3">Technical Expertise</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    My tech stack includes <strong className="text-foreground">React.js, Next.js, Node.js, Express.js, Spring Boot</strong>,
                                    and databases like <strong className="text-foreground">MongoDB, PostgreSQL, and MySQL</strong>. I've implemented
                                    role-based access control, RESTful APIs, real-time features, and deployed applications on
                                    <strong className="text-foreground"> AWS (EC2, S3, CloudFront)</strong>.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-3">Beyond Development</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm also a competitive programmer with <strong className="text-foreground">500+ problems solved</strong> on
                                    LeetCode and GeeksforGeeks. Additionally, I have experience with <strong className="text-foreground">Machine Learning</strong>,
                                    having developed ML models for predictive systems using Python, Scikit-learn, and Streamlit.
                                </p>
                            </div>
                        </div>

                        {/* Right: Highlights */}
                        <div className="grid grid-cols-2 gap-4 animate-slide-up delay-200">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="card-professional p-6 hover-lift"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="grid md:grid-cols-2 gap-8 animate-fade-in delay-300">
                        {/* Education */}
                        <div className="card-professional p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">B.Tech in Computer Engineering</h4>
                                    <p className="text-sm text-muted-foreground">Maharaja Sayajirao University</p>
                                    <p className="text-xs text-muted-foreground">2020 - 2024 • CGPA: 8.5/10</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="card-professional p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">Certifications</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-sm">AWS Cloud Computing</h4>
                                    <p className="text-xs text-muted-foreground">Workshop from MSU</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">Full Stack Development</h4>
                                    <p className="text-xs text-muted-foreground">MERN Stack Specialization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
