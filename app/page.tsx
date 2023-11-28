"use client"
import {FC, Suspense, lazy, useState} from 'react';
import {InView} from 'react-intersection-observer';
import Navbar from "@/components/Navbar/Navbar";

const HeroSection = lazy(() => import('@/components/HeroSection/HeroSection'));
const AboutUs = lazy(() => import('@/components/About/AboutUs'));
const ScrollComponent = lazy(() => import('@/components/Works/Works'));
const WhatWeDo = lazy(() => import("@/components/WhatWeDo/WhatWeDo"));
const WhoWeAre = lazy(() => import("@/components/WhoWeAre/WhoWeAre"));

const Home: FC = () => {
    const [showHeroSection, setShowHeroSection] = useState(true);

    return (
        <main className="relative w-screen h-screen ">
            <Navbar/>
            <Suspense fallback={<div>Loading...</div>}>
                {showHeroSection && <HeroSection/>}
                <Suspense fallback={<div>Loading...</div>}>
                    <div id="aboutus">
                        <AboutUs/>
                    </div>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <InView as="div" onChange={(inView) => setShowHeroSection(!inView)}>
                        <div id="work">
                            <ScrollComponent/>
                        </div>
                        <div id="whatwedo">
                            <WhatWeDo/>
                        </div>
                        <div id="whoweare">
                            <WhoWeAre/>
                        </div>
                    </InView>
                </Suspense>
            </Suspense>
        </main>
    );
};

export default Home;
