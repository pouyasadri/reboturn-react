"use client"
import { FC, memo } from 'react';
import HeroSection from '@/components/HeroSection/HeroSection';
import Navbar from '@/components/Navbar/Navbar';
import AboutUs from '@/components/About/AboutUs';
import ScrollComponent from '@/components/Works/Works';

const NavbarMemo = memo(Navbar);
const HeroSectionMemo = memo(HeroSection);
const AboutUsMemo = memo(AboutUs);
const ScrollComponentMemo = memo(ScrollComponent);

const Home: FC = () => {
    return (
        <main className="relative w-screen h-screen">
            <NavbarMemo />
            <HeroSectionMemo />
            <AboutUsMemo />
            <ScrollComponentMemo />
        </main>
    );
};

export default Home;
