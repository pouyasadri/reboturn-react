// components/WhoWeAre/WhoWeAre.tsx
import {FC, memo} from 'react';
import dynamic from 'next/dynamic';

const Member = dynamic(() => import('./Member'));

const WhoWeAre: FC = memo(function WhoWeAre() {
    return (
        <div className={"w-[90%] mx-auto h-screen lg:mt-20 mt-10 text-black"}>
            <Member name="SINA GANJI" role="CEO & Founder" image={"/Sina.jpg"}/>
            <Member name="SEYEDPOUYA SADRIFARD" role="CTO & Co-Founder" image={"/Pouya.jpeg"}/>
            <Member name="DANIAL POUR ARAB" role="CTO & Co-Founder" image={"/Danial.jpg"}/>
            <Member name="MITRA POURARAB" role="Graphic Designer" image={"/Mitra.jpg"}/>
        </div>
    );
});

export default WhoWeAre;
