import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { AvatarIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { scroll } from "@/lib/utils";
import { About } from "./About";
import { Experience } from "./Experience";
import { MailIcon } from "lucide-react";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Header } from "./layout/Header";

export const HeroSection = () => {
  return (
    <>
    <div
      id="home"
      className="flex flex-col md:flex-row md:gap-20 items-start bg-black py-[2rem] md:py-[8rem] px-[2rem] lg:px-[6rem] xl:px-[10rem] z-[1]"
    >
      <div className="h-[90vh] md:sticky top-20 flex flex-col items-start pt-[6rem] md:pt-[0px] justify-start w-full md:w-[40%]">
        <motion.h3
          initial={{ opacity: 0, marginTop: 5 }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-left text-[36px] md:text-[40px] lg:text-[4rem] font-bold pt-[1rem]"
        >
          Ashish Thoppil
        </motion.h3>
        <div className="flex items-center gap-2">
          <motion.h3
            initial={{ opacity: 0, marginTop: 5 }}
            whileInView={{ opacity: 1, marginTop: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-left text-[16px] md:text-[40px] lg:text-[1.5rem] font-semibold"
          >
            Full Stack Engineer
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, marginTop: 5 }}
            whileInView={{ opacity: 1, marginTop: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2">
            <img className="grayscale hover:scale-110 duration-200" width="30" height="30" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
            <img className="grayscale hover:scale-110 duration-200" width="30" height="30" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
            <img className="grayscale hover:scale-110 duration-200" width="30" height="30" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
            <img className="grayscale hover:scale-110 duration-200" width="30" height="30" src="https://img.icons8.com/nolan/64/php--v2.png" alt="php--v2"/>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, marginTop: 5 }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-[16px] md:text-[16px] lg:text-[16px] font-normal pt-[1rem]"
        >
          A versatile Engineer with 5+ years of experience, focusing on building accessible and user 
          friendly experiences.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, marginTop: 50 }}
          whileInView={{ opacity: 1, marginTop: 30 }}
          transition={{ duration: 1 }}
          className="flex gap-5 mt-10"
        >
          <a target="_blank" className="hover:scale-110 duration-200" href="https://www.instagram.com/ashishbthoppil/">
            <InstagramLogoIcon width={30} height={30} className="text-white grayscale" />
          </a>
          <a target="_blank" className="hover:scale-110 duration-200" href="https://github.com/ashishthoppil">
            <GitHubLogoIcon width={30} height={30} className="text-white grayscale" />
          </a>
          <a target="_blank" className="hover:scale-110 duration-200" href="https://www.linkedin.com/in/ashish-thoppil">
            <LinkedInLogoIcon width={30} height={30} className="text-white grayscale" />
          </a>
          <a target="_blank" className="hover:scale-110 duration-200" href="mailto:ashisht.developer@gmail.com">
            <MailIcon width={30} height={30} className="text-white grayscale" />
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col gap-[7rem] items-start justify-start md:justify-center w-full md:w-[60%] overflow-y-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
    </>
  );
};
