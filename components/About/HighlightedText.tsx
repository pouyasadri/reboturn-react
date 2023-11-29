// components/About/HighlightedText.tsx
import { FC, memo, ReactNode, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HighlightedTextProps {
    children: ReactNode;
}

const HighlightedText: FC<HighlightedTextProps> = memo(({ children }) => {
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            if (inView) {
                ref.current.style.willChange = 'transform';
            } else {
                ref.current.style.willChange = 'auto';
            }
        }
    }, [inView]);

    return (
        <motion.span ref={el => {
            inViewRef(el);
            ref.current = el;
        }}
                     className="relative max-md:px-1.5 max-sm:px-1 px-2 max-sm:py-0.5 py-1 rounded-full font-semibold overflow-hidden inline-flex align-middle">
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: inView ? '0%' : '-100%' }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#9ae1ef'
                }}
            />
            <span style={{ position: 'relative' }}>{children}</span>
        </motion.span>
    );
});

export default HighlightedText;
