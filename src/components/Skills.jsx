import { Code2, Database, Server, Cloud, Wrench, Layers } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: 'Frontend Development',
            icon: Code2,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20',
            skills: [
                { name: 'React.js', level: 95 },
                { name: 'JavaScript (ES6+)', level: 95 },
                { name: 'TypeScript', level: 85 },
                { name: 'HTML5 & CSS3', level: 95 },
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Next.js', level: 80 },
            ],
        },
        {
            category: 'Backend Development',
            icon: Server,
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20',
            skills: [
                { name: 'Node.js', level: 90 },
                { name: 'Express.js', level: 90 },
                { name: 'Java', level: 85 },
                { name: 'Spring Boot', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'REST APIs', level: 95 },
            ],
        },
        {
            category: 'Database & Storage',
            icon: Database,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/20',
            skills: [
                { name: 'MongoDB', level: 90 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'MySQL', level: 85 },
                { name: 'Supabase', level: 80 },
                { name: 'Redis', level: 70 },
                { name: 'Firebase', level: 80 },
            ],
        },
        {
            category: 'Cloud & DevOps',
            icon: Cloud,
            color: 'text-cyan-500',
            bgColor: 'bg-cyan-500/10',
            borderColor: 'border-cyan-500/20',
            skills: [
                { name: 'AWS (EC2, S3, CloudFront)', level: 80 },
                { name: 'Docker', level: 75 },
                { name: 'Git & GitHub', level: 95 },
                { name: 'CI/CD', level: 80 },
                { name: 'Linux', level: 85 },
                { name: 'Nginx', level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Technical <span className="text-gradient">Skills</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Comprehensive expertise across the full technology stack
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {skillsData.map((category, index) => (
                            <div
                                key={index}
                                className="card-professional p-8 hover-lift animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                                        <category.icon className={`w-7 h-7 ${category.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{category.category}</h3>
                                        <p className="text-sm text-muted-foreground">{category.skills.length} Technologies</p>
                                    </div>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${category.bgColor.replace('/10', '')} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <div className="card-professional p-8 animate-fade-in delay-400">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <Layers className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Additional Expertise</h3>
                                <p className="text-sm text-muted-foreground">Tools, frameworks, and methodologies</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {[
                                'Vite',
                                'Webpack',
                                'JWT Authentication',
                                'RESTful APIs',
                                'GraphQL',
                                'WebSockets',
                                'Responsive Design',
                                'Agile/Scrum',
                                'Problem Solving',
                                'Data Structures',
                                'Algorithms',
                                'System Design',
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-center hover:bg-primary/10 hover:text-primary transition-all"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Competitive Programming */}
                    <div className="mt-8 card-professional p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in delay-500">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-3">Competitive Programming</h3>
                            <p className="text-muted-foreground mb-6">
                                Active problem solver on leading coding platforms
                            </p>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div>
                                    <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-gradient mb-2">LeetCode</div>
                                    <div className="text-sm text-muted-foreground">Active Profile</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-gradient mb-2">GFG</div>
                                    <div className="text-sm text-muted-foreground">GeeksforGeeks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
