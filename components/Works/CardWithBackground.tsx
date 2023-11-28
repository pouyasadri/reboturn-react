import {FC, memo} from "react";
import {Parallax, ParallaxBanner} from "react-scroll-parallax";

interface CardWithBackgroundProps {
    image: string;
}

const CardWithBackground: FC<CardWithBackgroundProps> = memo(function CardWithBackground({image}) {
    return (
        <Parallax speed={-8} className={"overflow-x-hidden"}>
            <div className="relative m-2 h-[30rem] w-[40rem] bg-neutral-200 rounded-xl shadow-3xl"
                 style={{
                     clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                 }}
            >
                <ParallaxBanner
                    layers={[{image: image, speed: -8,scale:[1,1]}]}
                    className="aspect-[4/3] rounded-xl"
                />
            </div>
        </Parallax>
    );
});
export default CardWithBackground;
