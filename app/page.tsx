import Image from 'next/image'
import HeroSection from "@/components/HeroSection/HeroSection";
import NavbarLogo from "@/components/Navbar/NavbarLogo";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
    return (
        <main className={"relative w-screen h-screen bg-[#c0c0c0]"}>
            <NavbarLogo/>
            <Navbar/>
            <HeroSection/>

        </main>
    )
}
