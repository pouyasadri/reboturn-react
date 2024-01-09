import {memo, useRef, useState} from "react";
import {useClickAway} from "react-use";
import {Squash as Hamburger} from "hamburger-react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-scroll";

const NAV_ITEMS = ["About Us", "Our Services", "Our Innovations", "Meet the Team"];
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
                        style={{backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',}}
                        className="fixed  left-0 right-0 top-[5.5rem] p-5 pt-0 z-40 h-[100vh] border-b border-b-white/20"
                    >
                        <ul className="grid gap-2">
                            {NAV_ITEMS.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={item.toLowerCase().replace(/\s/g, '')}
                                        smooth={true}
                                        duration={320 * (index + 1)}
                                        offset={-100}
                                        onClick={() => setOpen((prev) => !prev)}
                                        className="w-full px-5 py-3 mt-1 rounded-xl flex items-center justify-between p-5"
                                    >
                                        <motion.span
                                            initial={{scale: 0, opacity: 0}}
                                            animate={{scale: 1, opacity: 1}}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1 + index / 10,
                                            }}
                                            className="flex gap-1 md:text-3xl text-2xl font-semibold"
                                        >
                                            {item}

                                        </motion.span>
                                    </Link>
                                );
                            })}
                        </ul>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2, delay: 0.5}} id={"contactus"}
                            className={"w-[100%] h-[40%] mx-auto rounded-2xl my-10 relative flex items-center justify-center"}>
                            <video src={"/contactus.mp4"}
                                   className={" w-screen mx-auto rounded-2xl h-full object-cover"}
                                   autoPlay loop
                                   muted playsInline/>
                            <div
                                className={"absolute z-10 mx-auto top-4 left-0 right-0 flex flex-col gap-2 items-center justify-evenly"}>
                                <p className={"text-xl rounded font-mono font-semibold text-white p-2 backdrop-blur-[20px]"}>Your
                                    Queries matter to us</p>
                                <div
                                    className={" bg-[#9ae1ef] cursor-pointer rounded-3xl hover:bg-[#aee7f2] transition-all duration-200 w-44  p-1.5 text-black text-lg font-normal "}>
                                    <a href="mailto:reboturn@gmail.com">
                                        Reach Out Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});
export default NavMobile;
