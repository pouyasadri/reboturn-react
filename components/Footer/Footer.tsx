import {FC} from "react";

const Footer: FC = () => {
    return (
        <section id={"contactus"}
                 className={"w-[98%] h-[60%] mx-auto rounded-2xl my-28 relative flex items-center justify-center lg:justify-start"}>
            <video src={"/contactus.mp4"} className={" w-screen mx-auto rounded-2xl h-full object-cover"} autoPlay loop
                   muted playsInline/>
            <div className={"absolute z-10 mx-auto max-md:top-10 max-md:left-0 max-md:right-0 lg:float-left flex flex-col gap-4 lg:ml-20 max-md:items-center justify-evenly lg:justify-center"}>
                <p className={"lg:text-3xl rounded text-xl font-mono font-semibold text-white p-2 backdrop-blur"}>Your Queries matter to us</p>
                <div
                    className={" bg-[#9ae1ef] cursor-pointer rounded-3xl hover:bg-[#aee7f2] transition-all duration-200 lg:w-56 w-44  p-2 text-black text-lg lg:text-2xl font-normal "}>
                    <a href="mailto:info@reboturn.com">
                        Reach Out Now
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Footer;
