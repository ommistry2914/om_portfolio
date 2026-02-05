import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'om.mistry@example.com',
            href: 'mailto:om.mistry@example.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 98765 43210',
            href: 'tel:+919876543210',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Mumbai, India',
            href: null,
        },
    ];

    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-primary' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-secondary' },
        { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-accent' },
    ];

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? Let's connect!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-muted border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-muted border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-muted border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-muted border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg font-semibold hover:scale-105 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="glass-card p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-foreground/60 mb-1">{info.label}</div>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-foreground/90 hover:text-primary transition-colors font-medium"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <div className="text-foreground/90 font-medium">{info.value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 rounded-lg glass flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-2xl gradient-bg">
                                <h3 className="text-xl font-bold mb-3">Let's Work Together!</h3>
                                <p className="text-foreground/70 mb-4">
                                    I'm always interested in hearing about new projects and opportunities. Whether you have a
                                    question or just want to say hi, feel free to reach out!
                                </p>
                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                                    <div className="w-2 h-2 rounded-full bg-secondary animate-glow delay-200"></div>
                                    <div className="w-2 h-2 rounded-full bg-accent animate-glow delay-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
