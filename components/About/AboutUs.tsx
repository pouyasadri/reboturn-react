// components/About/AboutUs.tsx
import {FC, memo} from 'react';
import dynamic from "next/dynamic";

const HighlightedText = dynamic(() => import('@/components/About/HighlightedText'));
const ContactButton = dynamic(() => import('@/components/About/ContactButton'));
const AboutUs: FC = memo(function AboutUs() {
    return (
        <section className="max-sm:my-4 lg:h-screen flex justify-center items-center">
            <div className="w-[90%] mx-auto shadow-2xl bg-white rounded-2xl max-sm:p-5 p-10">
                <div className="text-black text-xl md:text-2xl lg:text-3xl leading-relaxed">
                    <div>
                        Reboturn stands out as a <HighlightedText>groundbreaking</HighlightedText> innovation in the
                        e-commerce landscape.
                    </div>
                    Our business model
                    ingeniously merges <HighlightedText>economic</HighlightedText> benefits
                    with <HighlightedText>ecological</HighlightedText> initiatives, aiming to generate profit while
                    reinforcing the market&apos;s ecological aspect.
                    <div>
                    </div>
                    <div>By fostering <HighlightedText>entrepreneurial</HighlightedText> spirit and creating
                        meaningful <HighlightedText>employment</HighlightedText> opportunities, Reboturn is more than an
                        e-commerce platform; it is a
                        <HighlightedText>future-forward</HighlightedText> model for sustainable urban living, blending
                        efficiency, community engagement, and
                        environmental respect.
                    </div>
                </div>
                <ContactButton/>
            </div>
        </section>
    );
});

export default AboutUs;
