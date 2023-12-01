"use client"
import {FC} from 'react';
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
// const Navbar = dynamic(() => import('@/components/Navbar/Navbar'));
// const HeroSection = dynamic(() => import('@/components/HeroSection/HeroSection'));
const AboutUs = dynamic(() => import('@/components/About/AboutUs'));
const ScrollComponent = dynamic(() => import('@/components/Works/Works'));
const WhatWeDo = dynamic(() => import("@/components/WhatWeDo/WhatWeDo"));
const WhoWeAre = dynamic(() => import("@/components/WhoWeAre/WhoWeAre"));

const Home: FC = () => {
    return (
        <main className="relative w-screen h-screen ">
            <Navbar/>
            <HeroSection/>
            <div id="aboutus">
                <AboutUs/>
            </div>
            <div id="works">
                <ScrollComponent/>
            </div>
            {/*<div id="whatwedo">*/}
            {/*    <WhatWeDo/>*/}
            {/*</div>*/}
            <div id="whoweare">
                <WhoWeAre/>
            </div>
        </main>
    );
};

export default Home;
