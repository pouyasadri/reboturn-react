import {FC, memo} from "react";
import CardWithBackground from "@/components/Works/CardWithBackground";
import ContentSection from "@/components/Works/ContentSection";
import {Parallax} from "react-scroll-parallax";

interface ServiceSectionProps {
    image: string;
    title: string;
    text: string;
}

const ServiceSection: FC<ServiceSectionProps> = memo(function ServiceSection({image, title, text}) {
    return (
        <div className="flex justify-between mx-20 items-center mt-10 mb-60">
            <CardWithBackground image={image}/>
            <div className="w-1/3">
                <Parallax speed={12}>
                    <div className="">
                        <h2 className="text-4xl font-bold leading-relaxed">{title}</h2>
                    </div>
                    <ContentSection text={text}/>
                </Parallax>
            </div>

        </div>
    );
});
export default ServiceSection;
