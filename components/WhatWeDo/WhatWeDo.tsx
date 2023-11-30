import {FC, useEffect, useRef, useState, useMemo} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/WhatWeDo/Card"), {ssr: false});
const WhatWeDo: FC = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});

    const firstCardY = useTransform(scrollYProgress, [0, 0.15], ["50rem", "0rem"]);
    const secondCardY = useTransform(scrollYProgress, [0.15, 0.3], ["21.5rem", "-28.5rem"]);
    const thirdCardY = useTransform(scrollYProgress, [0.3, 0.45], ["-7rem", "-57rem"]);
    const fourthCardY = useTransform(scrollYProgress, [0.45, 0.6], ["-35.5rem", "-85.5rem"]);

    const textY = useTransform(scrollYProgress, [0.65, 0.8], ["0", "-50rem"]);

    const firstCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "-15.8rem"]);
    const secondCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "-34rem"]);
    const thirdCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "5.5rem"]);
    const fourthCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "54.2rem"]);

    const firstCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["0", "2.5rem"]);
    const secondCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["-28.5rem", "-22.5rem"]);
    const thirdCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["-57rem", "-51rem"]);
    const fourthCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["-85.5rem", "-79.5rem"]);

    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            if (v > 0.6) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    const cards = useMemo(() => [
        {
            src: "/AI.png",
            x: firstCardX,
            y: isScroll ? firstCardEndY : firstCardY,
            title: "AI-Powered Shopping Assistant",
            description: "Our platform integrates an advanced AI assistant, offering personalized recommendations and interactive advice, tailored to individual preferences."
        },
        {
            src: "/map.png",
            x: secondCardX,
            y: isScroll ? secondCardEndY : secondCardY,
            title: "Optimized Delivery Algorithm",
            description: "The platform uses an advanced algorithm for effective delivery management. This algorithm considers the storage and energy capacity of bicycles and customers' preferred delivery times, incorporating tools like Google's OR-Tools and OSRM for optimal route planning.",
            left: "-4rem"
        },
        {
            src: "/UI.png",
            x: thirdCardX,
            y: isScroll ? thirdCardEndY : thirdCardY,
            title: "User-Friendly Interfaces",
            description: "Reboturn provides intuitive interfaces for customers, local businesses, and couriers, ranging from advanced shopping experiences to efficient stock management systems.",
            left: "1rem"
        },
        {
            src: "/logistic.png",
            x: fourthCardX,
            y: isScroll ? fourthCardEndY : fourthCardY,
            title: "Reboturn’s Logistic Innovation",
            description: "The core of Reboturn's e-commerce strategy is its advanced logistic hub network. These hubs are key to managing inventory and facilitating efficient deliveries, integrating real-time stock synchronization and using eco-friendly, high-capacity bicycles.",
            left: "-6rem"
        }
    ], [firstCardX, firstCardY, firstCardEndY, secondCardX, secondCardY, secondCardEndY, thirdCardX, thirdCardY, thirdCardEndY, fourthCardX, fourthCardY, fourthCardEndY, isScroll]);

    return (
        <section ref={targetRef} className="w-[90%] mx-auto lg:my-20 flex h-[300vh]">
            <div className={"sticky lg:top-[10%] lg:flex h-screen lg:justify-evenly lg:items-center"}>
                {/*main text*/}
                <div>
                    <motion.div style={{y: textY}} className="w-full max-md:mx-auto lg:w-1/2 h-screen p-2.5 lg:p-5 leading-relaxed">
                        <h1 className="text-3xl lg:text-6xl font-bold text-black mb-2.5 lg:mb-5">
                            Behind the scene of Reboturn</h1>
                        <p className="text-lg text-gray-700 my-2.5 lg:my-5">
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
                            className="text-base font-semibold mt-2.5 lg:mt-5 relative overflow-hidden border border-black bg-black p-2.5 lg:p-5 text-white lg:text-xl rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9ae1ef] before:transition-all before:duration-200 hover:text-black hover:border-[#9ae1ef] hover:before:left-0 hover:before:w-full">
                            <span className="relative z-10">Discover more</span></button>
                    </motion.div>
                </div>
                <div className={`w-full max-md:mx-auto lg:w-1/2 lg:p-10 text-black h-screen`}>
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
