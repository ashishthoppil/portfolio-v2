import "./App.css";
import { Header } from "./components/layout/Header";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  AvatarIcon,
} from "@radix-ui/react-icons";

function App() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="w-[40px] bottom-0 fixed right-[40px] z-[10]"
      >
        <ul className="flex flex-col gap-y-8 items-center m-0 p-0 list-none social-media-btns">
          <li>
            <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </li>
          <li>
            <LinkedInLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </li>
          <li>
            <InstagramLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </li>
          <li>
            <EnvelopeClosedIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="w-[40px] bottom-0 fixed left-[40px] z-[10]"
      >
        <ul className="flex flex-col gap-y-8 items-center m-0 p-0 list-none social-media-btns">
          <li className="rotate-[270deg] mb-[5rem] hover:text-amber-700 hover:-translate-y-6 transition duration-500">
            <a href="mailto:ashishthoppil23@gmail.com">
              ashishthoppil23@gmail.com
            </a>
          </li>
        </ul>
      </motion.div>

      <div className="h-screen px-[5rem]">
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
            className="text-xl leading-7"
          >
            I'm a software engineer focusing on creating meticulous, dynamic web
            experiences. <br />
            Currently busy with creating accessible and fluid applications at{" "}
            <a
              className="text-amber-700 hover:text-amber-800 underline"
              href="https://www.fingent.com"
            >
              Fingent Global Solutions
            </a>
            .
          </motion.p>
          <Button className="mt-[3rem] w-fit hover:scale-105 transition duration-400">
            <AvatarIcon className="mr-2 h-4 w-4" />
            Know more about me!
          </Button>
        </div>
      </div>
      <div className="h-screen bg-black/[0.1]"></div>
    </>
  );
}

export default App;
