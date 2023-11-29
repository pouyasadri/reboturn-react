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
        <div className={"my-16"}>
            <div
                className="relative mx-auto h-[50vh] w-[25rem]"
                style={{
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                }}
            >
                <Image
                    src={image}
                    fill={true}
                    alt={`${title}-image`}
                    className="object-cover"
                />
            </div>
            <div className="my-5">
                <h2 className="text-2xl text-black w-[20rem] mx-auto font-semibold leading-relaxed">{title}</h2>
            </div>
            <ContentSection text={text}/>
        </div>
    );
});

export default ServiceCard;
