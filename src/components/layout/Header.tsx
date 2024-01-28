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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Button
                  onClick={resumeDownload}
                  className="hover:scale-105 transition duration-400 -mt-[10px]"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>

    // <motion.header
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 1.5 }}
    //   className="flex justify-between px-[5rem] shadow"
    // >
    //   <a href="/">
    //     <img className="h-[6rem]" src={logo} />
    //   </a>
    //   <nav className="flex items-center">
    //     <ul className="flex gap-x-[4rem] items-center z-[1] header-links">
    //       <li>
    //         <a href="/">Home</a>
    //       </li>
    //       <li>
    //         <a href="#about-me">About</a>
    //       </li>
    //       <li>
    //         <a href="#experience">Experience</a>
    //       </li>
    //       <li>
    //         <a href="#projects">Projects</a>
    //       </li>
    //       <li>
    //         <Button
    //           onClick={resumeDownload}
    //           className="hover:scale-105 transition duration-400"
    //         >
    //           <DownloadIcon className="mr-2 h-4 w-4" /> Resume
    //         </Button>
    //       </li>
    //     </ul>
    //   </nav>
    // </motion.header>
  );
};
