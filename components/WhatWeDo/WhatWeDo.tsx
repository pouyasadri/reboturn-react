import React, {FC, useEffect, useRef, useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

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

    const textY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["0", "-100vh"]});

    const firstCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "-45%"]});
    const secondCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "-160%"]});
    const thirdCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "30%"]});
    const fourthCardX = useScrollTransform({scrollYProgress, range: [0.6, 1], output: ["0", "-260%"]});

    const firstCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["0vh", "-4vh"]});
    const secondCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["6vh", "0vh"]});
    const thirdCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["12vh", "0vh"]});
    const fourthCardEndY = useScrollTransform({scrollYProgress, range: [0.6, 0.8], output: ["18vh", "0vh"]});
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(v => setIsScroll(v > 0.6));

        return () => unsubscribe();
    }, [scrollYProgress]);
    return (
        <div ref={targetRef} className="w-[90%] mx-auto flex flex-wrap relative h-[300vh] ">
            <div className={"sticky top-0 flex h-screen justify-stretch items-center"}>

                <motion.div style={{y: textY}} className="max-sm:w-full  h-screen w-1/3 max-sm:p-5 p-10">
                    <h1 className="max-sm:text-3xl text-6xl font-bold text-black max-sm:mb-4 mb-8">
                        Behind the scene of Reboturn</h1>
                    <p className="text-base text-black font-light max-sm:mb-8 mb-16">
                        Reboturn, an innovative startup, is reshaping the fashion shopping experience by combining the
                        convenience of online shopping with the tactile feel of in-store purchases. Users can explore an
                        extensive catalog of international brands, try items at home, and only pay for what they choose
                        to
                        keep.
                    </p>
                    <button
                        className="max-sm:text-sm max-sm:mt-2.5 mt-5 relative overflow-hidden border border-black bg-black max-sm:p-2.5 p-5 text-white text-xl rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9ae1ef] before:transition-all before:duration-200 hover:text-black hover:border-[#9ae1ef] hover:before:left-0 hover:before:w-full">
                        <span className="relative z-10">Discover more</span></button>

                </motion.div>
                <div
                    className={`absolute left-1/2 float-right text-black top-0 flex h-screen justify-center items-center`}>
                    {/*first*/}
                    <motion.div className={"absolute left-[10rem] top-[10rem]"}
                                style={{filter: "drop-shadow(-3px 6px 3px rgba(50, 50, 0, 0.6))"}}>

                        <motion.div style={{
                            clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                            borderRadius: '1rem',
                            x: firstCardX,
                            y: isScroll ? firstCardEndY : firstCardY,
                        }}
                                    className={"absolute  border-black border-[1px] z-10 bg-gray-200 w-[20rem] h-[30rem]"}>
                            <div className={"mt-10 p-5 w-[70%]"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                Nam, totam!
                            </div>
                            <div className={"w-[32rem] absolute border-b-[1px] border-black text-3xl top-[16rem]"}
                                 style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                <span className={"absolute  ml-[10rem] -top-[3rem]"}>Algorithm</span>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/*second*/}
                    <motion.div className={"absolute left-[45rem] top-[8rem]"}
                                style={{filter: "drop-shadow(3px 6px 3px rgba(50, 50, 0, 0.6))"}}>
                        <motion.div
                            style={{
                                y: isScroll ? secondCardEndY : secondCardY,
                                x: secondCardX,
                                clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                                boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                                padding: '1rem',
                                borderRadius: '1rem',
                            }}
                            className={"absolute z-10 border-[1px] border-black right-[13.5rem] bg-gray-200 w-[20rem] h-[30rem]"}
                        >
                            <div className={"mt-10 p-5 w-[70%]"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                Nam, totam!
                            </div>
                            <div
                                className={"w-[30rem] absolute border-b-[1px] border-black text-3xl top-[15rem]"}
                                style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                <span className={"absolute ml-[10rem] -top-[3rem]"}>Application</span>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/*third*/}
                    <motion.div className={"absolute left-[55rem] top-[8rem]"}
                                style={{filter: "drop-shadow(-3px 6px 3px rgba(50, 50, 0, 0.6))"}}>
                        <motion.div style={{
                            y: isScroll ? thirdCardEndY : thirdCardY,
                            x: thirdCardX,
                            clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                            padding: '1rem',
                            borderRadius: '1rem',
                        }}
                                    className={"absolute z-10 border-black border-[1px] right-[18.5rem] bg-gray-200 w-[20rem] h-[30rem]"}>
                            <div className={"mt-10 p-5 w-[70%]"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                Nam, totam!
                            </div>
                            <div
                                className={"w-[30rem] absolute border-b-[1px] border-black text-3xl top-[15rem]"}
                                style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                <span className={"absolute ml-[10rem] -top-[3rem]"}>Application</span>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/*fourth*/}
                    <motion.div className={"absolute left-[48rem] top-[8rem]"}
                                style={{filter: "drop-shadow(3px 6px 3px rgba(50, 50, 0, 0.6))"}}>
                        <motion.div style={{
                            y: isScroll ? fourthCardEndY : fourthCardY,
                            x: fourthCardX,
                            clipPath: 'polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)',
                            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                            padding: '1rem',
                            borderRadius: '1rem',
                        }}
                                    className={"absolute z-10 border-black border-[1px] right-[18.5rem] bg-gray-200 w-[20rem] h-[30rem]"}>
                            <div className={"mt-10 p-5 w-[70%]"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                Nam, totam!
                            </div>
                            <div
                                className={"w-[30rem] absolute border-b-[1px] border-black text-3xl top-[15rem]"}
                                style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                                <span className={"absolute ml-[10rem] -top-[3rem]"}>Application</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;