import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const SocialMediaButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="w-[40px] bottom-0 fixed right-[40px] z-[10]"
    >
      <ul className="flex flex-col gap-y-8 items-center m-0 p-0 list-none social-media-btns">
        <li>
          <a href="https://github.com/ashishthoppil/" target="_blank">
            <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ashish-thoppil/" target="_blank">
            <LinkedInLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/ashishbthoppil/" target="_blank">
            <InstagramLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
        <li>
          <a href="mailto:ashishthoppil23@gmail.com">
            <EnvelopeClosedIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};
