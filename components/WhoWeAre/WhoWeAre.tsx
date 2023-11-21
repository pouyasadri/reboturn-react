import React, { FC } from 'react';
import Image from "next/image";

interface MemberProps {
    name: string;
    role: string;
}

const Member: FC<MemberProps> = ({ name, role }) => (
    <div className={"flex justify-between items-center border-b-[1px] border-black"}>
        <div className={"flex justify-center items-center "}>
            <div className={"p-10"}>
                <Image className={"rounded-3xl"} src={"/texture1.png"} alt={"texture1"} width={220} height={200}/>
            </div>
            <div className={"text-left p-10"}>
                <h2 className={"text-3xl mb-5 font-semibold"}>{name}</h2>
                <span className={"mt-5 bg-[#9ae1ef] rounded-full px-3 py-1 text-xl text-center"}>{role}</span>
            </div>
        </div>
        <div className={"text-left w-1/3"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloribus facere ipsam ipsum iusto
                modi obcaecati quasi repellat repudiandae. Eius!
            </p>
            <button className="text-black text-md mt-5 relative w-20 h-10 overflow-hidden border border-black bg-transparent px-3 text-black rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-200 hover:text-white hover:before:left-0 hover:before:w-full"><span className="relative z-10">Read it</span></button>
        </div>
    </div>
);

const WhoWeAre: FC = () => (
    <div className={"w-[90%] mx-auto mt-20 text-black"}>
        <Member name="SINA GANJI" role="CEO" />
        <Member name="SEYEDPOUYA SADRIFARD" role="CTO" />
        <Member name="DANIAL POURARAB" role="ALGORITHM ENGINEER" />
    </div>
);

export default WhoWeAre;
