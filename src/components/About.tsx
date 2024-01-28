import { motion } from "framer-motion";
import portrait from "../assets/images/portrait.jpg";

export const About = () => {
  return (
    <div id="about-me" className="h-screen w-[900px] m-auto">
      <div className="absolute -bottom-[100%] left-[10%] w-[30%] h-[50%] bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute -bottom-[100%] left-[10%] w-[30%] h-[50%] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-[70%] right-[50px] w-[20%] h-[40%] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-[32px] font-semibold sub-heading about-sub-heading"
      >
        About me
      </motion.h2>
      <div className="flex gap-x-5 pt-5 mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="about-me-text text-[18px] leading-7"
        >
          <p>
            My name is Ashish B. Thoppil. I enjoy learning new things and
            building stuff for the web. I hold a Masters in Computer
            Applications from a reputed University in{" "}
            <span className="text-amber-700 hover:text-amber-800 hover:underline">
              Kerala
            </span>
            , which is where I am from.
          </p>
          <p className="mt-10">
            Differing from many enthusiasts in the computer realm, my affection
            for technology didn't ignite in my early years; rather, it blossomed
            gradually over time. I am grateful for the journey that led me to
            immerse myself in the world of computers and technology. Throughout
            my professional experience, I've predominantly collaborated with
            startups, engaging in diverse domains and contributing to the
            dynamic landscape of the tech industry. This unique trajectory has
            further fueled my passion for the ever-evolving realm of innovation.
          </p>
          <p className="mt-10">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="skills-list mt-5">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>TailwindCSS</li>
            <li>Vite</li>
            <li>PHP</li>
          </ul>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
          className="h-[20rem]"
          src={portrait}
        />
      </div>
    </div>
  );
};
