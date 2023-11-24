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
             {/*Use Suspense to provide a fallback UI while the components are being loaded*/}
            {/*<Navbar/>*/}
            {/*<Suspense fallback={<div>Loading...</div>}>*/}
            {/*    <HeroSection/>*/}
            {/*    <AboutUs/>*/}
            {/*</Suspense>*/}
            {/*<Suspense fallback={<div>Loading...</div>}>*/}
            {/*    <ScrollComponent/>*/}
            {/*</Suspense>*/}
            <Suspense fallback={<div>Loading...</div>}>
                <WhatWeDo/>
            </Suspense>
            {/*<WhoWeAre/>*/}

        </main>
    );
};

export default Home;
