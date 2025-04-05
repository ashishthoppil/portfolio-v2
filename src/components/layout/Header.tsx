import { motion } from "framer-motion";
import { Code2Icon } from "lucide-react";

export const Header = () => {

  return (
    <motion.nav
      className="bg-black border-0 dark:bg-gray-900 py-[1rem]"
    >
      <div className="px-[2rem] lg:px-[6rem] xl:px-[10rem] flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Code2Icon width={50} height={50} className="text-white" />
        </a>
      </div>
    </motion.nav>
  );
};
