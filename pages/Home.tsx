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
            <Hero />
            <div className="relative z-10 w-full bg-white">
                <Impact />
                <Solutions />
                <Process />
                <Portfolio limit={4} />
                <Contact />
                <CTA />
            </div>
        </main>
    );
};

export default Home;
