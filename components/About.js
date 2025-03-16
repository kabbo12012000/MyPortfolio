function About() {
    try {
        const stats = [
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "AI Projects" },
            { number: "10+", label: "Research Papers" },
            { number: "1000+", label: "Code Commits" }
        ];

        return (
            <section id="about" className="section" data-name="about-section">
                <div className="container mx-auto px-6">
                    <h2 className="section-title" data-name="about-title">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-12" data-name="about-content">
                        <div className="about-card p-6" data-name="about-description">
                            <i className="fas fa-brain about-icon mb-4"></i>
                            <h3 className="text-xl font-semibold mb-4 text-white" data-name="description-title">AI Specialist</h3>
                            <p className="text-gray-400" data-name="description-text">
                                As an AI developer with extensive experience in machine learning and deep learning,
                                I specialize in developing cutting-edge AI solutions that push the boundaries of what's possible.
                                My work focuses on neural networks, natural language processing, and computer vision.
                            </p>
                        </div>
                        <div className="about-card p-6" data-name="about-research">
                            <i className="fas fa-flask about-icon mb-4"></i>
                            <h3 className="text-xl font-semibold mb-4 text-white" data-name="research-title">Research Focus</h3>
                            <p className="text-gray-400" data-name="research-text">
                                My research interests include reinforcement learning, generative AI, and ethical AI development.
                                I'm passionate about creating AI systems that are not only powerful but also responsible and beneficial to society.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-name="stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card" data-name={`stat-${index + 1}`}>
                                <div className="stat-number">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
