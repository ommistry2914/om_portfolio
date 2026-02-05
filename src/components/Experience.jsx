import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users } from 'lucide-react';

const Experience = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);

    const experiences = [
        {
            role: 'Full Stack Developer',
            company: 'Tech Innovations Inc.',
            type: 'Full-time',
            period: 'Jan 2024 - Present',
            duration: '1+ year',
            location: 'Remote',
            description:
                'Developing and maintaining full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.',
            achievements: [
                'Built and deployed 5+ production-ready features',
                'Improved application performance by 40%',
                'Mentored junior developers on best practices',
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
            gradient: 'from-blue-500 to-cyan-500',
            icon: TrendingUp,
            side: 'left', // First on LEFT
        },
        {
            role: 'Software Engineer Intern',
            company: 'Digital Solutions Ltd.',
            type: 'Internship',
            period: 'Jun 2023 - Dec 2023',
            duration: '6 months',
            location: 'Hybrid',
            description:
                'Contributed to the development of enterprise-level applications. Worked on both frontend and backend components, implementing new features and fixing bugs.',
            achievements: [
                'Developed RESTful APIs serving 10K+ daily requests',
                'Implemented responsive UI components',
                'Reduced bug count by 30% through comprehensive testing',
            ],
            technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Git'],
            gradient: 'from-purple-500 to-pink-500',
            icon: Award,
            side: 'right', // Second on RIGHT
        },
        {
            role: 'Freelance Developer',
            company: 'Self-Employed',
            type: 'Freelance',
            period: 'Jan 2023 - Present',
            duration: '2+ years',
            location: 'Remote',
            description:
                'Delivered custom web solutions for various clients including e-commerce platforms, business websites, and web applications. Managed projects from conception to deployment.',
            achievements: [
                'Successfully completed 10+ client projects',
                'Maintained 100% client satisfaction rate',
                'Built long-term relationships with repeat clients',
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
            gradient: 'from-emerald-500 to-teal-500',
            icon: Users,
            side: 'left', // Third on LEFT
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !timelineRef.current) return;

            const section = sectionRef.current;
            const timeline = timelineRef.current;
            const sectionRect = section.getBoundingClientRect();

            const sectionTop = sectionRect.top;
            const sectionHeight = sectionRect.height;
            const windowHeight = window.innerHeight;

            // Progress from 0 to 1 as section scrolls through viewport
            const progress = Math.max(0, Math.min(1,
                (windowHeight - sectionTop) / (sectionHeight + windowHeight)
            ));

            setScrollProgress(progress);

            // Check which items are visible
            const items = section.querySelectorAll('[data-experience-item]');
            const newVisibleItems = [];

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const itemMiddle = rect.top + rect.height / 2;

                // Item is visible when its middle is in viewport
                if (itemMiddle < windowHeight && itemMiddle > 0) {
                    newVisibleItems.push(index);
                }
            });

            setVisibleItems(newVisibleItems);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="experience" className="py-20 relative overflow-hidden" ref={sectionRef}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transition-transform duration-1000"
                    style={{ transform: `translateY(${scrollProgress * 100}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl transition-transform duration-1000"
                    style={{ transform: `translateY(${-scrollProgress * 100}px)` }}
                ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            Career <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                            My professional path and key accomplishments
                        </p>
                    </div>

                    {/* Modern Tree Timeline */}
                    <div className="relative" ref={timelineRef}>
                        {/* MAIN VERTICAL LINE - The Central Trunk (CENTERED) */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block overflow-hidden">
                            {/* Background line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20"></div>

                            {/* Animated fill line that grows with scroll - THE CONNECTED LIGHT */}
                            <div
                                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-secondary to-accent transition-all duration-300 ease-out"
                                style={{
                                    height: `${scrollProgress * 100}%`,
                                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)'
                                }}
                            ></div>

                            {/* Glowing traveling dot at the end of the line */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary transition-all duration-300"
                                style={{
                                    top: `${scrollProgress * 100}%`,
                                    opacity: scrollProgress > 0.05 ? 1 : 0,
                                    transform: `translate(-50%, -50%) scale(${scrollProgress > 0.05 ? 1 : 0})`,
                                    boxShadow: '0 0 20px rgba(59, 130, 246, 1), 0 0 40px rgba(59, 130, 246, 0.6)'
                                }}
                            >
                                <div className="absolute inset-0 rounded-full bg-primary animate-ping"></div>
                                <div className="absolute inset-0 rounded-full bg-white/50"></div>
                            </div>
                        </div>

                        {/* Experience Items */}
                        <div className="space-y-24">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    data-experience-item
                                    className="relative flex items-start gap-8 lg:flex-row"
                                >
                                    {/* Left Side Content (or empty space) */}
                                    <div className="flex-1 hidden lg:block">
                                        {exp.side === 'left' && (
                                            <div
                                                className={`transition-all duration-700 ${visibleItems.includes(index)
                                                    ? 'opacity-100 translate-x-0'
                                                    : 'opacity-0 -translate-x-10'
                                                    }`}
                                            >
                                                <div className="glass-card p-8 rounded-3xl hover-lift group relative overflow-hidden">
                                                    {/* Gradient Accent Border */}
                                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`}></div>

                                                    {/* Glowing corner indicator */}
                                                    <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${exp.gradient} opacity-50`}></div>

                                                    {/* Icon Badge */}
                                                    <div className="mb-6">
                                                        <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} items-center justify-center shadow-lg`}>
                                                            <exp.icon className="w-8 h-8 text-white" />
                                                        </div>
                                                    </div>

                                                    {/* Header */}
                                                    <div className="mb-6">
                                                        <div className="flex items-start justify-between gap-4 mb-3">
                                                            <div className="flex-1">
                                                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                                    {exp.role}
                                                                </h3>
                                                                <div className="flex items-center gap-2 text-foreground/80 mb-2">
                                                                    <Briefcase className="w-4 h-4" />
                                                                    <span className="font-semibold">{exp.company}</span>
                                                                </div>
                                                            </div>
                                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${exp.gradient} shadow-lg`}>
                                                                {exp.type}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>{exp.period}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-4 h-4" />
                                                                <span>{exp.location}</span>
                                                            </div>
                                                            <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.gradient} bg-opacity-20`}>
                                                                {exp.duration}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-foreground/70 mb-6 leading-relaxed">{exp.description}</p>

                                                    {/* Achievements */}
                                                    <div className="mb-6">
                                                        <h4 className="font-semibold mb-3 text-foreground/90 flex items-center gap-2">
                                                            <Award className="w-4 h-4 text-primary" />
                                                            Key Achievements
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {exp.achievements.map((achievement, achIndex) => (
                                                                <li key={achIndex} className="flex items-start gap-3 text-foreground/70">
                                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`}></span>
                                                                    <span className="flex-1">{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div>
                                                        <h4 className="font-semibold mb-3 text-foreground/90 text-sm">Technologies Used</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech, techIndex) => (
                                                                <span
                                                                    key={techIndex}
                                                                    className="text-xs px-3 py-1.5 bg-muted rounded-lg text-foreground/80 hover:scale-105 transition-transform cursor-default"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Center: Connection Point and Branch */}
                                    <div className="relative flex-shrink-0 hidden lg:block">
                                        {/* Connection Point on Main Line */}
                                        <div className="relative z-20 pt-8">
                                            {/* Node on main vertical line */}
                                            <div
                                                className={`relative w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-background shadow-xl transition-all duration-700 ${visibleItems.includes(index)
                                                    ? 'scale-100 opacity-100'
                                                    : 'scale-0 opacity-0'
                                                    }`}
                                                style={{
                                                    boxShadow: visibleItems.includes(index)
                                                        ? `0 0 20px ${exp.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.8)' : exp.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.8)' : 'rgba(16, 185, 129, 0.8)'}`
                                                        : 'none'
                                                }}
                                            >
                                                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} ${visibleItems.includes(index) ? 'animate-ping' : ''}`}></div>
                                            </div>

                                            {/* HORIZONTAL BRANCH LINE */}
                                            <div
                                                className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r ${exp.gradient} transition-all duration-700 ${exp.side === 'right' ? 'left-full origin-left' : 'right-full origin-right'
                                                    }`}
                                                style={{
                                                    width: visibleItems.includes(index) ? '60px' : '0px',
                                                    boxShadow: visibleItems.includes(index)
                                                        ? `0 0 10px ${exp.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.6)' : exp.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.6)' : 'rgba(16, 185, 129, 0.6)'}`
                                                        : 'none'
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Right Side Content (or empty space) */}
                                    <div className="flex-1">
                                        {exp.side === 'right' && (
                                            <div
                                                className={`transition-all duration-700 ${visibleItems.includes(index)
                                                    ? 'opacity-100 translate-x-0'
                                                    : 'opacity-0 translate-x-10'
                                                    }`}
                                            >
                                                <div className="glass-card p-8 rounded-3xl hover-lift group relative overflow-hidden">
                                                    {/* Gradient Accent Border */}
                                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`}></div>

                                                    {/* Glowing corner indicator */}
                                                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.gradient} opacity-50`}></div>

                                                    {/* Icon Badge */}
                                                    <div className="mb-6">
                                                        <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} items-center justify-center shadow-lg`}>
                                                            <exp.icon className="w-8 h-8 text-white" />
                                                        </div>
                                                    </div>

                                                    {/* Header */}
                                                    <div className="mb-6">
                                                        <div className="flex items-start justify-between gap-4 mb-3">
                                                            <div className="flex-1">
                                                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                                    {exp.role}
                                                                </h3>
                                                                <div className="flex items-center gap-2 text-foreground/80 mb-2">
                                                                    <Briefcase className="w-4 h-4" />
                                                                    <span className="font-semibold">{exp.company}</span>
                                                                </div>
                                                            </div>
                                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${exp.gradient} shadow-lg`}>
                                                                {exp.type}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>{exp.period}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-4 h-4" />
                                                                <span>{exp.location}</span>
                                                            </div>
                                                            <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.gradient} bg-opacity-20`}>
                                                                {exp.duration}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-foreground/70 mb-6 leading-relaxed">{exp.description}</p>

                                                    {/* Achievements */}
                                                    <div className="mb-6">
                                                        <h4 className="font-semibold mb-3 text-foreground/90 flex items-center gap-2">
                                                            <Award className="w-4 h-4 text-primary" />
                                                            Key Achievements
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {exp.achievements.map((achievement, achIndex) => (
                                                                <li key={achIndex} className="flex items-start gap-3 text-foreground/70">
                                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`}></span>
                                                                    <span className="flex-1">{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div>
                                                        <h4 className="font-semibold mb-3 text-foreground/90 text-sm">Technologies Used</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech, techIndex) => (
                                                                <span
                                                                    key={techIndex}
                                                                    className="text-xs px-3 py-1.5 bg-muted rounded-lg text-foreground/80 hover:scale-105 transition-transform cursor-default"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Mobile View - Show all cards stacked */}
                                        <div className="lg:hidden">
                                            <div className="glass-card p-8 rounded-3xl hover-lift group relative overflow-hidden">
                                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`}></div>
                                                <div className="mb-6">
                                                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} items-center justify-center shadow-lg`}>
                                                        <exp.icon className="w-8 h-8 text-white" />
                                                    </div>
                                                </div>
                                                <div className="mb-6">
                                                    <div className="flex items-start justify-between gap-4 mb-3">
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                                                            <div className="flex items-center gap-2 text-foreground/80 mb-2">
                                                                <Briefcase className="w-4 h-4" />
                                                                <span className="font-semibold">{exp.company}</span>
                                                            </div>
                                                        </div>
                                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${exp.gradient} shadow-lg`}>
                                                            {exp.type}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{exp.period}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-foreground/70 mb-6 leading-relaxed">{exp.description}</p>
                                                <div className="mb-6">
                                                    <h4 className="font-semibold mb-3 text-foreground/90 flex items-center gap-2">
                                                        <Award className="w-4 h-4 text-primary" />
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {exp.achievements.map((achievement, achIndex) => (
                                                            <li key={achIndex} className="flex items-start gap-3 text-foreground/70">
                                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`}></span>
                                                                <span className="flex-1">{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-3 text-foreground/90 text-sm">Technologies Used</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map((tech, techIndex) => (
                                                            <span key={techIndex} className="text-xs px-3 py-1.5 bg-muted rounded-lg text-foreground/80">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 text-center">
                        <div className="glass-card p-10 rounded-3xl max-w-3xl mx-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">
                                    Ready for the <span className="gradient-text">Next Challenge</span>
                                </h3>
                                <p className="text-foreground/70 mb-8 text-lg">
                                    I'm currently open to full-time positions and exciting freelance projects. Let's build something
                                    amazing together!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#contact"
                                        className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl font-semibold hover:scale-105 transition-all hover:shadow-2xl shadow-primary/50"
                                    >
                                        Get In Touch
                                    </a>
                                    <a
                                        href="/resume.pdf"
                                        download
                                        className="px-8 py-4 glass rounded-xl font-semibold hover:scale-105 transition-all"
                                    >
                                        Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
