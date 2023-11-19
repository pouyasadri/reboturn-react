import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

// Define constants for cleaner code and better performance
const NAV_ITEMS = ["Work", "Who we are", "What we do", "Insights"];
const LOGO_SRC = "/logo.png";
const LOGO_ALT = "ReboTurn Log";
const LOGO_WIDTH = 400;
const LOGO_HEIGHT = 100;
const INITIAL_ANIMATION = { opacity: 0, y: -200, display: "none" };
const FINAL_ANIMATION = { opacity: 1, y: 0, display: "block" };
const TRANSITION = { duration: 1, delay: 1.6 };

// Navbar component
const Navbar = () => {
    return (
        <Fragment>
            {/* Logo section */}
            <motion.div
                initial={INITIAL_ANIMATION}
                animate={FINAL_ANIMATION}
                transition={TRANSITION}
                className={"absolute top-0 left-0 z-10 float-left"}
            >
                <div className={"bg-transparent"}>
                    <a className={"m-0"} href={"/"}>
                        <Image src={LOGO_SRC} alt={LOGO_ALT} width={LOGO_WIDTH} height={LOGO_HEIGHT} />
                    </a>
                </div>
            </motion.div>
            {/* Navigation items section */}
            <motion.div
                initial={{ opacity: 0, x: 200, display: "none" }}
                animate={{ opacity: 1, x: 0, display: "flex" }}
                transition={TRANSITION}
                className={"flex-row absolute top-0 right-0 z-10 px-6 pt-[1.5rem]"}
            >
                <div className={"flex justify-between items-center gap-3 bg-black text-white px-6 py-1 text-lg font-light rounded-xl"}>
                    {/* Map through navigation items and render each one */}
                    {NAV_ITEMS.map((item, index) => (
                        <div key={index} className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                            {item}
                        </div>
                    ))}
                </div>
                {/* Contact us section */}
                <div className={"ml-2 flex bg-[#9ae1ef] px-4 py-2 text-lg text-black font-light rounded-xl"}>
                    <div className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                        Contact us
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
};

export default Navbar;
