import {Canvas} from '@react-three/fiber';
import {
    ContactShadows,
    Center,
} from "@react-three/drei"
import {memo} from 'react';
import Arrow from "@/components/HeroSection/Arrow";
import Title from "@/components/HeroSection/Title";
import Caption from "@/components/HeroSection/Caption";
import Rig from "@/components/HeroSection/Rig";

// Define constants for cleaner code and better performance

const BACKGROUND_COLOR = "#F2F2F2";
const CAMERA_POSITION: [number, number, number] = [0, 10, 0];
const SPOTLIGHT_POSITION: [number, number, number] = [20, 20, 10];
const TITLE_POSITION: [number, number, number] = [-1, 0, -10];
const CAPTION_POSITION: [number, number, number] = [-1, -4, -10];
const SHADOWS_POSITION: [number, number, number] = [0, -7.5, 0];
// Main HeroSection component
const HeroSection = memo(function HeroSection() {
    return (
        <Canvas shadows camera={{position: CAMERA_POSITION, fov: 50}}>
            <color attach="background" args={[BACKGROUND_COLOR]}/>
            <spotLight position={SPOTLIGHT_POSITION} penumbra={1} castShadow={true} angle={0.2}/>
            <Title position={TITLE_POSITION}/>
            <Caption position={CAPTION_POSITION}/>
            <Center>
                <Arrow/>
            </Center>
            <ContactShadows scale={100} position={SHADOWS_POSITION} blur={1} far={80} opacity={0.8}/>
            <Rig/>
        </Canvas>
    );
});
export default HeroSection;
