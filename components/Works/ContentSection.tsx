import {FC, memo} from "react";

interface ContentSectionProps {
    text: string;
}

const ContentSection: FC<ContentSectionProps> = memo(function ContentSection({text}) {
    return (
        <div className="lg:mt-2.5 text-black text-bases lg:text-xl max-sm:w-[70vw] max-sm:mx-auto">
            <p>{text}</p>
        </div>
    );
});
export default ContentSection;
