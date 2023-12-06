import {FC} from "react";

const Footer: FC = () => {
    return (
        <section id={"contactus"} className={"w-[98%] h-[60%] mx-auto rounded-2xl my-28 relative flex items-center justify-center"}>
            <video src={"/output.mp4"} className={" w-screen mx-auto rounded-2xl h-full object-cover"} autoPlay loop
                   muted playsInline/>
            <div
                className={"absolute bg-[#9ae1ef] cursor-pointer rounded-3xl z-10 text-center hover:bg-[#aee7f2] transition-all duration-200 mx-auto top-10 bottom-0 left-0 right-0 w-40 h-16 p-5 text-black font-medium flex items-center justify-center"}>
                <a href="mailto:info@reboturn.com">
                    Contact Us
                </a>
            </div>
        </section>
    )
}
export default Footer;