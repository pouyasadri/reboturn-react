import {Fragment, memo} from "react";
import dynamic from "next/dynamic";

const LogoSection = dynamic(() => import('@/components/Navbar/LogoSection'));
const NavItems = dynamic(() => import('@/components/Navbar/NavItems'));
const Navbar = memo(function Navbar() {
    return (
        <Fragment>
            <LogoSection/>
            <NavItems/>

        </Fragment>
    );
});

export default Navbar;
