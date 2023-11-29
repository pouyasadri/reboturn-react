// components/About/AboutUs.tsx
import {FC, memo} from 'react';
import dynamic from "next/dynamic";

const HighlightedText = dynamic(() => import('@/components/About/HighlightedText'));
const ContactButton = dynamic(() => import('@/components/About/ContactButton'));
const AboutUs: FC = memo(function AboutUs() {
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
                    <ContactButton/>
                </div>
            </section>
    );
});

export default AboutUs;
