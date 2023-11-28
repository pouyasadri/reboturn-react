"use client"
import {FC, Suspense, lazy} from 'react';
import Navbar from "@/components/Navbar/Navbar";

// Lazy load the components to improve performance
const HeroSection = lazy(() => import('@/components/HeroSection/HeroSection'));
const AboutUs = lazy(() => import('@/components/About/AboutUs'));
const ScrollComponent = lazy(() => import('@/components/Works/Works'));
const WhatWeDo = lazy(() => import("@/components/WhatWeDo/WhatWeDo"));
const WhoWeAre = lazy(() => import("@/components/WhoWeAre/WhoWeAre"));

// Home component
const Home: FC = () => {
    return (
        <main className="relative w-screen h-screen ">

            <Suspense fallback={<div>Loading...</div>}>
                <Navbar/>
                <HeroSection/>
                <AboutUs/>
                <ScrollComponent/>
                <WhatWeDo/>
                <WhoWeAre/>
            </Suspense>
        </main>
    );
};

export default Home;
