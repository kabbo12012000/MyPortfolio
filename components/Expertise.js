function Expertise() {
    try {
        const skills = [
            { name: "Machine Learning", level: 95, icon: "fas fa-robot" },
            { name: "Deep Learning", level: 90, icon: "fas fa-brain" },
            { name: "Natural Language Processing", level: 85, icon: "fas fa-language" },
            { name: "Computer Vision", level: 88, icon: "fas fa-eye" },
            { name: "Reinforcement Learning", level: 80, icon: "fas fa-chart-line" },
            { name: "Neural Networks", level: 92, icon: "fas fa-network-wired" }
        ];

        return (
            <section id="expertise" className="section bg-gray-90" data-name="expertise-section">
                <div className="container mx-auto px-6">
                    <h2 className="section-title" data-name="expertise-title">AI Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-name="expertise-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="expertise-card" data-name={`expertise-${index + 1}`}>
                                <i className={`${skill.icon} expertise-icon`}></i>
                                <h3 className="text-lg font-medium text-white mb-4">{skill.name}</h3>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="text-right text-gray-400 mt-2">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Expertise component error:', error);
        reportError(error);
        return null;
    }
}
