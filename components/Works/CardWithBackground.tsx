import {FC, memo} from "react";
import {Parallax, ParallaxBanner} from "react-scroll-parallax";

interface CardWithBackgroundProps {
    image: string;
}

const CardWithBackground: FC<CardWithBackgroundProps> = memo(function CardWithBackground({image}) {
    return (
        <Parallax speed={-8}>
            <div className="relative h-[30rem] w-[40rem] rounded-xl"
                 style={{
                     clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                 }}
            >
                <ParallaxBanner
                    layers={[{image: image, speed: -3}]}
                    className="aspect-[4/3] rounded-xl"
                />
            </div>
        </Parallax>
    );
});
export default CardWithBackground;
