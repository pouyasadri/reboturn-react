// components/WhoWeAre/WhoWeAre.tsx
import {FC, memo} from 'react';
import dynamic from 'next/dynamic';

const Member = dynamic(() => import('./Member'));

const WhoWeAre: FC = memo(function WhoWeAre() {
    return (
        <div id={"meettheteam"} className={"w-[90%] mx-auto lg:mt-20 mt-52 text-black"}>
            <Member name="SINA GANJI" role="CEO & Founder" image={"/Sina.webp"}
                    text={"Graduate in SME Management | Specialized in Corporate Strategy, Business Development, and Leadership | Skilled in Holistic Business Creation, Team Empowerment, Strategic Decision-Making, and Innovation Leadership"}
                    icons={["linkedin.svg"]}
                    urls={["https://www.linkedin.com/in/sina-ganji-6a1084219/"]}
            />
            <Member name="SEYEDPOUYA SADRIFARD" role="CTO & Co-Founder" image={"/Pouya.webp"}
                    text={"Self-taught full-stack engineer | Specialized in web, SaaS, and mobile application development | intrigued by algorithm optimization Cybersecurity and new technologies."}
                    icons={["linkedin.svg", "github.svg", "youtube.svg", "web.png"]}
                    urls={["https://www.linkedin.com/in/seyedpouya-sadri-fard/", "https://github.com/pouyasadri", "https://www.youtube.com/channel/UCrfihekLrBk9k1cdQjgXGnQ", "https://pouyasadri.com/"]}
            />
            <Member name="DANIAL POUR ARAB" role="CTO & Co-Founder" image={"/Danial.webp"}
                    text={"PhD in Computer Science | Specialist in Optimisation, Parallel Programming, and 3D Modelling | Intrigued by the potential of Machine Learning in various industries"}
                    icons={["linkedin.svg"]}
                    urls={["https://fr.linkedin.com/in/danialpourarab"]}
            />
            <Member name="MITRA POURARAB" role="Artist & Designer" image={"/Mitra.webp"}
                    text={"Licenced in Visual Arts with a Focus on Design | Specialist in Graphic Design, UI/UX Design, and Both 3D & 2D Digital Design | Deeply Intrigued by the Intersection of Art and Technology."}
                    icons={["linkedin.svg", "behance.svg", "web.png"]}
                    urls={["https://www.linkedin.com/in/mitrapourarab", "https://www.behance.net/mitrapourarab", "https://mitrapourarab.com/"]}
            />
        </div>
    );
});

export default WhoWeAre;
