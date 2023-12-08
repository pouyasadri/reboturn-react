// components/WhoWeAre/Member.tsx
import {FC, memo} from 'react';
import Image from "next/image";

interface MemberProps {
    name: string;
    role: string;
    image: string;
    text: string;
    icons?: string[];
    urls?: string[];
}

const Member: FC<MemberProps> = memo(function Member({name, role, image, text, icons, urls}) {
    return (
        <div className={"lg:flex lg:justify-between items-center border-b-[1px] border-black p-2.5"}>
            <div className={"flex justify-start items-center h-full"}>
                <div className={"lg:p-10 p-5"}>
                    <Image
                        className={"lg:rounded-3xl rounded-xl aspect-square object-cover lg:w-full lg:h-full w-20 h-20"}
                        src={image} alt={`${name}-${role}-image`} width={150} height={100}/>
                </div>
                <div className={"text-left lg:p-10 p-5"}>
                    <h2 className={"lg:text-3xl text-base lg:mb-5 mb-2.5 font-semibold"}>{name}</h2>
                    <span
                        className={"lg:mt-5 mt-2.5 bg-[#9ae1ef] rounded-full lg:px-3 px-1.5 py-1 lg:text-xl text-base text-center"}>{role}</span>
                </div>
            </div>
            <div
                className={"lg:w-1/3 text-gray-700 text-justify text-sm lg:text-base mb-5 flex flex-col justify-between"}>
                <div>
                    <p className={"leading-relaxed"}>{text}
                    </p>
                </div>
                <div className={"flex gap-6 lg:mt-10 mt-5 lg:justify-start justify-evenly items-center"}>
                    {icons?.map((icon, index) => (
                        <a key={index} href={urls ? urls[index] : '#'} target="_blank" rel="noopener noreferrer">
                            <div className={"border border-gray-800 rounded-full w-10 h-10"}>
                                <Image
                                    src={`/Icons/${icon}`}
                                    alt={`Icon ${index}`}
                                    width={56}
                                    height={56}
                                    className="p-2 w-full object-cover h-full"
                                />
                            </div>
                        </a>


                    ))}
                </div>

            </div>
        </div>
    );
});

export default Member;
