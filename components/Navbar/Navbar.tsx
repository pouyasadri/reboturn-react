import {Fragment} from "react";
import dynamic from "next/dynamic";

const LogoSection = dynamic(() => import('@/components/Navbar/LogoSection'));
const NavItems = dynamic(() => import('@/components/Navbar/NavItems'));
const NavMobile = dynamic(() => import('@/components/Navbar/NavMobile'));
const Navbar = () => {
    return (
        <Fragment>
            <LogoSection/>
            <NavItems/>
            <NavMobile/>
        </Fragment>
    );
};

export default Navbar;
