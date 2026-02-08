import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Jansho\'s Mart',
            description:
                'Full-featured eCommerce platform with user and admin roles using the MERN stack. Built secure RESTful APIs for user authentication (JWT), product management, and order processing with a responsive frontend.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
            image: '/project1.jpg',
            github: 'https://github.com/ommistry2914',
            live: '#',
            featured: true,
        },
        {
            title: 'PG-Dissertation System',
            description:
                'Full-stack web application for managing postgraduate dissertations using Spring Boot and React.js. Built RESTful APIs to handle dissertation proposals, file uploads, task assignments, and review tracking with role-based access control.',
            tags: ['Spring Boot', 'MongoDB', 'React', 'Bootstrap', 'Ant Design'],
            image: '/project2.jpg',
            github: 'https://github.com/ommistry2914',
            live: '#',
            featured: true,
        },
        {
            title: 'Intelligent Fogponic System',
            description:
                'ML-based system to predict optimal light interval, fan interval, NPK values, and plant health in fogponics-based systems. Designed an interactive dashboard using Streamlit for real-time monitoring and parameter adjustment.',
            tags: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy', 'Matplotlib'],
            image: '/project3.jpg',
            github: 'https://github.com/ommistry2914',
            live: '#',
            featured: true,
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                            A showcase of my recent work and personal projects
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`group glass-card rounded-2xl overflow-hidden hover-lift ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                                    }`}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl font-bold text-white/10">{index + 1}</div>
                                    </div>
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-xs px-3 py-1 bg-muted rounded-full text-foreground/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-secondary transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-12">
                        <a
                            href="https://github.com/ommistry2914"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-lg font-semibold hover:scale-105 transition-all hover:shadow-xl"
                        >
                            <Github className="w-5 h-5" />
                            View All Projects on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
