import React, {FC, useEffect, useRef, useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import Image from "next/image";

interface UseScrollTransformProps {
    scrollYProgress: any;
    range: [number, number];
    output: [string, string];
}

const useScrollTransform = ({scrollYProgress, range, output}: UseScrollTransformProps) => {
    return useTransform(scrollYProgress, range, output);
}
const WhatWeDo: FC = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});

    const firstCardY = useScrollTransform({scrollYProgress, range: [0, 0.15], output: ["100vh", "3vh"]});
    const secondCardY = useScrollTransform({scrollYProgress, range: [0.15, 0.3], output: ["100vh", "6vh"]});
    const thirdCardY = useScrollTransform({scrollYProgress, range: [0.3, 0.45], output: ["100vh", "9vh"]});
    const fourthCardY = useScrollTransform({scrollYProgress, range: [0.45, 0.6], output: ["100vh", "12vh"]});

    const mainTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const firstTextOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0]);
    const textY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["0", "-100vh"]});

    const firstCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "-17.5vw"]});
    const secondCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "-39.5vw"]});
    const thirdCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "4.5vw"]});
    const fourthCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "-61.5vw"]});

    const firstCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["3vh", "7.7vh"]});
    const secondCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["6vh", "3.8vh"]});
    const thirdCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["9vh", "0vh"]});
    const fourthCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["12vh", "-3.8vh"]});
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(v => setIsScroll(v > 0.6));

        return () => unsubscribe();
    }, [scrollYProgress]);
    return (
        <section ref={targetRef} className="w-[90%] mx-auto flex relative h-[300vh] ">
            <div className={"sticky top-[10%] flex h-screen justify-evenly items-center"}>
                {/*main text*/}
                <div>
                    <motion.div style={{y: textY}} className="w-full lg:w-1/2 h-screen p-2.5 lg:p-5">
                        <h1 className="text-3xl lg:text-6xl font-bold text-black mb-2.5 lg:mb-5">
                            Behind the scene of Reboturn</h1>
                        <p className=" text-lg text-black font-light mb-2.5 lg:mb-5">
                            Reboturn, an innovative startup, is reshaping the fashion shopping experience by combining
                            the
                            convenience of online shopping with the tactile feel of in-store purchases. Users can
                            explore an
                            extensive catalog of international brands, try items at home, and only pay for what they
                            choose
                            to
                            keep.
                        </p>
                        <button
                            className="text-sm mt-2.5 lg:mt-5 relative overflow-hidden border border-black bg-black p-2.5 lg:p-5 text-white lg:text-xl rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9ae1ef] before:transition-all before:duration-200 hover:text-black hover:border-[#9ae1ef] hover:before:left-0 hover:before:w-full">
                            <span className="relative z-10">Discover more</span></button>

                    </motion.div>
                </div>
                <div
                    className={`w-full lg:w-1/2 lg:p-10 text-black h-screen`}>
                    {/*first*/}
                    <motion.div style={{
                        x: firstCardX,
                        y: isScroll ? firstCardEndY : firstCardY,
                    }} className={"relative h-30"}>
                        <div className={"left-[60vw]  w-[22rem] h-[30rem]"}
                             style={{
                                 filter: "drop-shadow(-1px 2px 1px rgba(50, 50, 0, 0.6))",
                                 clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                                 background: "black",
                             }}>

                            <div style={{
                                clipPath: 'polygon(79.8% 0.2%, 99.8% 20.2%, 99.8% 99.8%, 0.2% 99.8%, 0.2% 0.2%)',

                                background: "white",
                            }}
                                 className={"absolute z-10 bg-gray-200 w-full h-full"}>
                                <div className={"mt-5 px-5 leading-relaxed w-[82%] text-sm font-medium"}>Our platform
                                    integrates an advanced
                                    AI assistant, offering personalized recommendations and interactive advice, tailored
                                    to individual preferences.
                                </div>
                                <div
                                    className={"w-[35rem] absolute border-b-[1px] border-black font-semibold text-2xl top-[16vw]"}
                                    style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                    <span
                                        className={"absolute  ml-[10vw] -top-[3vw]"}>AI-Powered Shopping Assistant</span>
                                </div>

                            </div>

                        </div>
                        <div className={""}>
                            <Image src={"/work1.png"} alt={""}
                                   className={"top-[28vh] rounded-3xl absolute z-20 left-[0.75vw] w-[18.5vw] shadow-2xl shadow-black object-cover h-[38vh]"}
                                   width={500} height={500}/>
                        </div>
                    </motion.div>
                    {/*second*/}
                    <motion.div style={{
                        x: secondCardX,
                        y: isScroll ? secondCardEndY : secondCardY,
                    }} className={"relative h-30 -top-[57vh] -left-[3vw]"}>
                        <div className={"left-[60vw]  w-[22rem] h-[30rem]"}
                             style={{
                                 filter: "drop-shadow(-1px 2px 1px rgba(50, 50, 0, 0.6))",
                                 clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                                 background: "black",
                             }}>

                            <div style={{
                                clipPath: 'polygon(79.8% 0.2%, 99.8% 20.2%, 99.8% 99.8%, 0.2% 99.8%, 0.2% 0.2%)',

                                background: "white",
                            }}
                                 className={"absolute z-10 bg-gray-200 w-full h-full"}>
                                <div className={"mt-5 px-5 leading-relaxed w-[82%] text-sm font-medium"}>The platform
                                    uses an advanced algorithm for effective delivery management. This algorithm
                                    considers the storage and energy capacity of bicycles and customers&#39; preferred
                                    delivery times, incorporating tools like Google&#39;s OR-Tools and OSRM for optimal
                                    route planning.
                                </div>
                                <div
                                    className={"w-[35rem] absolute border-b-[1px] border-black font-semibold text-2xl top-[16vw]"}
                                    style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                    <span
                                        className={"absolute  ml-[10vw] -top-[3vw]"}>Optimized Delivery Algorithm</span>
                                </div>

                            </div>

                        </div>
                        <div className={""}>
                            <Image src={"/map.png"} alt={""}
                                   className={"top-[28vh] rounded-3xl absolute z-20 left-[0.75vw] w-[18.5vw] shadow-2xl shadow-black object-cover h-[38vh]"}
                                   width={500} height={500}/>
                        </div>
                    </motion.div>
                    {/*third*/}
                    <motion.div style={{
                        x: thirdCardX,
                        y: isScroll ? thirdCardEndY : thirdCardY,
                    }} className={"relative h-30 -top-[114vh] left-[3vw]"}>
                        <div className={"left-[60vw]  w-[22rem] h-[30rem]"}
                             style={{
                                 filter: "drop-shadow(-1px 2px 1px rgba(50, 50, 0, 0.6))",
                                 clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                                 background: "black",
                             }}>

                            <div style={{
                                clipPath: 'polygon(79.8% 0.2%, 99.8% 20.2%, 99.8% 99.8%, 0.2% 99.8%, 0.2% 0.2%)',

                                background: "white",
                            }}
                                 className={"absolute z-10 bg-gray-200 w-full h-full"}>
                                <div className={"mt-5 px-5 leading-relaxed w-[82%] text-sm font-medium"}>Reboturn
                                    provides intuitive interfaces for customers, local businesses, and couriers, ranging
                                    from advanced shopping experiences to efficient stock management systems.
                                </div>
                                <div
                                    className={"w-[35rem] absolute border-b-[1px] border-black font-semibold text-2xl top-[16vw]"}
                                    style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                    <span
                                        className={"absolute  ml-[10vw] -top-[3vw]"}>User-Friendly Interfaces</span>
                                </div>

                            </div>

                        </div>
                        <div className={""}>
                            <Image src={"/card3.png"} alt={""}
                                   className={"top-[28vh] rounded-3xl absolute z-20 left-[0.75vw] w-[18.5vw] shadow-2xl shadow-black object-cover h-[38vh]"}
                                   width={500} height={500}/>
                        </div>
                    </motion.div>
                    {/*fourth*/}
                    <motion.div style={{
                        x: fourthCardX,
                        y: isScroll ? fourthCardEndY : fourthCardY,
                    }} className={"relative h-30 -top-[171vh] -left-[6vw]"}>
                        <div className={"left-[60vw]  w-[22rem] h-[30rem]"}
                             style={{
                                 filter: "drop-shadow(-1px 2px 1px rgba(50, 50, 0, 0.6))",
                                 clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                                 background: "black",
                             }}>

                            <div style={{
                                clipPath: 'polygon(79.8% 0.2%, 99.8% 20.2%, 99.8% 99.8%, 0.2% 99.8%, 0.2% 0.2%)',

                                background: "white",
                            }}
                                 className={"absolute z-10 bg-gray-200 w-full h-full"}>
                                <div className={"mt-5 px-5 leading-relaxed w-[82%] text-sm font-medium"}>The core of
                                    Reboturn&#39;s e-commerce strategy is its advanced logistic hub network. These hubs are
                                    key to managing inventory and facilitating efficient deliveries, integrating
                                    real-time stock synchronization and using eco-friendly, high-capacity bicycles.
                                </div>
                                <div
                                    className={"w-[35rem] absolute border-b-[1px] border-black font-semibold text-2xl top-[16vw]"}
                                    style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                    <span
                                        className={"absolute  ml-[10vw] -top-[3vw]"}>Reboturn’s Logistic Innovation</span>
                                </div>

                            </div>

                        </div>
                        <div className={""}>
                            <Image src={"/logistic.png"} alt={""}
                                   className={"top-[28vh] rounded-3xl absolute z-20 left-[0.75vw] w-[18.5vw] shadow-2xl shadow-black object-cover h-[38vh]"}
                                   width={500} height={500}/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
