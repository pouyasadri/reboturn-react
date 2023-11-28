import Image from "next/image";
import {motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import {Fragment, useRef, useState} from "react";
import {useClickAway} from "react-use";
import {Squash as Hamburger} from "hamburger-react";
import {Link} from 'react-scroll';
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
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


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
                        <Image src={LOGO_SRC} alt={LOGO_ALT} width={LOGO_WIDTH}
                               className={"max-md:w-[250px] max-sm:[200px]"} height={LOGO_HEIGHT}/>
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
                    className={"lg:flex justify-between items-center hidden lg:gap-3 max-md:gap-2 bg-black  text-white lg:px-6 max-md:px-3 lg:py-1 max-md:py-0.5 lg:text-xl max-md:text-sm font-light rounded-xl"}>
                    {/* Map through navigation items and render each one */}
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={index}
                            to={item.toLowerCase().replace(/\s/g, '')}
                            smooth={true}
                            duration={500 * (index + 1)}
                            className="lg:px-3 text-white max-md:px-1 lg:py-2 max-md:py-1 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                {/* Contact us section */}
                <div
                    className={"lg:ml-2 max-md:ml-1 lg:flex bg-[#9ae1ef] hidden hover:bg-[#aee7f2] transition-all duration-200 lg:px-4 max-md:px-2 lg:py-2 max-md:py-1 lg:text-lg max-md:text-sm text-black font-light rounded-xl"}>
                    <div
                        className="lg:px-3 max-md:px-1 lg:py-2 max-md:py-0.5 cursor-pointer transition-colors duration-200 rounded-md">
                        Contact us
                    </div>
                </div>
                {/*Humburger menu*/}
                <NavMobile/>
                {/*<div className={"hidden max-sm:mr-5 max-sm:block max-sm:p-4 max-sm:bg-[#9ae1ef] max-sm:rounded-xl"}*/}
                {/*     onClick={toggleMenu}>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">*/}
                {/*        <path*/}
                {/*            d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>*/}
                {/*    </svg>*/}
                {/*</div>*/}

            </motion.div>
        </Fragment>
    );
};
const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <div ref={ref} className="lg:hidden bg-[#9ae1ef] mr-5 p-1 md:mt-6 rounded-xl">
            <Hamburger color={"black"} toggled={isOpen} size={24} toggle={setOpen}/>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        className="fixed left-0 right-0 top-[5.5rem] p-5 pt-0 bg-[#c0c0c0] z-10 h-[100vh] border-b border-b-white/20"
                    >
                        <ul className="grid gap-2">
                            {NAV_ITEMS.map((item, index) => {


                                return (
                                    <Link
                                        key={index}
                                        to={item.toLowerCase().replace(/\s/g, '')}
                                        smooth={true}
                                        duration={500}>
                                        <motion.li
                                            initial={{scale: 0, opacity: 0}}
                                            animate={{scale: 1, opacity: 1}}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1 + index / 10,
                                            }}
                                            key={item}
                                            className="w-full p-[0.08rem] mt-1 rounded-xl "
                                        >
                                            <a
                                                onClick={() => setOpen((prev) => !prev)}
                                                className={
                                                    "flex items-center justify-between w-full p-5 rounded-xl "
                                                }
                                                href={"/"}
                                            >
                                                <span
                                                    className="flex gap-1 md:text-3xl text-2xl font-semibold">{item}</span>
                                                {/*<Icon className="text-xl" />*/}
                                            </a>
                                        </motion.li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default Navbar;
