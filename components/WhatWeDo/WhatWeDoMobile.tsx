import {FC, useMemo, useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import CardMobile from "@/components/WhatWeDo/CardMobile";

const WhatWeDoMobile: FC = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});

    const textY = useTransform(scrollYProgress, [0, 0.2], ["0", "-20rem"]);

    return (
        <section ref={targetRef} className={"w-[90%] mx-auto my-5 h-[400vh]"}>
            <div className={"sticky top-0 h-screen "}>
                <motion.div style={{y: textY}}
                            className="w-full mx-auto p-2.5 leading-relaxed">
                    <h1 className="text-2xl font-bold text-black mb-2.5">
                        Behind the scene of Reboturn</h1>
                    <p className="text-base text-justify font-light text-gray-600 my-2.5 ">
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
                <div className={" grid place-items-center"}>
                    <CardMobile src={"/AI.webp"} x={0} y={0} title={"HI"} description={"hello"}/>
                    <CardMobile src={"/AI.webp"} x={0} y={0} title={"HI"} description={"hello"} left={"3rem"}/>

                </div>

            </div>
        </section>
    );
}

export default WhatWeDoMobile;
