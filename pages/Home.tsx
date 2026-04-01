import React from 'react';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Solutions from '../components/Solutions';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

const Home: React.FC = () => {
    return (
        <main className="relative bg-black scroll-smooth">
            {/* Sticky Hero Background Component */}
            <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
                <Hero />
            </div>

            {/* Content stack that reveals over the Hero like a card */}
            <div className="relative z-20 w-full bg-transparent">
                <Impact />
                <Solutions />
                <Process />
                <Portfolio limit={6} />
                <CTA />
                <Contact />
            </div>
        </main>
    );
};

export default Home;
