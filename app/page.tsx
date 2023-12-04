"use client"
import {ComponentType, FC, useCallback, useEffect, useMemo, useState} from 'react';
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import {debounce} from "lodash";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

// const Navbar = dynamic(() => import('@/components/Navbar/Navbar'));
// const HeroSection = dynamic(() => import('@/components/HeroSection/HeroSection'));
const AboutUs = dynamic(() => import('@/components/About/AboutUs'));
const ScrollComponent = dynamic(() => import('@/components/Works/Works'));
const WhoWeAre = dynamic(() => import("@/components/WhoWeAre/WhoWeAre"));
const WhatWeDo = dynamic(() => import('@/components/WhatWeDo/WhatWeDo'), {
    ssr: false, loading: () => <div>Loading...</div>
});
const WhatWeDoMobile = dynamic(() => import('@/components/WhatWeDo/WhatWeDoMobile'), {
    ssr: false, loading: () => <div>Loading...</div>
});
const Home: FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const updateScreenSize = useCallback(debounce(() => {
        setIsMobile(window.innerWidth <= 786);
    }, 300), []);
    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        updateScreenSize();

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, [updateScreenSize]);
    return (
        <>
            <main className="relative w-screen h-screen ">

                <Navbar/>
                <HeroSection/>

                <AboutUs/>


                <ScrollComponent/>
                <div id="ourinnovations">
                    {isMobile ? <WhatWeDoMobile/> : <WhatWeDo/>}
                </div>

                <WhoWeAre/>
                <Footer/>
            </main>

        </>
    );
};

export default Home;
