// components/About/ContactButton.tsx
import {FC, memo, useCallback} from 'react';
import {Link} from "react-scroll";

const ContactButton: FC = memo(function ContactButton() {
    const handleContactClick = useCallback(() => {
        // Handle the click event, e.g., navigate to the contact page
    }, []);

    return (
        <Link
            to={"contactus"}
            smooth={true}
            duration={320 * 5}>
            <button
                className="text-base font-semibold mt-2.5 lg:mt-5 relative overflow-hidden border border-black bg-black p-2.5 lg:p-5 text-white lg:text-xl rounded-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9ae1ef] before:transition-all before:duration-200 hover:text-black hover:border-[#9ae1ef] hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">

                    Contact Us</span></button>
        </Link>
    );
});

export default ContactButton;
