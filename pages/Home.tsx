import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Mission from '../components/Mission';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-brand-yellow selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Mission />
                <Blog />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
