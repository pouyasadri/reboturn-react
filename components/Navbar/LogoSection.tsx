// components/Navbar/LogoSection.tsx
import {FC, memo} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const LogoSection: FC = memo(function LogoSection() {
    return (
        <motion.div
            initial={{opacity: 0, y: -200}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1.6}}
            className={"absolute top-0 left-0 z-10 float-left max-md:pt-[0.5rem]"}
        >
            <div className={"bg-transparent mt-4 ml-4"}>
                <a className={"m-0"} href={"/"}>
                    <Image src="/logo.png" alt="ReboTurn Log" width={400}
                           className={"max-md:w-[250px] max-sm:[200px]"} height={100} priority={true}/>
                </a>
            </div>
        </motion.div>
    );
});

export default LogoSection;
