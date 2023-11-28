// components/Navbar/NavItems.tsx
import {FC, memo} from 'react';
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';

const NAV_ITEMS = ["Work", "Who we are", "What we do", "Insights"];

const NavItems: FC = memo(function NavItems() {
    return (
        <motion.div
            initial={{opacity: 0, x: 200, display: "none"}}
            animate={{opacity: 1, x: 0, display: "flex"}}
            transition={{duration: 1, delay: 1.6}}
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
            <div
                className={"lg:ml-2 max-md:ml-1 lg:flex bg-[#9ae1ef] hidden hover:bg-[#aee7f2] transition-all duration-200 lg:px-4 max-md:px-2 lg:py-2 max-md:py-1 lg:text-lg max-md:text-sm text-black font-light rounded-xl"}>
                <div
                    className="lg:px-3 max-md:px-1 lg:py-2 max-md:py-0.5 cursor-pointer transition-colors duration-200 rounded-md">
                    Contact us
                </div>
            </div>
        </motion.div>
    );
});

export default NavItems;
