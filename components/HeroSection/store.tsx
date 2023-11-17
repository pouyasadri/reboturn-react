// state.ts
import { proxy } from 'valtio'

interface State {
    intro: boolean;
    colors: string[];
    decals: string[];
    color: string;
    decal: string;
}

const state = proxy<State>({
    intro: true,
    colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
    decals: ['react', 'three2', 'pmndrs'],
    color: '#EFBD4E',
    decal: 'three2'
})

export { state }
