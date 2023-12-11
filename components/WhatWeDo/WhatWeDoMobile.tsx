import {FC, useMemo, useRef} from "react";
import {useScroll, useTransform} from "framer-motion";
import dynamic from "next/dynamic";

const CardMobile = dynamic(() => import("@/components/WhatWeDo/CardMobile"), {ssr: false});
const WhatWeDoMobile: FC = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});

    const firstCardY = useTransform(scrollYProgress, [0, 0.15], ["90%", "0"]);
    const secondCardY = useTransform(scrollYProgress, [0.15, 0.3], ["90%", "1.6rem"]);
    const thirdCardY = useTransform(scrollYProgress, [0.3, 0.45], ["90%", "3.2rem"]);
    const fourthCardY = useTransform(scrollYProgress, [0.45, 0.6], ["90%", "4.8rem"]);

    const cards = useMemo(() => [
        {
            src: "/AI.webp",
            y: firstCardY,
            title: "AI-Powered Shopping Assistant",
            description: "Our platform integrates an advanced AI assistant, offering personalized recommendations and interactive advice, tailored to individual preferences.",
            left: "3rem"
        },
        {
            src: "/map.webp",
            y: secondCardY,
            title: "Optimized Delivery Algorithm",
            description: "The platform uses an advanced algorithm for effective delivery management. This algorithm considers the storage and energy capacity of bicycles and customers' preferred delivery times, incorporating tools like Google's OR-Tools and OSRM for optimal route planning.",
            left: "0rem",
        },
        {
            src: "/UI.webp",
            y: thirdCardY,
            title: "User-Friendly Interfaces",
            description: "Reboturn provides intuitive interfaces for customers, local businesses, and couriers, ranging from advanced shopping experiences to efficient stock management systems.",
            left: "4rem"
        },
        {
            src: "/logistic.webp",
            y: fourthCardY,
            title: "Reboturn’s Logistic Innovation",
            description: "The core of Reboturn's e-commerce strategy is its advanced logistic hub network. These hubs are key to managing inventory and facilitating efficient deliveries, integrating real-time stock synchronization and using eco-friendly, high-capacity bicycles.",
            left: "1.5rem"
        }
    ], [firstCardY, secondCardY, thirdCardY, fourthCardY,]);

    return (
        <section ref={targetRef} className={"w-[90%] mx-auto my-5 h-[400vh]"}>
            <div className={"sticky top-20 h-screen "}>
                <div
                    className="w-full mx-auto p-2.5 leading-relaxed">
                    <h1 className="text-2xl font-bold text-black mb-2.5">
                        Reboturn’s Innovative Edge</h1>
                    <p className="text-base text-justify font-normal text-gray-600 my-2.5 ">
                        Explore the essence of Reboturn’s innovation, where every breakthrough paves the way for towards
                        eco-conscious e-commerce. Positioned to revolutionize eco-conscious e-commerce, Reboturn
                        seamlessly integrates advanced solutions with environmental responsibility, reshaping the future
                        of online shopping.
                    </p>
                </div>
                <div className={"w-full mt-1 text-black relative"}>
                    {cards.map((card, index) => (
                        <CardMobile key={index} {...card} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhatWeDoMobile;
