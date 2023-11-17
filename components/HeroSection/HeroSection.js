// components/HeroSection.tsx
"use client"
import {Canvas, useFrame, useLoader, useThree} from '@react-three/fiber';
import * as THREE from "three"
import {
    useGLTF,
    Float,
    Lightformer,
    Text,
    Html,
    ContactShadows,
    Environment,
    MeshTransmissionMaterial, Center,
} from "@react-three/drei"
import {EffectComposer, N8AO, TiltShift2} from "@react-three/postprocessing"
import {easing} from "maath"
import {useEffect} from "react";

const HeroSection = () => {

    return (
        // <motion.div className="relative h-screen flex items-center justify-center">
        //     <Image src="/heroBG.webp" alt="ReboTurn Logo" fill="cover" className="absolute z-0"/>
        //     <div className={"absolute z-5"}>
        //         <motion.div
        //             initial={{rotateX: -90}}
        //             animate={{rotateX: 0}}
        //             transition={{
        //                 type: 'easeIn',
        //                 stiffness: 400,
        //                 damping: 120,
        //                 duration: 1,
        //                 delay: 0.3,
        //             }}
        //             className="font-poppins text-center text-black text-9xl"
        //         >
        //             ReboTurn
        //         </motion.div>
        //         <motion.div
        //             initial={{rotateX: -90}}
        //             animate={{rotateX: 0}}
        //             transition={{
        //                 type: 'easeIn',
        //                 stiffness: 400,
        //                 damping: 120,
        //                 duration: 0.8,
        //                 delay: 1.1,
        //             }}
        //             className=" font-poppins text-gray-300 text-5xl"
        //         >
        //             The Second Generation of E-Commerce
        //         </motion.div>
        //     </div>
        <>
            {/*<Image src="/heroBG.webp" alt="ReboTurn Logo" fill="cover" className="absolute z-0"/>*/}
            <Canvas shadows
                    camera={{position: [0, 10, 0], fov: 50}}>
                {/*<Background/>*/}
                <color attach="background" args={["#c0c0c0"]}/>
                <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2}/>
                <Status position={[-1, 0, -10]}/>
                <Caption position={[-1, -4, -10]}/>
                <Float floatIntensity={2}>
                    <Center>
                        <Arrow/>
                    </Center>
                </Float>
                <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.85}/>
                <Environment preset="city">
                    <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]}
                                 onUpdate={(self) => self.lookAt(0, 0, 0)}/>
                </Environment>
                <EffectComposer disableNormalPass>
                    <N8AO aoRadius={1} intensity={1}/>
                    <TiltShift2 blur={0.2}/>
                </EffectComposer>
                <Rig/>
            </Canvas>
        </>
        // </motion.div>
    );
};

function Background() {
    const { scene } = useThree();
    const texture = useLoader(THREE.TextureLoader, 'heroBG.webp'); // Replace with your image path

    useEffect(() => {
        scene.background = texture;
    }, [scene, texture]);

    return null;
}

function Rig() {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10],
            1.6,
            delta,
        )
        state.camera.lookAt(0, 0, 0)
    })
}

function Arrow(props) {
    const {nodes} = useGLTF("/arrow.glb")
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('texture3.png');
    return (
        <mesh receiveShadow castShadow rotation={[Math.PI / 2, 0, 0]} scale={4}
              geometry={nodes.Arrow.geometry} {...props}>
            <MeshTransmissionMaterial map={texture} ior={1.2} thickness={1.5} anisotropy={0.1}
                                      chromaticAberration={0.35}/>
        </mesh>
    )
}

function Status(props) {
    return (
        <Text fontSize={8} letterSpacing={-0.025} color="black" {...props}>
            ReboTurn
            <Html style={{color: "transparent", fontSize: "13.5em"}} transform>
                ReboTurn
            </Html>
        </Text>
    )
}

function Caption(props) {
    return (
        <Text fontSize={2} letterSpacing={-0.05} color="gray" {...props}>
            The New Generation of E-commerce
            <Html style={{color: "transparent", fontSize: "8rem"}} transform>
                The New Generation of E-commerce
            </Html>
        </Text>
    )
}

export default HeroSection;
