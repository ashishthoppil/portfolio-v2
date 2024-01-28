import logo from "../../assets/images/logo-light.png";
import resume from "../../assets/documents/resume.pdf";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const Header = () => {
  const resumeDownload = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex justify-between px-[5rem] shadow"
    >
      <a href="/">
        <img className="h-[6rem]" src={logo} />
      </a>
      <nav className="flex items-center">
        <ul className="flex gap-x-[4rem] items-center z-[1] header-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Button
              onClick={resumeDownload}
              className="hover:scale-105 transition duration-400"
            >
              <DownloadIcon className="mr-2 h-4 w-4" /> Resume
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
