import React, {FC, memo} from 'react';
import {Parallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';

interface CardWithBackgroundProps {
    image: string;
}

const CardWithBackground: FC<CardWithBackgroundProps> = memo(function CardWithBackground({image}) {
    return (
        <Parallax speed={-8} className={"overflow-x-hidden"}>
            <div className="relative m-2 h-[30rem] w-[50rem] bg-neutral-200 skew-x-1 -skew-y-1 rounded-xl shadow-3xl"
                 style={{
                     clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                 }}
            >
                <ParallaxBanner
                    layers={[{image: image, speed: -8,scale:[1.1,1.1]}]}
                    className="aspect-[5/3] "

                />
            </div>
        </Parallax>
    );
});


const TagSection: FC = memo(function TagSection() {
    return (
        <div className="flex gap-2">
            <span className="p-3 bg-[#9ae1ef] rounded-full text-sm">tag1</span>
            <span className="p-3 bg-[#9ae1ef] rounded-full text-sm">tag2</span>
        </div>
    );
});

interface ContentSectionProps {
    text: string;
}

const ContentSection: FC<ContentSectionProps> = memo(function ContentSection({text}) {
            return (
                <div className="lg:mt-2.5 text-black text-bases lg:text-xl max-sm:w-[70vw] max-sm:mx-auto">
                    <p>{text}</p>
                </div>
            );
        }
    )
;
const ServiceSection: FC<{ image: string, title: string, text: string }> = memo(function ServiceSection({image, title, text}) {

    return (
        <div className="flex justify-evenly items-center h-screen">
            <CardWithBackground image={image}/>
            <div className="w-1/3">
                <div className="mt-5">
                    <h2 className="text-4xl font-bold">{title}</h2>
                </div>
                <ContentSection text={text}/>
            </div>
        </div>
    );
});
const HorizontalScrollCarousel: FC = () => (
        <>
            <section className={"hidden lg:flex my-[10rem]"}>
                <ParallaxProvider>
                    <div className="text-black top-0">
                        <ServiceSection
                            image={"Service1.png"}
                            title={"Seamless Online Shopping Experience"}
                            text={" Reboturn provides an effortless online shopping experience, connecting customers to a wide range of products from local and major brands. The platform features an intuitive interface and AI assistance, making shopping and returns simple and convenient. "}
                        />
                        <ServiceSection
                            image={"Service2.png"}
                            title={"Flexible Delivery Scheduling"}
                            text={"Enjoy the convenience of scheduling your deliveries at times that suit you best. Reboturn’s flexible delivery options, including eco-friendly bike couriers, ensure that your purchases arrive when it is most convenient for you, enhancing your overall shopping experience. "}
                        />
                        <ServiceSection
                            image={"Service3.png"}
                            title={"Hassle-Free Return Policy"}
                            text={"Our hassle-free return policy simplifies your shopping experience. With easy online return arrangements and convenient pickup by our couriers, returning products is as effortless as buying them. "}
                        />
                        <ServiceSection
                            image={"Service4.png"}
                            title={"Eco-Friendly Delivery and Returns"}
                            text={"Commitment to sustainability is at our core. Reboturn's eco-friendly and efficient delivery and return services utilize bicycle couriers and focus on providing you with the nearest products to reduce environmental impact, offering a guilt-free and convenient shopping experience. "}
                        />
                    </div>
                </ParallaxProvider>
            </section>
            <section className={"lg:hidden overflow-x-hidden"}>
                <div className={"my-10"}>
                    <div
                        className="relative  mx-auto h-[50vh] w-[85vw] overflow-hidden bg-neutral-200  rounded-xl shadow-3xl"
                        style={{
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(Service1.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: -1
                            }}
                            className="transition-transform duration-300 group-hover:scale-110 rounded-xl"
                        ></div>

                    </div>
                    <div className="my-5">
                        <h2 className="text-2xl text-black w-[70vw] mx-auto font-semibold">Seamless Online Shopping
                            Experience</h2>
                    </div>
                    <ContentSection
                        text={" Reboturn provides an effortless online shopping experience, connecting customers to a wide range of products from local and major brands. The platform features an intuitive interface and AI assistance, making shopping and returns simple and convenient. "}/>
                </div>
                <div className={"my-10"}>
                    <div
                        className="relative  mx-auto h-[50vh] w-[85vw] overflow-hidden bg-neutral-200  rounded-xl shadow-3xl"
                        style={{
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(delivery.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: -1
                            }}
                            className="transition-transform duration-300 group-hover:scale-110 rounded-xl"
                        ></div>

                    </div>
                    <div className="my-5">
                        <h2 className="text-2xl text-black w-[70vw] mx-auto font-semibold">Flexible Delivery Scheduling</h2>
                    </div>
                    <ContentSection
                        text={"Enjoy the convenience of scheduling your deliveries at times that suit you best. Reboturn’s flexible delivery options, including eco-friendly bike couriers, ensure that your purchases arrive when it is most convenient for you, enhancing your overall shopping experience. "}/>
                </div>
                <div className={"my-10"}>
                    <div
                        className="relative mx-auto h-[50vh] w-[85vw] overflow-hidden bg-neutral-200  rounded-xl shadow-3xl"
                        style={{
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(Service3.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: -1
                            }}
                            className="transition-transform duration-300 group-hover:scale-110 rounded-xl"
                        ></div>

                    </div>
                    <div className="my-5">
                        <h2 className="text-2xl text-black w-[70vw] mx-auto font-semibold">Hassle-Free Return Policy</h2>
                    </div>
                    <ContentSection
                        text={"Commitment to sustainability is at our core. Reboturn's eco-friendly and efficient delivery and return services utilize bicycle couriers and focus on providing you with the nearest products to reduce environmental impact, offering a guilt-free and convenient shopping experience. "}/>
                </div>
                <div className={"my-10"}>
                    <div
                        className="relative mx-auto h-[50vh] w-[85vw] overflow-hidden bg-neutral-200  rounded-xl shadow-3xl"
                        style={{
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(eco-1.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: -1
                            }}
                            className="transition-transform duration-300 group-hover:scale-110 rounded-xl"
                        ></div>

                    </div>
                    <div className="my-5 mx-auto">
                        <h2 className="text-2xl text-black w-[70vw] mx-auto font-semibold">Eco-Friendly Delivery and
                            Returns</h2>
                    </div>
                    <ContentSection
                        text={"Commitment to sustainability is at our core. Reboturn's eco-friendly and efficient delivery and return services utilize bicycle couriers and focus on providing you with the nearest products to reduce environmental impact, offering a guilt-free and convenient shopping experience. "}/>
                </div>
            </section>
        </>
    )
;

export default HorizontalScrollCarousel;
