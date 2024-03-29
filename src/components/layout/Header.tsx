import logo from "../../assets/images/logo-light.png";
import resume from "../../assets/documents/resume.pdf";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { scroll } from "@/lib/utils";

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
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-transparent border-gray-200 dark:bg-gray-900 relative z-[1] shadow"
    >
      <div className="px-[2rem] md lg:px-[6rem] xl:px-[15rem] flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img className="h-[6rem]" src={logo} />
        </a>
        <div className="hidden md:block">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  onClick={(e) => scroll("home", e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => scroll("about-me", e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => scroll("experience", e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => scroll("projects", e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <Button
                  onClick={resumeDownload}
                  className="hover:scale-105 transition duration-400 -mt-[10px]"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" /> Resume
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <Button
          onClick={resumeDownload}
          className="hover:scale-105 transition duration-400 md:hidden"
        >
          <DownloadIcon className="mr-2 h-4 w-4" /> Resume
        </Button>
      </div>
    </motion.nav>
  );
};
