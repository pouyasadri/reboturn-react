import Image from 'next/image'
import HeroSection from "@/components/HeroSection/HeroSection";
import NavbarLogo from "@/components/Navbar/NavbarLogo";

export default function Home() {
    return (
        <main className={"relative w-screen h-screen bg-[#c0c0c0]"}>
            <NavbarLogo />
            <HeroSection/>

        </main>
    )
}
