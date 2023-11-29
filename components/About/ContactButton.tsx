// components/About/ContactButton.tsx
import {FC, memo, useCallback} from 'react';

const ContactButton: FC = memo(function ContactButton() {
    const handleContactClick = useCallback(() => {
        // Handle the click event, e.g., navigate to the contact page
    }, []);

    return (
        <button onClick={handleContactClick}
                className="w-30 max-xm:mt-2 mt-5 font-medium shadow-gray-500 max-sm:text-base text-xl rounded-full text-center bg-black text-white max-sm:p-2.5 p-5">
            Contact us
        </button>
    );
});

export default ContactButton;
