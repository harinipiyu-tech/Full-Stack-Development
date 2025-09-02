import React from "react";
import "./homepage.css";

function HomePage() {
    return (
        <div className="homepage-container">
            <header>
                <h1>Welcome to Our Home Page</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <h2>Your Journey Starts Here</h2>
                    <p>Discover amazing features and a great user experience.</p>
                    <button>Get Started</button>
                </section>
            </main>
            <footer>
                <p>&copy; 2025 Home Page. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
