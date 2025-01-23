import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Lumi.ai",
      description:
        "A multi tenant RAG AI chatbot which eemploys gpt-4 to answer user queries according to the knowledge base of the client, currently in progress. ",
      tech: ["Next.js", "Vercel AI SDK", "OpenAI APIs"],
      github: "https://github.com/ashishthoppil/mt-ai-chatbot",
      link: "https://mt-ai-chatbot-git-main-ashishs-projects-33ba2137.vercel.app/chat",
    },
    {
      title: "WokieTokie!",
      description:
        "This is a Vanilla JS project used to recognize speech and convert and utter the recognized speech to a selected language",
      tech: ["Next.js", "JS", "AWS Polly", "Google Cloud APIs"],
      github: "https://github.com/ashishthoppil/wokie-tokie-web",
      link: "https://wokietokie.netlify.app/",
    },
    {
      title: "Portfolio v1",
      description:
        "This was my first version of my portfolio that I developed using React.js when I had just started my journey in tech.",
      tech: ["React JS", "CSS3", "Webpack"],
      github: "https://github.com/ashishthoppil/portfolio",
      link: "https://ashishthoppil.github.io/portfolio/",
    },
    {
      title: "Thinklit",
      description:
        "An Edtech app with integrated live class features. The app works on recommendations and session scheduling algorithms.",
      tech: ["Laravel", "Agora SDK", "S3"],
      github: "",
      link: "",
    },
    {
      title: "Youtube Clone",
      description:
        "A simple Youtube clone that I developed with just HTML and CSS to brush up my designing skills.",
      tech: ["HTML5", "CSS3", "Netlify"],
      github: "https://github.com/ashishthoppil/youtube-clone-html-css",
      link: "https://youtube-clone-ashish-thoppil.netlify.app/",
    },
    {
      title: "Portfolio V2",
      description:
        "A more refined and the most latest version of my portfolio that you are going through right now. Built using React JS.",
      tech: ["React JS", "CSS", "Netlify"],
      github: "https://github.com/ashishthoppil/portfolio-v2",
      link: "/",
    },
  ];
  return (
    <div
      id="projects"
      className="pt-[5rem] px-[3rem] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[1300px] relative m-auto"
    >
      <h2 className="text-[25px] md:text-[32px] font-semibold sub-heading projects-sub-heading">
        Works I've done
      </h2>
      <div className="flex flex-wrap justify-center gap-[2rem] pt-[3rem]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-[300px] rounded-sm">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex gap-x-2 pt-3">
                  {project.tech.map((tech, i2) => (
                    <Badge
                      title={tech}
                      key={i2}
                      className="rounded-md z-[1] line-clamp-1 "
                      variant="default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-x-5 justify-end">
                {project.github !== "" && (
                  <a className="z-[1]" href={project.github} target="_blank">
                    <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
                  </a>
                )}
                {project.link !== "" && (
                  <a className="z-[1]" href={project.link} target="_blank">
                    <OpenInNewWindowIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
                  </a>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
