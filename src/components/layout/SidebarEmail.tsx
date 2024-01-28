import { motion } from "framer-motion";

export const SidebarEmail = () => {
  return (
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
  );
};
