import {memo, useRef, useState} from "react";
import {useClickAway} from "react-use";
import {Squash as Hamburger} from "hamburger-react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-scroll";

const NAV_ITEMS = ["Work", "Who we are", "What we do", "Insights"];
const NavMobile = memo(function NavMobile() {
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
});
export default NavMobile;
