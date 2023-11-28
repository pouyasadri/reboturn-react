import {FC, memo} from "react";
import CardWithBackground from "@/components/Works/CardWithBackground";
import ContentSection from "@/components/Works/ContentSection";

interface ServiceSectionProps {
    image: string;
    title: string;
    text: string;
}
const ServiceSection: FC<ServiceSectionProps> = memo(function ServiceSection({ image, title, text })  {
    return (
        <div className="flex justify-evenly items-center h-screen">
            <CardWithBackground image={image} />
            <div className="w-1/3">
                <div className="mt-5">
                    <h2 className="text-4xl font-bold">{title}</h2>
                </div>
                <ContentSection text={text} />
            </div>
        </div>
    );
});
export default ServiceSection;
