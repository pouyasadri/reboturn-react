// components/Model.tsx
import React, {useEffect, useRef} from 'react';
import {MeshReflectorMaterial, MeshTransmissionMaterial, useFBO, useGLTF} from '@react-three/drei';
import {MeshStandardMaterial, Texture, Mesh} from 'three';
import {createPortal, useFrame, useThree} from "@react-three/fiber";
import {easing} from "maath";

interface ModelProps {
    envMap: Texture;
}

const Model: React.FC<ModelProps> = ({props, envMap}) => {
    const mesh = useRef();
    const {scene, nodes} = useGLTF('arrow.glb');
    console.log(nodes);
    // useEffect(() => {
    //     scene.traverse((node) => {
    //         if ((node as Mesh).isMesh) {
    //             const material = new MeshStandardMaterial({
    //
    //                 refractionRatio: 0.98,
    //                 reflectivity: 0.1,
    //             });
    //
    //             (node as Mesh).material = material;
    //             (node as Mesh).castShadow = true;
    //             (node as Mesh).receiveShadow = true;
    //             (node as Mesh).material.transparent = true;
    //             (node as Mesh).material.opacity = 0.3;
    //             (node as Mesh).scale.set(1, 1, 1);
    //             (node as Mesh).material.envMapIntensity = 1;
    //             (node as Mesh).material.needsUpdate = true;
    //         }
    //     });
    // }, [scene, envMap]);
    const ref = useRef()
    const buffer = useFBO()
    return (
        <mesh receiveShadow castShadow geometry={nodes.Arrow.geometry} {...props}>
            <MeshTransmissionMaterial backside backsideThickness={10} thickness={5} />
        </mesh>

    );
};

export default Model;
