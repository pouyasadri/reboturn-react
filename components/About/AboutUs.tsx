// components/About/AboutUs.tsx
import {FC, useCallback, memo} from 'react';
import HighlightedText from './HighlightedText';

const AboutUs: FC = memo(function AboutUs() {
    const handleContactClick = useCallback(() => {
        // Handle the click event, e.g., navigate to the contact page
    }, []);

    return (
            <section className="max-sm:my-4 lg:h-screen mb-10 flex justify-center items-center">
                <div className="w-[90%] mx-auto shadow-2xl bg-white rounded-2xl max-sm:p-5 p-10">
                    <div className="text-black font-medium max-sm:text-xl max-md:text-2xl text-3xl leading-relaxed">
                        <div>At Reboturn, we&apos;re changing the game in <HighlightedText>fashion</HighlightedText>.
                        </div>
                        <div>Experience style, simplicity, and sustainability
                            like <HighlightedText>never</HighlightedText> before.
                        </div>
                        <div>Join us in shaping the future of <HighlightedText>shopping</HighlightedText> – where every
                            click is a step toward a more <HighlightedText>extraordinary</HighlightedText> you.
                        </div>
                    </div>
                    <button onClick={handleContactClick}
                            className="w-30 max-xm:mt-2 mt-5 font-medium shadow-gray-500 max-sm:text-base text-xl rounded-full text-center bg-black text-white max-sm:p-2.5 p-5">
                        Contact us
                    </button>
                </div>
            </section>
    );
});

export default AboutUs;
