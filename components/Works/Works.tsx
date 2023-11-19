import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
type Card = {
    url: string;
    title: string;
    id: number;
};
const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["30%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] mt-[15rem] -skew-y-12 transform-gpu">
            <div className="sticky top-0 flex h-screen items-center">
                <motion.div style={{ x }} className="flex gap-20">
                    {cards.map((card) => (
                        <Card card={card} key={card.id} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: Card }) => {
    return (
        <div key={card.id}>
            <div
                className="relative h-[25rem] w-[45rem] overflow-hidden bg-neutral-200 rounded-xl shadow-3xl"
                style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
            >
                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-xl"
                ></div>
            </div>
            <div className={"ml-[8rem] mt-[2rem]"}>
                <div className={"flex gap-4"}>
                    <span className={"p-2 font-xl bg-[#9ae1ef] text-black rounded-xl"}>tag1</span>
                    <span className={"p-2 font-xl bg-[#9ae1ef] text-black rounded-xl"}>tag2</span>
                    <span className={"p-2 font-xl bg-[#9ae1ef] text-black rounded-xl"}>tag3</span>
                </div>
                <p className="p-4 text-3xl font-semibold uppercase text-black">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

const cards: Card[] = [
    {
        url: "texture.png",
        title: "Title 1",
        id: 1,
    },
    {
        url: "texture1.png",
        title: "Title 2",
        id: 2,
    },
    {
        url: "texture3.png",
        title: "Title 3",
        id: 3,
    },
    {
        url: "texure2.png",
        title: "Title 4",
        id: 4,
    },
];

export default HorizontalScrollCarousel;
