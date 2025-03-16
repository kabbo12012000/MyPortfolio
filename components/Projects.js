function Projects() { 
    try {
        const projects = [
            {
                title: "House Rent Prediction Model",
                description: "AI-powered model that accurately predicts house rental prices based on location, amenities, and market trends. Uses regression and deep learning techniques for precise forecasting.",
                image: "/IMAGES/house-rent.jpeg", 
                tags: ["Machine Learning", "Real Estate", "Regression", "Data Science"],
                github: "https://github.com/YOUR_GITHUB_REPO_HERE"
            },
            {
                title: "Emotion in Music Analysis",
                description: "Deep learning-based system that interprets emotions in music by analyzing audio signals, tempo, and tone. Utilizes AI to categorize tracks into emotional spectrums.",
                image: "/IMAGES/music.jpeg", 
                tags: ["AI", "Deep Learning", "Music Analysis", "Emotion Recognition"],
                github: "https://github.com/YOUR_GITHUB_REPO_HERE"
            },
            {
                title: "AI Chat Assistant",
                description: "Advanced conversational AI chatbot leveraging NLP and transformer models to engage in natural, human-like interactions. Supports multi-language and contextual understanding.",
                image: "/IMAGES/chatbot.jpeg", 
                tags: ["NLP", "AI Chatbot", "Transformers", "Conversational AI"],
                github: "https://github.com/YOUR_GITHUB_REPO_HERE"
            }
        ];

        return (
            <section id="projects" className="section py-12" data-name="projects-section">
                <div className="container mx-auto px-6">
                    <h2 className="text-white text-center text-3xl font-bold mb-8" data-name="projects-title">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-name="projects-grid">
                        {projects.map((project, index) => (
                            <a 
                                key={index} 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block transform hover:scale-105 transition duration-300"
                                data-name={`project-${index + 1}`}
                            >
                                <div className="project-card bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col min-h-[400px]">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                        <p className="text-gray-400 flex-grow">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Projects component error:", error);
        reportError(error);
        return null;
    }
}
