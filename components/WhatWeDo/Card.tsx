import {FC, memo, Suspense} from "react";
import {motion} from "framer-motion";
import Image from "next/image";

interface CardProps {
    src: string;
    x: any;
    y: any;
    title: string;
    description: string;
    left?: string;
}

const Card: FC<CardProps> = memo(function Card({src, x, y, title, description, left = "0"}) {
    return (
        <motion.div style={{x, y, left}} className={"relative h-30"}>
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
                    <div className={"mt-5 px-5 leading-relaxed w-[82%] text-sm font-medium"}>{description}</div>
                    <div
                        className={"w-[35rem] absolute border-b-[1px] border-black font-semibold text-2xl top-[16vw]"}
                        style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                    <span
                        className={"absolute  ml-[10vw] -top-[3vw]"}>{title}</span>
                    </div>

                </div>

            </div>
            <div className={""}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Image src={src} alt={""}
                           className={"top-[28vh] rounded-3xl absolute z-20 left-[0.75vw] w-[18.5vw] shadow-2xl shadow-black object-cover h-[38vh]"}
                           width={500} height={500}/>
                </Suspense>
            </div>
        </motion.div>
    );
});
export default Card;
