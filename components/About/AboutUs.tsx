import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

// Define constants for cleaner code and better performance
const ANIMATION_INITIAL = { x: '-100%' };
const ANIMATION_TRANSITION = { duration: 0.8, ease: "easeInOut", delay: 0.2 };
const ANIMATION_STYLE = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9ae1ef'
};
const SPAN_STYLE = { position: 'relative' };

// HighlightedText component for reusability and performance
const HighlightedText = ({ children }: { children: ReactNode }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <motion.span ref={ref} className="relative px-2 py-1 rounded-full font-semibold overflow-hidden inline-flex align-middle">
            <motion.div
                initial={ANIMATION_INITIAL}
                animate={{ x: inView ? '0%' : '-100%' }}
                transition={ANIMATION_TRANSITION}
                style={ANIMATION_STYLE}
            />
            <span style={SPAN_STYLE}>{children}</span>
        </motion.span>
    );
};

// Main AboutUs component
const AboutUs: React.FC = () => {
    const handleContactClick = () => {
        // Handle the click event, e.g., navigate to the contact page
    };

    return (
        <section className="my-10">
            <div className="w-[90%] mx-auto shadow-2xl bg-white rounded-2xl p-10">
                <div className="text-black font-medium text-3xl leading-relaxed">
                    <div>At Reboturn, we&apos;re changing the game in <HighlightedText>fashion</HighlightedText>.</div>
                    <div>Experience style, simplicity, and sustainability like <HighlightedText>never</HighlightedText> before.</div>
                    <div>Join us in shaping the future of <HighlightedText>shopping</HighlightedText> – where every
                        click is a step toward a more <HighlightedText>extraordinary</HighlightedText> you.
                    </div>
                </div>
                <button onClick={handleContactClick}
                        className="w-[15%] mt-5 font-medium shadow-gray-500 text-xl rounded-full text-center bg-black text-white p-5">
                    Contact us
                </button>
            </div>
        </section>
    );
}

export default AboutUs;
