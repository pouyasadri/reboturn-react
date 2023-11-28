import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import React, {ReactNode, useCallback, ReactElement, memo, useEffect, useRef} from 'react';

// Define constants for cleaner code and better performance
const ANIMATION_INITIAL = {x: '-100%'};
const ANIMATION_TRANSITION = {duration: 0.8, ease: "easeIn", delay: 0.2};
const ANIMATION_STYLE = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9ae1ef'
};
const SPAN_STYLE = {position: 'relative'};

interface HighlightedTextProps {
    children: ReactNode;
}

interface WillChangeRef {
    current: HTMLElement | null;
}

const useWillChange = (inView: boolean, properties: string): WillChangeRef => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            if (inView) {
                ref.current.style.willChange = properties;
            } else {
                ref.current.style.willChange = 'auto';
            }
        }
    }, [inView, properties]);

    return ref;
};
// HighlightedText component for reusability and performance
const HighlightedText = memo(function HighlightedText({children}: HighlightedTextProps): ReactElement {
    const {ref: inViewRef, inView} = useInView({triggerOnce: true});
    const ref = useWillChange(inView, 'transform');

    return (
        <>
            <motion.span ref={el => {
                inViewRef(el);
                ref.current = el;
            }}
                         className="relative max-md:px-1.5 max-sm:px-1 px-2 max-sm:py-0.5 py-1 rounded-full font-semibold overflow-hidden inline-flex align-middle">
                <motion.div
                    initial={ANIMATION_INITIAL}
                    animate={{x: inView ? '0%' : '-100%'}}
                    transition={ANIMATION_TRANSITION}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: '#9ae1ef'
                    }}
                />
                <span style={{position: 'relative'}}>{children}</span>
            </motion.span>
        </>
    );
});

const AboutUs: React.FC = (): ReactElement => {
    const handleContactClick = useCallback(() => {
        // Handle the click event, e.g., navigate to the contact page
    }, []);

    return (
        <>
            <div className={"w-screen h-24 bg-gradient-to-b from-[#B4B4B4] to-[#F2F2F2]"}></div>
            <section className="max-sm:my-4 h-screen mb-10 flex justify-center items-center">
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
        </>
    );
}

export default AboutUs;
