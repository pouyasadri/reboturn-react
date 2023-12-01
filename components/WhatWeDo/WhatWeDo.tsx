import {FC, useEffect, useRef, useState, useMemo} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/WhatWeDo/Card"), {ssr: false});
const WhatWeDo: FC = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});

    const firstCardY = useTransform(scrollYProgress, [0, 0.15], ["90%", "0rem"]);
    const secondCardY = useTransform(scrollYProgress, [0.15, 0.3], ["90%", "1.6rem"]);
    const thirdCardY = useTransform(scrollYProgress, [0.3, 0.45], ["90%", "3.2rem"]);
    const fourthCardY = useTransform(scrollYProgress, [0.45, 0.6], ["90%", "4.8rem"]);

    const textY = useTransform(scrollYProgress, [0.65, 0.8], ["0", "-50rem"]);

    const firstCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "-98%"]);
    const secondCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "-182%"]);
    const thirdCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "0%"]);
    const fourthCardX = useTransform(scrollYProgress, [0.6, 1], ["0", "-274%"]);

    const firstCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["0", "3rem"]);
    const secondCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["1.6rem", "3rem"]);
    const thirdCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["3.2rem", "3rem"]);
    const fourthCardEndY = useTransform(scrollYProgress, [0.6, 0.8], ["4.8rem", "3rem"]);

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
            src: "/AI.webp",
            x: firstCardX,
            y: isScroll ? firstCardEndY : firstCardY,
            title: "AI-Powered Shopping Assistant",
            description: "Our platform integrates an advanced AI assistant, offering personalized recommendations and interactive advice, tailored to individual preferences."
        },
        {
            src: "/map.webp",
            x: secondCardX,
            y: isScroll ? secondCardEndY : secondCardY,
            title: "Optimized Delivery Algorithm",
            description: "The platform uses an advanced algorithm for effective delivery management. This algorithm considers the storage and energy capacity of bicycles and customers' preferred delivery times, incorporating tools like Google's OR-Tools and OSRM for optimal route planning.",
            left: "-4rem",
        },
        {
            src: "/UI.webp",
            x: thirdCardX,
            y: isScroll ? thirdCardEndY : thirdCardY,
            title: "User-Friendly Interfaces",
            description: "Reboturn provides intuitive interfaces for customers, local businesses, and couriers, ranging from advanced shopping experiences to efficient stock management systems.",
            left: "1rem"
        },
        {
            src: "/logistic.webp",
            x: fourthCardX,
            y: isScroll ? fourthCardEndY : fourthCardY,
            title: "Reboturn’s Logistic Innovation",
            description: "The core of Reboturn's e-commerce strategy is its advanced logistic hub network. These hubs are key to managing inventory and facilitating efficient deliveries, integrating real-time stock synchronization and using eco-friendly, high-capacity bicycles.",
            left: "-6rem"
        }
    ], [firstCardX, firstCardY, firstCardEndY, secondCardX, secondCardY, secondCardEndY, thirdCardX, thirdCardY, thirdCardEndY, fourthCardX, fourthCardY, fourthCardEndY, isScroll]);

    return (
        <section ref={targetRef} className="w-[90%] mx-auto my-20 flex lg:h-[300vh]">
            <div className={"sticky top-[10%] flex h-screen justify-evenly items-center"}>
                {/*main text*/}
                <div>
                    <motion.div style={{y: textY}}
                                className="w-full max-md:mx-auto lg:w-1/2 h-screen p-2.5 lg:p-5 leading-relaxed">
                        <h1 className="text-3xl lg:text-6xl font-bold text-black mb-2.5 lg:mb-5">
                            Behind the scene of Reboturn</h1>
                        <p className="text-lg text-justify text-gray-700 my-2.5 lg:my-5">
                            Reboturn, an innovative startup, is reshaping the fashion shopping experience by combining
                            the
                            convenience of online shopping with the tactile feel of in-store purchases. Users can
                            explore an
                            extensive catalog of international brands, try items at home, and only pay for what they
                            choose
                            to
                            keep.
                        </p>
                    </motion.div>
                </div>
                <div className={`w-full -top-16 max-md:mx-auto lg:w-1/2 lg:p-10 h-screen text-black relative`}>
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
