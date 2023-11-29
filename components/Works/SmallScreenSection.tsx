// components/Works/SmallScreenSection.tsx
import {FC, memo} from 'react';
import dynamic from 'next/dynamic';

const ServiceCard = dynamic(() => import('@/components/Works/ServiceCard'));

const SmallScreenSection: FC = memo(function SmallScreenSection() {
    return (
        <section className={"lg:hidden"}>
            <ServiceCard
                image="/Service1.png"
                title="Seamless Online Shopping Experience"
                text="Reboturn provides an effortless online shopping experience, connecting customers to a wide range of products from local and major brands. The platform features an intuitive interface and AI assistance, making shopping and returns simple and convenient."
            />
            <ServiceCard
                image="/Service2.png"
                title="Flexible Delivery Scheduling"
                text="Enjoy the convenience of scheduling your deliveries at times that suit you best. Reboturn’s flexible delivery options, including eco-friendly bike couriers, ensure that your purchases arrive when it is most convenient for you, enhancing your overall shopping experience."
            />
            <ServiceCard
                image="/Service3.png"
                title="Hassle-Free Return Policy"
                text="Our hassle-free return policy simplifies your shopping experience. With easy online return arrangements and convenient pickup by our couriers, returning products is as effortless as buying them."
            />
            <ServiceCard
                image="/Service4.png"
                title="Eco-Friendly Delivery and Returns"
                text="Commitment to sustainability is at our core. Reboturn's eco-friendly and efficient delivery and return services utilize bicycle couriers and focus on providing you with the nearest products to reduce environmental impact, offering a guilt-free and convenient shopping experience."
            />
        </section>
    );
});

export default SmallScreenSection;
