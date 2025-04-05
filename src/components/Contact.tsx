import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const Contact = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="experience"
      className="flex flex-col gap-5 pt-0 pb-[2rem] md:pt-[2rem] bg-black w-full"
    >
      <div className="flex flex-col w-full text-white">
        <h2 className="text-center md:text-left text-[25px] md:text-[32px] font-bold ">
          Get in touch
        </h2>
        <p className="text-center md:text-left text-base pt-5">
          Whether it's official or just casual, I'll try my best to get back to you!
        </p>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "mailto:ashishthoppil23@gmail.com";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="flex justify-center md:justify-start gap-2 mt-5 relative hover:underline font-bold"
        >
          Email me <ExternalLinkIcon className="mr-2" /> 
        </button>
        </div>
    </motion.div>
  );
};
