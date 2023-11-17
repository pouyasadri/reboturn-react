"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import {className} from "postcss-selector-parser";

const NavbarLogo = () => {
    // const [isLoaded, setIsLoaded] = useState(false);
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoaded(true);
    //     }, 2000); // Delay of 1 second
    //
    //     return () => clearTimeout(timer); // Clean up timer on unmount
    // }, []);
    //
    // if (!isLoaded) return null;

    return (
        <motion.div
            initial={{opacity: 0, y: -200, display: "none"}}
            animate={{opacity: 1, y: 0, display: "block"}}
            transition={{duration: 1, delay: 1.6}} className={"absolute top-0 left-0 z-10 float-left"}
        >
            <div className={"bg-transparent"}>
                <a className={"m-0"} href={"/"}>
                    <Image src={"/logo.png"} alt={"ReboTurn Log"} width={350} height={100}/>
                </a>
            </div>
        </motion.div>
    );
};

export default NavbarLogo;
