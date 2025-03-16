function Header() {
    try {
        return (
            <div data-name="header-container">
                <nav className="header fixed w-full z-10" data-name="navigation">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-xl font-bold text-white" data-name="logo">KabboJit</a>
                            <div className="hidden md:flex space-x-8" data-name="nav-links">
                                <a href="#about" className="nav-link" data-name="about-link">About</a>
                                <a href="#expertise" className="nav-link" data-name="expertise-link">Expertise</a>
                                <a href="#projects" className="nav-link" data-name="projects-link">Projects</a>
                                <a href="#publications" className="nav-link" data-name="publications-link">Publications</a>
                                <a href="#certifications" className="nav-link" data-name="certifications-link">Certifications</a>
                                <a href="#contact" className="nav-link" data-name="contact-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <section className="hero-section" data-name="hero">
                    <div className="hero-particles" data-name="particles"></div>
                    <div className="container mx-auto px-6">
                        <div className="hero-content text-center" data-name="hero-content">
                            <h1 className="text-5xl font-bold mb-4" data-name="hero-title">AI Developer & Researcher</h1>
                            <p className="text-xl mb-8 text-gray-400" data-name="hero-subtitle">
                                Pushing the boundaries of artificial intelligence
                                <span className="typing-effect"> |</span>
                            </p>
                            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity" data-name="cta-button">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
