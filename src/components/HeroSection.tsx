import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { AvatarIcon } from "@radix-ui/react-icons";

export const HeroSection = () => {
  return (
    <div className="h-screen px-[5rem]">
      <div className="absolute top-[50%] left-[50%] w-[30%] h-[50%] bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute top-[10%] left-[40%] w-[30%] h-[50%] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[50%] bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[100%] left-[10%] w-[30%] h-[50%] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
      <div className="grid justify-center pt-[10rem] m-auto text-black/[0.75]">
        <motion.h1
          initial={{ opacity: 0, marginTop: 100 }}
          animate={{ opacity: 1, marginTop: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base font-normal"
        >
          Hi there! My name is
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, marginTop: 100 }}
          animate={{ opacity: 1, marginTop: 0 }}
          transition={{ duration: 1 }}
          className="text-[80px] font-semibold"
        >
          Ashish B Thoppil.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, marginTop: 100 }}
          animate={{ opacity: 1, marginTop: 0 }}
          transition={{ duration: 1.5 }}
          className="text-[80px] font-semibold"
        >
          I love building stuff.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, marginTop: 100 }}
          animate={{ opacity: 1, marginTop: 0 }}
          transition={{ duration: 2 }}
          className="text-xl leading-7 z-[1]"
        >
          I'm a software engineer focusing on creating meticulous, dynamic web
          experiences. <br />
          Currently busy with creating accessible and fluid applications at{" "}
          <a
            className="text-amber-700 hover:text-amber-800 underline"
            href="https://www.fingent.com"
            target="_blank"
          >
            Fingent Global Solutions
          </a>
          .
        </motion.p>
        <Button
          onClick={() => {
            const element = document.getElementById("about-me");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-[3rem] w-fit hover:scale-105 transition duration-400 z-[1]"
        >
          <AvatarIcon className="mr-2 h-4 w-4" />
          Know more about me!
        </Button>
      </div>
    </div>
  );
};
