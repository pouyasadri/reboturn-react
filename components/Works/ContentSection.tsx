import {FC, memo} from "react";
interface ContentSectionProps {
    text: string;
}

const ContentSection: FC<ContentSectionProps> = memo(function ContentSection({text}) {
    return (

        <div className="lg:mt-2.5 leading-relaxed text-gray-700 lg:text-xl max-sm:w-[20rem] text-lg max-sm:mx-auto">
            <p>{text}</p>
        </div>
    );
});
export default ContentSection;
