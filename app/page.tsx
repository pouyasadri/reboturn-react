"use client"
import {FC, useState, useEffect, useCallback, Fragment, useRef} from 'react';
import dynamic from 'next/dynamic';
import {debounce} from 'lodash';
import {motion} from 'framer-motion';
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import Image from "next/image";

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
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>
            {isLoading &&
                <div className={"bg-transparent lg:w-screen flex justify-center items-center h-screen"}>
                    <Image src={"/loading.gif"} alt={"loading"} width={200} height={200}
                           className={"w-96 h-96 mx-auto my-0 rounded-2xl object-contain"}/>
                </div>}

            {!isLoading && <main className="relative w-screen h-screen">
                <motion.div
                    initial={{backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)'}}
                    animate={{backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)'}}
                    transition={{duration: 2, delay: 2}}
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
            </main>}
        </Fragment>
    );
};

export default Home;
