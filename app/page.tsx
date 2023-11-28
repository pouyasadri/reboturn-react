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
            <Navbar/>
            <Suspense fallback={<div>Loading...</div>}>

                <HeroSection/>

                <div id="aboutus">
                    <AboutUs/>
                </div>
                <div id="work">
                    <ScrollComponent/>
                </div>
                <div id="whatwedo">
                    <WhatWeDo/>
                </div>
                <div id="whoweare">
                    <WhoWeAre/>
                </div>
            </Suspense>
        </main>
    );
};

export default Home;
