import  { FC, useState, useEffect, useMemo,memo } from 'react';
import { Text, Html } from '@react-three/drei';
import { debounce } from 'lodash';

const calculateCaptionFontSize = (): [number, string] => {
    if (window.innerWidth >= 1024) {
        return [2, '8rem'];
    } else if (window.innerWidth < 1024 && window.innerWidth >= 600) {
        return [1.2, '4.8rem'];
    } else {
        return [1, '2rem'];
    }
};

interface CaptionProps {
    position: [number, number, number];
}

const Caption: FC<CaptionProps> = memo(function Caption(props) {
    const [fontSize, setFontSize] = useState(calculateCaptionFontSize);
    const updateFontSize = useMemo(() => debounce(() => setFontSize(calculateCaptionFontSize()), 300), []);

    useEffect(() => {
        window.addEventListener('resize', updateFontSize);
        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, [updateFontSize]);

    return (
        <Text fontSize={fontSize[0]} letterSpacing={-0.05} color="gray" {...props}>
            The New Generation of E-commerce
            <Html style={{ color: "transparent", fontSize: fontSize[1] }} transform>
                The New Generation of E-commerce
            </Html>
        </Text>
    );
});

export default Caption;
