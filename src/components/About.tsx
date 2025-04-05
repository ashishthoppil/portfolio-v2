import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="flex flex-col gap-5 pt-[2rem]">
          <motion.p className="text-white">
            My name is Ashish B. Thoppil. I enjoy learning new things and building stuff for the web. I hold a Masters in Computer Applications from a reputed University in Kerala, India.
          </motion.p>
          <motion.p className="text-white">
            Differing from many enthusiasts in the computer realm, my affection for technology didn't ignite in my early years; rather, it blossomed gradually over time. I am grateful for the journey that led me to immerse myself in the world of computers and technology. Throughout my professional experience, I've predominantly collaborated with startups, engaging in diverse domains and contributing to the dynamic landscape of the tech industry. This unique trajectory has further fueled my passion for the ever-evolving realm of innovation.
          </motion.p>
    </div>
  );
};
