function Certifications() {
    try {
        const certifications = [
            {
                title: "Deep Learning Specialization",
                issuer: "DeepLearning.AI",
                date: "2023",
                logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                verifyLink: "#"
            },
            {
                title: "TensorFlow Developer Certificate",
                issuer: "Google",
                date: "2023",
                logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                verifyLink: "#"
            },
            {
                title: "Machine Learning Engineer Nanodegree",
                issuer: "Udacity",
                date: "2022",
                logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                verifyLink: "#"
            },
            {
                title: "AWS Machine Learning Specialty",
                issuer: "Amazon Web Services",
                date: "2022",
                logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                verifyLink: "#"
            }
        ];

        return (
            <section id="certifications" className="section bg-gray-900" data-name="certifications-section">
                <div className="container mx-auto px-6">
                    <h2 className="section-title" data-name="certifications-title">Certifications</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-name="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="certification-card" data-name={`certification-${index + 1}`}>
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={cert.logo} 
                                        alt={`${cert.issuer} logo`}
                                        className="issuer-logo mr-3"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                                        <p className="certification-meta">{cert.issuer}</p>
                                    </div>
                                </div>
                                <div className="certification-meta mb-4">Issued: {cert.date}</div>
                                <a 
                                    href={cert.verifyLink} 
                                    className="verify-button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-certificate"></i>
                                    Verify
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Certifications component error:', error);
        reportError(error);
        return null;
    }
}
