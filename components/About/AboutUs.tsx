import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

function AboutUs() {
    const {ref, inView} = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    });

    const handleContactClick = () => {
        // Handle the click event, e.g., navigate to the contact page
    };

    return (
        <section className="my-10">
            <div className="w-[90%] mx-auto shadow-2xl bg-white rounded-2xl p-10">
                <div className="text-black font-medium text-3xl leading-relaxed">
                    <p>At Reboturn, we&apos;re changing the game in
                        <motion.span
                            ref={ref}
                            className="relative px-2 py-1 rounded-full font-semibold overflow-hidden inline-flex align-middle"
                        >
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: inView ? '0%' : '-100%' }}
                                transition={{ duration: 0.8, ease: "easeInOut",delay:0.2 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    backgroundColor: '#9ae1ef'
                                }}
                            />
                            <span style={{ position: 'relative' }}>fashion</span>
                        </motion.span>.
                    </p>
                    <p>Experience style, simplicity, and sustainability like <motion.span
                        ref={ref}
                        className="relative px-2 py-1 rounded-full font-semibold overflow-hidden inline-flex align-middle"
                    >
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: inView ? '0%' : '-100%' }}
                            transition={{ duration: 0.8, ease: "easeInOut",delay:0.2 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: '#9ae1ef'
                            }}
                        />
                        <span style={{ position: 'relative' }}>never</span>
                    </motion.span> before.</p>
                    <p>Join us in shaping the future of <motion.span
                        ref={ref}
                        className="relative px-2 py-1 rounded-full font-semibold overflow-hidden inline-flex align-middle"
                    >
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: inView ? '0%' : '-100%' }}
                            transition={{ duration: 0.8, ease: "easeInOut",delay:0.2 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: '#9ae1ef'
                            }}
                        />
                        <span style={{ position: 'relative' }}>shopping</span>
                    </motion.span> – where every
                        click is a step toward a more <motion.span
                            ref={ref}
                            className="relative px-2 py-1 rounded-full font-semibold overflow-hidden inline-flex align-middle"
                        >
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: inView ? '0%' : '-100%' }}
                                transition={{ duration: 0.8, ease: "easeInOut",delay:0.2 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    backgroundColor: '#9ae1ef'
                                }}
                            />
                            <span style={{ position: 'relative' }}>extraordinary</span>
                        </motion.span> you.
                    </p>
                </div>
                <button onClick={handleContactClick}
                        className="w-[15%] mt-5 font-medium shadow-gray-500 text-xl rounded-full text-center bg-black text-white p-5">
                    Contact us
                </button>
            </div>
        </section>
    );
}

export default AboutUs;
