import {FC, Suspense} from "react";
import {motion} from "framer-motion";
import Image from "next/image";

interface CardProps {
    src: string;
    y: any;
    title: string;
    description: string;
    left?: string;
}

const CardMobile: FC<CardProps> = ({src, y, title, description, left = "0"}) => {
    return (
        <motion.div style={{y, left}} className={"absolute  h-30"}>
            <div className={"w-[18rem] h-[21rem] "}
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
                    <div
                        className={"mt-2 px-5 text-justify w-[82%] text-xs font-light"}>{description}</div>
                    <div
                        className={"w-[28.5rem] absolute border-b-[1px] border-black font-semibold text-base top-[12rem]"}
                        style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                    <span
                        className={"absolute  text-center ml-28 -top-[2.5rem]"}>{title}</span>
                    </div>
                </div>

            </div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Image src={src} alt={title}
                           className={"top-[9.6rem] rounded-3xl absolute z-20 left-[0.5rem] w-[13.5rem] shadow-2xl shadow-black object-cover h-[14rem]"}
                           width={500} height={500}/>
                </Suspense>
            </div>
        </motion.div>
    );
}
export default CardMobile;
