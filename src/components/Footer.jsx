import { Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        Navigation: [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
        ],
        Resources: [
            { name: 'Experience', href: '#experience' },
            { name: 'Contact', href: '#contact' },
            { name: 'Resume', href: '/resume.pdf' },
            { name: 'Blog', href: '#' },
        ],
    };

    return (
        <footer className="relative pt-20 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <h3 className="text-2xl font-bold gradient-text mb-4">Om Mistri</h3>
                            <p className="text-foreground/70 mb-6">
                                Full Stack Software Engineer passionate about building exceptional digital experiences.
                            </p>
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                                <div className="w-2 h-2 rounded-full bg-secondary animate-glow delay-200"></div>
                                <div className="w-2 h-2 rounded-full bg-accent animate-glow delay-400"></div>
                            </div>
                        </div>

                        {/* Links */}
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h4 className="font-semibold text-lg mb-4">{category}</h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-foreground/70 hover:text-primary transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-foreground/60 text-sm text-center md:text-left">
                                © {new Date().getFullYear()} Om Mistri. All rights reserved.
                            </p>
                            <p className="text-foreground/60 text-sm flex items-center gap-2">
                                Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all z-50 animate-slide-up"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </footer>
    );
};

export default Footer;
