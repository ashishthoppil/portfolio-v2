import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      img: '/images/kulfi_logo.png',
      title: "Kulfi AI",
      description:
        `A customizable multi-tenant AI chatbot with a custom 
        knowledge base, capable of chat interactions, integrated into any website in a matter of 
        minutes.`,
      tech: ["Next.js", "Vercel AI SDK", "OpenAI APIs"],
      github: "https://github.com/ashishthoppil/mt-ai-chatbot",
      link: "https://kulfi-ai.com",
    },
    {
      img: '/images/ats.png',
      title: "ATS Resume Scanner",
      description: `AI based ATS friendly resume scoring and optimization application using Vercel AI SDK and GPT models.`,
      tech: ["Next.js", "Vercel AI SDK", "OpenAI APIs"],
      github: "https://github.com/ashishthoppil/ats-scanner",
      link: "https://ats-resume-scanner.com",
    },
    {
      img: '/images/wokie.png',
      title: "WokieTokie!",
      description:
        "This is a Vanilla JS project used to recognize speech and convert and utter the recognized speech to a selected language",
      tech: ["Next.js", "JS", "AWS Polly", "Google Cloud APIs"],
      github: "https://github.com/ashishthoppil/wokie-tokie-web",
      link: "https://wokietokie.netlify.app/",
    },
    {
      img: '/images/portfolio.png',
      title: "Portfolio V2",
      description:
        "A more refined and the most latest version of my portfolio that you are going through right now. Built using React JS.",
      tech: ["React JS", "CSS", "Netlify"],
      github: "https://github.com/ashishthoppil/portfolio-v2",
      link: "/",
    },
  ];
  return (
    <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="experience"
          className="flex flex-col gap-5 pt-[2rem] bg-black w-full"
        >
          <div className="flex flex-col gap-5 w-full">
            {projects.map((item, _index) => <div key={_index} className="flex flex-col md:flex-row gap-10 group hover:bg-[#ffffff2b] duration-500 w-full rounded-[10px] px-3 py-5">
              <div className="flex items-start text-white w-full md:w-[25%]">
                <img className="group-hover:grayscale-0 duration-500 grayscale border-[1px] border-zinc-400 object-contain object-left p-1 rounded-lg" src={item.img} />
              </div>
              <div className="flex flex-col gap-5 text-white  items-start  w-full md:w-[75%]">
                <div className="flex items-center gap-2">
                  <h1 className="font-semibold">{item.title}</h1>
                  &middot;
                  <a target="_blank" href={item.link}><ExternalLinkIcon /></a>
                  <a target="_blank" href={item.github}><GitHubLogoIcon /></a>
                </div>
                <div className="text-[14px]">
                  {item.description}
                </div>
                <div className="flex gap-2">
                  {item.tech.map((element, index) => <span key={index} className="px-2 py-1 rounded-full bg-gray-600 text-white text-[12px]">{element}</span>)}
                </div>
              </div>
            </div>)}
          </div>
        </motion.div>
  );
};
