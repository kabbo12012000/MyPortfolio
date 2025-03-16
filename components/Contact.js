function Contact() {
    try {
        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission
        };

        return (
            <section id="contact" className="section" data-name="contact-section">
                <div className="container mx-auto px-6">
                    <h2 className="section-title" data-name="contact-title">Get In Touch</h2>
                    <div className="max-w-4xl mx-auto" data-name="contact-container">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="contact-form" data-name="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6" data-name="form-group">
                                        <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-input"
                                            required
                                            data-name="name-input"
                                        />
                                    </div>
                                    <div className="mb-6" data-name="form-group">
                                        <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-input"
                                            required
                                            data-name="email-input"
                                        />
                                    </div>
                                    <div className="mb-6" data-name="form-group">
                                        <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="form-input"
                                            required
                                            data-name="message-input"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="submit-button" data-name="submit-button">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            <div className="flex flex-col justify-center" data-name="contact-info">
                                <div className="text-gray-400 mb-8">
                                    <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
                                    <p className="mb-4">
                                        I'm always interested in new AI projects and research collaborations.
                                        Feel free to reach out!
                                    </p>
                                    <div className="flex space-x-6 mt-6">
                                        <a href="https://github.com/kabbo12012000" className="social-icon" data-name="github-link">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/kabbojit-deb/" className="social-icon" data-name="linkedin-link">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://www.instagram.com/kabbojitdeb/" className="social-icon" data-name="twitter-link">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://www.facebook.com/kabbojitdeb12" className="social-icon" data-name="twitter-link">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
