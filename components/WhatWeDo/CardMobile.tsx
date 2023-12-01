import {FC} from "react";
import {motion} from "framer-motion";

interface CardProps {
    src: string;
    x: any;
    y: any;
    title: string;
    description: string;
    left?: string;
    top?: string;
}

const CardMobile: FC<CardProps> = ({src, x, y, title, description, left = "0", top = "0"}) => {
    return (
        <motion.div style={{y,left}} className={"absolute top-[40%] h-30"}>
            <div className={"w-[15rem] h-[20rem] "}
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
                </div>
            </div>
        </motion.div>
    );
}
export default CardMobile;
