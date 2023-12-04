import {memo} from "react";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

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

    return null; // Return null if there's no rendering to be done
});
export default Rig;
