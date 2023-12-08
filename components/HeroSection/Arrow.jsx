// Arrow component with 3D model
import {memo, useEffect, useMemo, useState} from "react";
import {MeshTransmissionMaterial, useGLTF,useTexture} from "@react-three/drei";
import {debounce} from "lodash";
const ARROW_MODEL_PATH = "/arrow.glb";
const TEXTURE_PATH = 'texture.png';

const Arrow = memo(function Arrow() {
    const {nodes} = useGLTF(ARROW_MODEL_PATH);
    const texture = useTexture(TEXTURE_PATH);
    const [scale, setScale] = useState(getScale);
    const updateScale = useMemo(() => debounce(() => setScale(getScale()), 300), []);

    useEffect(() => {
        window.addEventListener('resize', updateScale);
        return () => {
            window.removeEventListener('resize', updateScale);
        };
    }, [updateScale]);

    return (
        <mesh receiveShadow={true} castShadow={true} rotation={[Math.PI / 2, 0, 0]} scale={scale}
              geometry={nodes.Arrow.geometry}>
            <MeshTransmissionMaterial distortionScale={0} temporalDistortion={0} map={texture} ior={1.2} thickness={1.5} anisotropy={0.1}
                                      chromaticAberration={0.35}/>
        </mesh>
    );
});
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
useGLTF.preload(ARROW_MODEL_PATH);
export default Arrow;
