function App() {
    try {
        return (
            <div className="app" data-name="app-container">
                <Header />
                <About />
                <Expertise />
                <Projects />
                <Publications />
                <Certifications />
                <Contact />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
