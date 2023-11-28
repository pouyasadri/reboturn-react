import {FC, memo} from 'react';
import Image from 'next/image';
import ContentSection from "@/components/Works/ContentSection";

interface ServiceCardProps {
    image: string;
    title: string;
    text: string;
}

const ServiceCard: FC<ServiceCardProps> = memo(function ServiceCard({image, title, text}) {
    return (
        <div className={"my-10"}>
            <div
                className="relative mx-auto h-[50vh] w-[85vw] overflow-hidden bg-neutral-200 rounded-xl shadow-3xl"
                style={{
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                }}
            >
                <Image
                    src={image}
                    layout="fill"
                    alt={`${title}-image`}
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110 rounded-xl"
                />
            </div>
            <div className="my-5">
                <h2 className="text-2xl text-black w-[70vw] mx-auto font-semibold">{title}</h2>
            </div>
            <ContentSection text={text}/>
        </div>
    );
});

export default ServiceCard;
