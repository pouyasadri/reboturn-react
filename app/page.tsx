"use client"
import {FC, useCallback, useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import {debounce} from "lodash";
import {motion} from "framer-motion";

const FooterSection = dynamic(() => import('@/components/Footer/Footer'));
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
                <motion.div initial={{backdropFilter: "blur(0px)"}}
                            animate={{backdropFilter: "blur(20px)"}}
                            transition={{duration: 1, delay: 2}} className={"fixed w-screen h-24 z-40"}>
                    <Navbar/>
                </motion.div>
                <HeroSection/>

                <AboutUs/>


                <ScrollComponent/>
                <div id="ourinnovations">
                    {isMobile ? <WhatWeDoMobile/> : <WhatWeDo/>}
                </div>

                <WhoWeAre/>
                <FooterSection/>
            </main>

        </>
    );
};

export default Home;
