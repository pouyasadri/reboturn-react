"use client"
import { FC, Suspense, lazy, useState } from 'react';
import { InView } from 'react-intersection-observer';
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
                <InView as="div"  id="aboutus">
                    <AboutUs/>
                </InView>
                <InView as="div" onChange={(inView) => setShowHeroSection(!inView)} id="work">
                    <ScrollComponent/>
                </InView>
                <InView as="div" id="whatwedo">
                    <WhatWeDo/>
                </InView>
                <div id="whoweare">
                    <WhoWeAre/>
                </div>
            </Suspense>
        </main>
    );
};

export default Home;
