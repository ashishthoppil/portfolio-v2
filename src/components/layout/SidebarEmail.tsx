import {
  HomeIcon,
  AvatarIcon,
  BackpackIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const SidebarEmail = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed w-[40px] bottom-0 left-[5px] sm:left-[15px] z-[10]"
    >
      <ul className="hidden md:flex flex-col gap-y-8 items-center m-0 p-0 list-none social-media-btns">
        <li className="rotate-[270deg] mb-[5rem] hover:text-amber-700 hover:-translate-y-6 transition duration-500">
          <a href="mailto:ashishthoppil23@gmail.com">
            ashishthoppil23@gmail.com
          </a>
        </li>
      </ul>

      <ul className="flex md:hidden flex-col gap-y-8 items-center m-0 p-0 list-none social-media-btns">
        <li>
          <a href="https://github.com/ashishthoppil/" target="_blank">
            <HomeIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ashish-thoppil/" target="_blank">
            <AvatarIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/ashishbthoppil/" target="_blank">
            <GearIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
        <li>
          <a href="mailto:ashishthoppil23@gmail.com">
            <BackpackIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};
