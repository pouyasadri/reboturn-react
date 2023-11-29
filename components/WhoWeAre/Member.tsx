// components/WhoWeAre/Member.tsx
import { FC, memo } from 'react';
import Image from "next/image";

interface MemberProps {
    name: string;
    role: string;
    image: string;
}

const Member: FC<MemberProps> = memo(function Member({ name, role ,image})  {
    return (
    <div className={"lg:flex lg:justify-between items-center border-b-[1px] border-black p-2.5"}>
        <div className={"flex justify-start items-center "}>
            <div className={"lg:p-10 p-5"}>
                <Image className={"lg:rounded-3xl rounded-xl aspect-square object-cover lg:w-full lg:h-full w-20 h-20"} src={image} alt={`${name}-${role}-image`} width={150} height={100}/>
            </div>
            <div className={"text-left lg:p-10 p-5"}>
                <h2 className={"lg:text-3xl text-base lg:mb-5 mb-2.5 font-semibold"}>{name}</h2>
                <span className={"lg:mt-5 mt-2.5 bg-[#9ae1ef] rounded-full lg:px-3 px-1.5 py-1 lg:text-xl text-base text-center"}>{role}</span>
            </div>
        </div>
        <div className={"text-left lg:w-1/3 font-light text-sm lg:text-base mb-5"}>
            <p className={"leading-relaxed"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloribus facere ipsam ipsum iusto
                modi obcaecati quasi repellat repudiandae. Eius!
            </p>
        </div>
    </div>
    );
});

export default Member;
