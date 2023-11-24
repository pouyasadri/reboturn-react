import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import * as THREE from "three"
import {debounce} from 'lodash';
import {
    useGLTF,
    Float,
    Text,
    Html,
    ContactShadows,
    Environment,
    MeshTransmissionMaterial,
    Center,
    Lightformer
} from "@react-three/drei"
import {EffectComposer, N8AO, TiltShift2} from "@react-three/postprocessing"
import {easing} from "maath"
import {memo, useCallback, useEffect, useState} from 'react';

// Define constants for cleaner code and better performance
const CAMERA_POSITION = [0, 10, 0];
const BACKGROUND_COLOR = "#c0c0c0";
const SPOTLIGHT_POSITION = [20, 20, 10];
const STATUS_POSITION = [-1, 0, -10];
const CAPTION_POSITION = [-1, -4, -10];
const SHADOWS_POSITION = [0, -7.5, 0];
const LIGHTFORMER_POSITION = [10, 5, 0];
const LIGHTFORMER_SCALE = [10, 50, 1];
const ARROW_MODEL_PATH = "/arrow.glb";
const TEXTURE_PATH = 'texture3.png';

// Main HeroSection component
const HeroSection = memo(function HeroSection() {
    return (
        <Canvas shadows camera={{position: CAMERA_POSITION, fov: 50}}>
            <color attach="background" args={[BACKGROUND_COLOR]}/>
            <spotLight position={SPOTLIGHT_POSITION} penumbra={1} castShadow angle={0.2}/>
            <Status position={STATUS_POSITION}/>
            <Caption position={CAPTION_POSITION}/>
            <Float floatIntensity={1.5}>
                <Center>
                    <Arrow/>
                </Center>
            </Float>
            <ContactShadows scale={100} position={SHADOWS_POSITION} blur={1} far={80} opacity={0.8}/>
            <Environment preset="city">
                <Lightformer intensity={20} position={LIGHTFORMER_POSITION} scale={LIGHTFORMER_SCALE}
                             onUpdate={(self) => self.lookAt(0, 0, 0)}/>
            </Environment>
            <EffectComposer disableNormalPass>
                <N8AO aoRadius={1} intensity={1}/>
                <TiltShift2 blur={0.2}/>
            </EffectComposer>
            <Rig/>
        </Canvas>
    );
});

// Rig component for camera movement
const Rig = memo(function Rig() {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10],
            1.6,
            delta,
        )
        state.camera.lookAt(0, 0, 0)
    })
});

// Arrow component with 3D model
const Arrow = memo(function Arrow() {
    const {nodes} = useGLTF(ARROW_MODEL_PATH);
    const texture = useLoader(THREE.TextureLoader, TEXTURE_PATH);
    const [scale, setScale] = useState(getScale);

    const handleResize = useCallback(debounce(() => {
        setScale(getScale());
    }, 300), []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <mesh receiveShadow castShadow rotation={[Math.PI / 2, 0, 0]} scale={scale}
              geometry={nodes.Arrow.geometry}>
            <MeshTransmissionMaterial map={texture} ior={1.2} thickness={1.5} anisotropy={0.1}
                                      chromaticAberration={0.35}/>
        </mesh>
    );
});
const getTitleFontSize = () => {
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

// Status component for displaying status text
function Status(props) {
    const [fontSize, setFontSize] = useState(getTitleFontSize);
    const handleResize = useCallback(debounce(() => {
        setFontSize(getTitleFontSize());
    }, 300), []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <Text fontSize={fontSize[0]} letterSpacing={-0.025} color="black" {...props}>
            ReboTurn
            <Html style={{color: "transparent", fontSize: fontSize[1]}} transform>
                ReboTurn
            </Html>
        </Text>
    )
}

// Caption component for displaying caption text
const getCaptionFontSize = () => {
    if (window.innerWidth >= 1024) {
        return [2, '8rem'];
    } else if (window.innerWidth < 1024 && window.innerWidth >= 600) {
        return [1.2, '4.8rem'];
    } else if (window.innerWidth < 600) {
        return [1, '2rem'];
    } else {
        return [1, '2rem'];
    }
};

function Caption(props) {
    const [fontSize, setFontSize] = useState(getCaptionFontSize);

    const handleResize = useCallback(debounce(() => {
        setFontSize(getCaptionFontSize());
    }, 300), []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (

        <Text fontSize={fontSize[0]} letterSpacing={-0.05} color="gray" {...props}>
            The New Generation of E-commerce
            <Html style={{color: "transparent", fontSize: fontSize[1]}} transform>
                The New Generation of E-commerce
            </Html>
        </Text>
    )
}

const getScale = () => {
    if (window.innerWidth >= 1024) {
        return 4;
    } else if (window.innerWidth < 1024 && window.innerWidth >= 600) {
        return 3.5;
    } else if (window.innerWidth < 600) {
        return 2.5;
    } else {
        return 1;
    }
};
useGLTF.preload(ARROW_MODEL_PATH)
export default HeroSection;
