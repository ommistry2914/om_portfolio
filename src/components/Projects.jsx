import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Jansho\'s Mart',
            description:
                'Full-featured eCommerce platform with user and admin roles using the MERN stack. Built secure RESTful APIs for user authentication (JWT), product management, and order processing with a responsive frontend.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
            github: 'https://github.com/ommistry2914',
            live: '#',
            category: 'Full Stack',
        },
        {
            title: 'PG-Dissertation System',
            description:
                'Full-stack web application for managing postgraduate dissertations using Spring Boot and React.js. Built RESTful APIs to handle dissertation proposals, file uploads, task assignments, and review tracking with role-based access control.',
            tags: ['Spring Boot', 'MongoDB', 'React', 'Bootstrap', 'Ant Design'],
            github: 'https://github.com/ommistry2914',
            live: '#',
            category: 'Enterprise',
        },
        {
            title: 'Intelligent Fogponic System',
            description:
                'ML-based system to predict optimal light interval, fan interval, NPK values, and plant health in fogponics-based systems. Designed an interactive dashboard using Streamlit for real-time monitoring and parameter adjustment.',
            tags: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy', 'Matplotlib'],
            github: 'https://github.com/ommistry2914',
            live: '#',
            category: 'Machine Learning',
        },
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A selection of projects that showcase my technical expertise and problem-solving abilities
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="card-professional overflow-hidden hover-lift animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Project Header */}
                                <div className="p-6 border-b border-border">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 flex items-center justify-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 flex items-center justify-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                                                +{project.tags.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More */}
                    <div className="text-center animate-fade-in delay-400">
                        <a
                            href="https://github.com/ommistry2914"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" />
                            View All Projects on GitHub
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
