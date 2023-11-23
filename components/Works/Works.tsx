import React, {FC} from 'react';
import {Parallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';

interface CardWithBackgroundProps {
    image: string;
}

const CardWithBackground: FC<CardWithBackgroundProps> = ({image}) => (
    <Parallax speed={-25}>
        <div className="relative m-2 h-[30rem] w-[50rem] bg-neutral-200 skew-x-1 -skew-y-1 rounded-xl shadow-3xl"
             style={{
                 clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
             }}
        >
            <ParallaxBanner
                layers={[{image: image, speed: -10}]}
                className="h-[30rem] w-[50rem]"
            />
        </div>
    </Parallax>
);


const TagSection: FC = () => (
    <div className="flex gap-2">
        <span className="p-3 bg-[#9ae1ef] rounded-full text-sm">tag1</span>
        <span className="p-3 bg-[#9ae1ef] rounded-full text-sm">tag2</span>
    </div>
);

interface ContentSectionProps {
    text: string;
}

const ContentSection: FC<ContentSectionProps> = ({text}) => (
    <div className="mt-2.5 text-lg">
        <p>{text}</p>
    </div>
);

const HorizontalScrollCarousel: FC = () => (

    <section className={"my-[10rem]"}>
        <ParallaxProvider>
            <div className="text-black top-0">
                <div className="flex justify-evenly items-center h-screen mb-[10rem]">
                    <CardWithBackground image={"Service1.png"}/>
                    <Parallax speed={20} className="w-1/3">
                        <TagSection/>
                        <div className="mt-5">
                            <h2 className="text-4xl font-semibold">Seamless Online Shopping Experience</h2>
                        </div>
                        <ContentSection
                            text={" Reboturn provides an effortless online shopping experience, connecting customers to a wide range of products from local and major brands. The platform features an intuitive interface and AI assistance, making shopping and returns simple and convenient. "}/>
                    </Parallax>
                </div>
                <div className="flex justify-evenly items-center h-screen mb-[10rem]">
                    <CardWithBackground image={"Service2.png"}/>
                    <div className="w-1/3">
                        <TagSection/>
                        <div className="mt-5">
                            <h2 className="text-4xl font-semibold">Flexible Delivery Scheduling</h2>
                        </div>
                        <ContentSection
                            text={"Enjoy the convenience of scheduling your deliveries at times that suit you best. Reboturn’s flexible delivery options, including eco-friendly bike couriers, ensure that your purchases arrive when it is most convenient for you, enhancing your overall shopping experience. "}/>
                    </div>
                </div>
                <div className="flex justify-evenly items-center h-screen mb-[10rem]">
                    <CardWithBackground image={"Service3.png"}/>
                    <div className="w-1/3">
                        <TagSection/>
                        <div className="mt-5">
                            <h2 className="text-4xl font-semibold">Hassle-Free Return Policy</h2>
                        </div>
                        <ContentSection
                            text={"Our hassle-free return policy simplifies your shopping experience. With easy online return arrangements and convenient pickup by our couriers, returning products is as effortless as buying them. "}/>
                    </div>
                </div>
                <div className="flex justify-evenly items-center h-screen mb-[10rem]">
                    <CardWithBackground image={"Service4.png"}/>
                    <div className="w-1/3">
                        <TagSection/>
                        <div className="mt-5">
                            <h2 className="text-4xl font-semibold">Eco-Friendly Delivery and Returns</h2>
                        </div>
                        <ContentSection
                            text={"Commitment to sustainability is at our core. Reboturn's eco-friendly and efficient delivery and return services utilize bicycle couriers and focus on providing you with the nearest products to reduce environmental impact, offering a guilt-free and convenient shopping experience. "}/>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    </section>

);

export default HorizontalScrollCarousel;
