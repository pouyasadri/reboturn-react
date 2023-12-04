import {FC, useState, useEffect, memo, useMemo} from 'react';
import {Text, Html} from '@react-three/drei';
import {debounce} from 'lodash';

const calculateFontSize = (): [number, string] => {
    if (window.innerWidth >= 1024) {
        return [8, '13.5rem'];
    } else if (window.innerWidth < 1024 && window.innerWidth >= 600) {
        return [4.5, '10rem'];
    } else if (window.innerWidth < 600) {
        return [3.5, '8rem'];
    } else {
        return [1, '2rem'];
    }
};

interface TitleProps {
    position: [number, number, number];
}

const Title: FC<TitleProps> = memo(function Title(props) {
    const [fontSize, setFontSize] = useState(calculateFontSize);
    const updateFontSize = useMemo(() => debounce(() => setFontSize(calculateFontSize()), 300), []);

    useEffect(() => {
        window.addEventListener('resize', updateFontSize);
        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, [updateFontSize]);

    return (
        <Text fontSize={fontSize[0]} letterSpacing={-0.025} color="black" {...props}>
            ReboTurn
            <Html style={{color: "transparent", fontSize: fontSize[1]}} transform>
                ReboTurn
            </Html>
        </Text>
    );
});

export default Title;
