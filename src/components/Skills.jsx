import { useState } from 'react';
import { Code2, Database, Server, Wrench, Sparkles } from 'lucide-react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const skillCategories = [
        {
            category: 'Frontend',
            icon: Code2,
            gradient: 'from-blue-500 via-cyan-500 to-teal-500',
            bgGradient: 'from-blue-500/10 via-cyan-500/10 to-teal-500/10',
            skills: [
                { name: 'React.js', level: 'Expert', color: 'bg-blue-500' },
                { name: 'JavaScript', level: 'Expert', color: 'bg-yellow-500' },
                { name: 'TypeScript', level: 'Advanced', color: 'bg-blue-600' },
                { name: 'HTML/CSS', level: 'Expert', color: 'bg-orange-500' },
                { name: 'Tailwind CSS', level: 'Expert', color: 'bg-cyan-500' },
                { name: 'Next.js', level: 'Advanced', color: 'bg-gray-800' },
            ],
        },
        {
            category: 'Backend',
            icon: Server,
            gradient: 'from-purple-500 via-pink-500 to-rose-500',
            bgGradient: 'from-purple-500/10 via-pink-500/10 to-rose-500/10',
            skills: [
                { name: 'Node.js', level: 'Expert', color: 'bg-green-600' },
                { name: 'Express.js', level: 'Expert', color: 'bg-gray-700' },
                { name: 'Java', level: 'Advanced', color: 'bg-red-600' },
                { name: 'Spring Boot', level: 'Advanced', color: 'bg-green-500' },
                { name: 'Python', level: 'Advanced', color: 'bg-blue-500' },
                { name: 'REST APIs', level: 'Expert', color: 'bg-indigo-500' },
            ],
        },
        {
            category: 'Database',
            icon: Database,
            gradient: 'from-emerald-500 via-green-500 to-lime-500',
            bgGradient: 'from-emerald-500/10 via-green-500/10 to-lime-500/10',
            skills: [
                { name: 'MongoDB', level: 'Expert', color: 'bg-green-600' },
                { name: 'PostgreSQL', level: 'Advanced', color: 'bg-blue-700' },
                { name: 'MySQL', level: 'Advanced', color: 'bg-blue-600' },
                { name: 'Supabase', level: 'Advanced', color: 'bg-emerald-500' },
                { name: 'Redis', level: 'Intermediate', color: 'bg-red-600' },
                { name: 'Firebase', level: 'Advanced', color: 'bg-yellow-600' },
            ],
        },
        {
            category: 'DevOps & Tools',
            icon: Wrench,
            gradient: 'from-orange-500 via-amber-500 to-yellow-500',
            bgGradient: 'from-orange-500/10 via-amber-500/10 to-yellow-500/10',
            skills: [
                { name: 'Git & GitHub', level: 'Expert', color: 'bg-gray-800' },
                { name: 'Docker', level: 'Intermediate', color: 'bg-blue-500' },
                { name: 'AWS', level: 'Intermediate', color: 'bg-orange-600' },
                { name: 'CI/CD', level: 'Advanced', color: 'bg-purple-600' },
                { name: 'Linux', level: 'Advanced', color: 'bg-yellow-600' },
                { name: 'Vite', level: 'Expert', color: 'bg-purple-500' },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-300"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-foreground/80">Tech Stack</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            Technical <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                            Mastering modern technologies to build exceptional digital experiences
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {skillCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(index)}
                                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === index
                                        ? 'text-white scale-105'
                                        : 'glass text-foreground/70 hover:text-foreground hover:scale-105'
                                    }`}
                            >
                                {activeCategory === index && (
                                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl`}></div>
                                )}
                                <div className="relative z-10 flex items-center gap-2">
                                    <category.icon className="w-5 h-5" />
                                    <span>{category.category}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Category Display */}
                    <div className="mb-12">
                        {skillCategories.map((category, categoryIndex) => (
                            <div
                                key={categoryIndex}
                                className={`transition-all duration-500 ${activeCategory === categoryIndex
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-95 absolute pointer-events-none'
                                    }`}
                            >
                                <div className={`glass-card p-8 rounded-3xl bg-gradient-to-br ${category.bgGradient}`}>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                                            <category.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold">{category.category} Development</h3>
                                            <p className="text-foreground/60">Core technologies and frameworks</p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="group relative overflow-hidden rounded-xl p-4 glass hover:scale-105 transition-all duration-300 cursor-pointer"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-semibold text-lg">{skill.name}</span>
                                                    <span className={`w-3 h-3 rounded-full ${skill.color} animate-glow`}></span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000`}
                                                            style={{
                                                                width:
                                                                    skill.level === 'Expert'
                                                                        ? '95%'
                                                                        : skill.level === 'Advanced'
                                                                            ? '80%'
                                                                            : '65%',
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs text-foreground/60 font-medium">{skill.level}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-card p-6 rounded-2xl text-center hover-lift group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Code2 className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                            <p className="text-foreground/70 text-sm">Frontend Technologies</p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl text-center hover-lift group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Server className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                            <p className="text-foreground/70 text-sm">Backend Frameworks</p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl text-center hover-lift group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Database className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                            <p className="text-foreground/70 text-sm">Database Systems</p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl text-center hover-lift group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Wrench className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                            <p className="text-foreground/70 text-sm">Dev Tools & Platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
