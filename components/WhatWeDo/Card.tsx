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
            <div
                className={"lg:w-[22rem] lg:h-[30rem] 2xl:w-[33rem] 2xl:h-[40rem] w-[70vw] h-[50vh]"}
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
                        className={"lg:mt-5 mt-3 lg:px-5 px-3 leading-relaxed lg:w-[82%] w-[80%] text-sm font-medium"}>{description}</div>
                    <div
                        className={"lg:w-[35rem] w-[111vw] top-[55vw] absolute border-b-[1px] border-black font-semibold lg:text-2xl text-lg lg:top-[16vw]"}
                        style={{transform: 'rotate(90deg) translateY(-100%)'}}>
                    <span
                        className={"absolute ml-[30vw] lg:ml-[10vw] -top-[10vw] lg:-top-[3vw]"}>{title}</span>
                    </div>

                </div>

            </div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Image src={src} alt={""}
                           className={"top-[28vh] rounded-3xl absolute z-20 lg:left-[0.75vw] lg:w-[18.5vw] max-sm:w-[55vw] max-sm:h-[30vh] shadow-2xl shadow-black object-cover lg:h-[38vh]"}
                           width={500} height={500}/>
                </Suspense>
            </div>
        </motion.div>
    );
});
export default Card;
