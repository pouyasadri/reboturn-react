import {FC, memo} from 'react';
import dynamic from "next/dynamic";

const LargeScreenSection = dynamic(() => import('@/components/Works/LargeScreenSection'));
const SmallScreenSection = dynamic(() => import('@/components/Works/SmallScreenSection'));

const HorizontalScrollCarousel: FC = memo(function HorizontalScrollCarousel() {
    return (
        <>
            <LargeScreenSection/>
            <SmallScreenSection/>
        </>
    )
});

export default HorizontalScrollCarousel;
