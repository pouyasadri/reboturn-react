"use client"
import {FC, useState, useEffect, useCallback, Suspense} from 'react';
import dynamic from 'next/dynamic';
import {debounce} from 'lodash';
import {motion} from 'framer-motion';
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";

// const HeroSection = dynamic(() => import('@/components/HeroSection/HeroSection'), {ssr: false, loading: () => <div>Loading...</div>});
// const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), {ssr: false});
const FooterSection = dynamic(() => import('@/components/Footer/Footer'), {ssr: false});
const AboutUs = dynamic(() => import('@/components/About/AboutUs'), {ssr: false});
const ScrollComponent = dynamic(() => import('@/components/Works/Works'), {ssr: false});
const WhoWeAre = dynamic(() => import('@/components/WhoWeAre/WhoWeAre'), {ssr: false});
const WhatWeDo = dynamic(() => import('@/components/WhatWeDo/WhatWeDo'), {ssr: false});
const WhatWeDoMobile = dynamic(() => import('@/components/WhatWeDo/WhatWeDoMobile'), {ssr: false});
const useWindowSize = () => {
    const [isMobile, setIsMobile] = useState(false);

    const updateScreenSize = useCallback(
        debounce(() => {
            setIsMobile(window.innerWidth <= 786);
        }, 300),
        []
    );

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        updateScreenSize();

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, [updateScreenSize]);

    return isMobile;
};

const Home: FC = () => {
    const isMobile = useWindowSize();

    return (
        <main className="relative w-screen h-screen">
            <Suspense fallback={<div className={" lg:w-full h-full"}>

                <video src={"/loading.mp4"} className={"w-screen mx-auto rounded-2xl h-full lg:object-cover object-contain"}
                       autoPlay loop
                       muted playsInline/>
            </div>}>
                <motion.div
                    initial={{backdropFilter: 'blur(0px)'}}
                    animate={{backdropFilter: 'blur(20px)'}}
                    transition={{duration: 1, delay: 2}}
                    className="fixed w-screen h-24 z-40"
                >
                    <Navbar/>
                </motion.div>
                <HeroSection/>
                <AboutUs/>
                <ScrollComponent/>
                <div id="ourinnovations">{isMobile ? <WhatWeDoMobile/> : <WhatWeDo/>}</div>
                <WhoWeAre/>
                <FooterSection/>
            </Suspense>
        </main>
    );
};

export default Home;
