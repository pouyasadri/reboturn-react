"use client"
import {motion} from "framer-motion";
import Image from "next/image";

const Navbar = () => (
    <motion.div
        initial={{opacity: 0, x: 200, display: "none"}}
        animate={{opacity: 1, x: 0, display: "flex"}}
        transition={{duration: 1, delay: 1.6}} className={" flex-row absolute  top-0 right-0 z-10 px-6 pt-[1.5rem]"}
    >
        <div className={"flex justify-between items-center gap-3 bg-black text-white px-6 py-1 text-lg font-light rounded-xl"}>
            <div className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                Work
            </div>
            <div className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                Who we are
            </div>
            <div className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                What we do
            </div>
            <div className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                Insights
            </div>
        </div>
        <div className={"ml-2 flex bg-[#9ae1ef] px-4 py-2 text-lg text-black font-light rounded-xl"}>
            <div className="px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-md">
                Contact us
            </div>
        </div>
    </motion.div>
);

export default Navbar;
