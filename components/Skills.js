function Skills() {
    try {
        const skills = [
            { name: 'React', icon: 'fab fa-react' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3-alt' },
            { name: 'Node.js', icon: 'fab fa-node-js' },
            { name: 'Git', icon: 'fab fa-git-alt' }
        ];

        return (
            <section id="skills" className="section" data-name="skills-section">
                <div className="container mx-auto px-6">
                    <h2 className="section-title" data-name="skills-title">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-name="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card text-center" data-name={`skill-${skill.name.toLowerCase()}`}>
                                <i className={`${skill.icon} skill-icon`}></i>
                                <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
