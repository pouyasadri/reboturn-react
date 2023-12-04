import {FC} from "react";
const Footer:FC = () => {
    return(
        <section className={"w-[70%]  rounded-2xl my-10 mx-auto h-52"}>
            <video src={"/output.webm"} className={"rounded-2xl"} autoPlay loop muted playsInline />
        </section>
    )
}
export default Footer;
