"use client"
import HeroSection from "@/components/HeroSection/HeroSection";
import NavbarLogo from "@/components/Navbar/NavbarLogo";
import Navbar from "@/components/Navbar/Navbar";
import AboutUs from "@/components/About/AboutUs";
import ScrollComponent from "@/components/Works/Works";

export default function Home() {
    return (
        <main className={"relative w-screen h-screen "}>
            <NavbarLogo/>
            <Navbar/>
            <HeroSection/>
            <AboutUs/>
            <ScrollComponent/>
        </main>
    )
}
