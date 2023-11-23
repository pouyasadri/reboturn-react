import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {Fragment, useRef} from "react";

// Define constants for cleaner code and better performance
const NAV_ITEMS = ["Work", "Who we are", "What we do", "Insights"];
const LOGO_SRC = "/logo.png";
const LOGO_ALT = "ReboTurn Log";
const LOGO_WIDTH = 400;
const LOGO_HEIGHT = 100;
const INITIAL_ANIMATION = {opacity: 0, y: -200, display: "none"};
const FINAL_ANIMATION = {opacity: 1, y: 0, display: "block"};
const TRANSITION = {duration: 1, delay: 1.6};

// Navbar component
const Navbar = () => {

    return (
        <Fragment>
                {/* Logo section */}
                <motion.div
                    initial={INITIAL_ANIMATION}
                    animate={FINAL_ANIMATION}
                    transition={TRANSITION}

                    className={"absolute top-0 left-0 z-10 float-left max-md:pt-[0.5rem]"}
                >
                    <div className={"bg-transparent"}>
                        <a className={"m-0"} href={"/"}>
                            <Image src={LOGO_SRC} alt={LOGO_ALT} width={LOGO_WIDTH} className={"max-md:w-[200px] "} height={LOGO_HEIGHT}/>
                        </a>
                    </div>
                </motion.div>
                {/* Navigation items section */}
                <motion.div
                    initial={{opacity: 0, x: 200, display: "none"}}
                    animate={{opacity: 1, x: 0, display: "flex"}}
                    transition={TRANSITION}
                    className={"flex-row absolute top-0 right-0 z-10 lg:px-6  max-md:px-3 max-sm:px-1.5 lg:pt-[1.5rem] max-md:pt-[1rem]"}
                >
                    <div
                        className={"flex justify-between items-center max-sm:hidden lg:gap-3 max-md:gap-2 bg-black  text-white lg:px-6 max-md:px-3 lg:py-1 max-md:py-0.5 lg:text-xl max-md:text-sm font-light rounded-xl"}>
                        {/* Map through navigation items and render each one */}
                        {NAV_ITEMS.map((item, index) => (
                            <div key={index}
                                 className="lg:px-3 max-md:px-1 lg:py-2 max-md:py-1 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                                {item}
                            </div>
                        ))}
                    </div>
                    {/* Contact us section */}
                    <div
                        className={"lg:ml-2 max-md:ml-1 flex bg-[#9ae1ef] max-sm:hidden hover:bg-[#aee7f2] transition-all duration-200 lg:px-4 max-md:px-2 lg:py-2 max-md:py-1 lg:text-lg max-md:text-sm text-black font-light rounded-xl"}>
                        <div className="lg:px-3 max-md:px-1 lg:py-2 max-md:py-0.5 cursor-pointer transition-colors duration-200 rounded-md">
                            Contact us
                        </div>
                    </div>
                    <div className={"hidden max-sm:mr-4 max-sm:block max-sm:p-3 max-sm:bg-[#9ae1ef] max-sm:rounded-xl"}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                        </svg>
                    </div>
                </motion.div>
        </Fragment>
    );
};

export default Navbar;
