// components/CameraRig.tsx
"use client"
import React, { useRef, ReactNode } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { state } from '@/components/HeroSection/store';
import { Group } from 'three';

interface CameraRigProps {
    children: ReactNode;
}

const CameraRig: React.FC<CameraRigProps> = ({ children }) => {
    const group = useRef<Group>();
    const snap = useSnapshot(state);

    useFrame((state: ThreeEvent<MouseEvent>, delta: number) => {
        if (group.current) {
            easing.damp3(state.camera.position, [0, 8.8, 0], 0.4, delta);
            easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 10, 0], 0.4, delta);
        }
    });

    return <group ref={group}>{children}</group>;
};

export default CameraRig;
