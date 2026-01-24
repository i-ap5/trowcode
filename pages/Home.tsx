import React from 'react';
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import Capabilities from '../components/Capabilities';
import Methodology from '../components/Methodology';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Ecosystem />
            <Capabilities />
            <Methodology />
            <TechStack />
            <Testimonials />
            <Contact />
            <CTA />
        </>
    );
};

export default Home;
