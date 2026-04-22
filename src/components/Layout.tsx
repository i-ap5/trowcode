import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import InteractiveBackground from './InteractiveBackground';

const Layout: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="relative flex flex-col min-h-screen">
            {/* Minimal Scroll Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 z-[200] origin-left"
                style={{ scaleX }}
            />

            <InteractiveBackground />

            <Navbar />

            <main className="relative z-10 w-full flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
