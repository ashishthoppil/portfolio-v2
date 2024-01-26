import "./App.css";
import { Header } from "./components/layout/Header";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  AvatarIcon,
  OpenInNewWindowIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";

import portrait from "./assets/images/portrait.jpg";
import logo from "./assets/images/logo-light.png";

import { Footer } from "flowbite-react";

function App() {
  return (
    <>
      <Header />
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
            <a
              href="https://www.linkedin.com/in/ashish-thoppil/"
              target="_blank"
            >
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

      <div className="h-screen px-[5rem]">
        <div className="grid justify-center pt-[10rem] m-auto text-black/[0.75]">
          <motion.h1
            initial={{ opacity: 0, marginTop: 100 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-normal"
          >
            Hi there! My name is
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, marginTop: 100 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{ duration: 1 }}
            className="text-[80px] font-semibold"
          >
            Ashish B Thoppil.
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, marginTop: 100 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[80px] font-semibold"
          >
            I love building stuff.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, marginTop: 100 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{ duration: 2 }}
            className="text-xl leading-7"
          >
            I'm a software engineer focusing on creating meticulous, dynamic web
            experiences. <br />
            Currently busy with creating accessible and fluid applications at{" "}
            <a
              className="text-amber-700 hover:text-amber-800 underline"
              href="https://www.fingent.com"
              target="_blank"
            >
              Fingent Global Solutions
            </a>
            .
          </motion.p>
          <Button className="mt-[3rem] w-fit hover:scale-105 transition duration-400">
            <AvatarIcon className="mr-2 h-4 w-4" />
            Know more about me!
          </Button>
        </div>
      </div>
      <div id="about-me" className="h-screen w-[900px] m-auto">
        <h2 className="text-[32px] font-semibold sub-heading about-sub-heading">
          About me
        </h2>
        <div className="flex gap-x-5 pt-5 mt-10">
          <div className="about-me-text text-[18px] leading-7">
            <p>
              My name is Ashish B. Thoppil. I enjoy learning new things and
              building stuff for the web. I hold a Masters in Computer
              Applications from a reputed University in{" "}
              <span className="text-amber-700 hover:text-amber-800 hover:underline">
                Kerala
              </span>
              , which is where I am from.
            </p>
            <p className="mt-10">
              Differing from many enthusiasts in the computer realm, my
              affection for technology didn't ignite in my early years; rather,
              it blossomed gradually over time. I am grateful for the journey
              that led me to immerse myself in the world of computers and
              technology. Throughout my professional experience, I've
              predominantly collaborated with startups, engaging in diverse
              domains and contributing to the dynamic landscape of the tech
              industry. This unique trajectory has further fueled my passion for
              the ever-evolving realm of innovation.
            </p>
            <p className="mt-10">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="skills-list mt-5">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Vite</li>
              <li>PHP</li>
            </ul>
          </div>
          <img className="h-[20rem]" src={portrait} />
        </div>
      </div>
      <div id="experience" className="h-full w-[700px] m-auto pb-[17rem]">
        <h2 className="text-[32px] font-semibold sub-heading experience-sub-heading">
          Professional Experience
        </h2>
        <div className="flex gap-x-5 pt-5 mt-10">
          <Tabs defaultValue="fingent" className="w-[400px]">
            <TabsList className="">
              <TabsTrigger className="" value="fingent">
                Fingent Global Solutions
              </TabsTrigger>
              <TabsTrigger value="polus">Polus Solutions</TabsTrigger>
              <TabsTrigger value="freelance">Freelance</TabsTrigger>
              <TabsTrigger value="reizend">Reizend IT Consultants</TabsTrigger>
            </TabsList>
            <div className="pl-2 pt-5 w-[40rem]">
              <TabsContent value="fingent">
                <ul className="list-disc">
                  <li>
                    Spearheading the development of responsive and user-friendly
                    interfaces using React.js adhering to best practices,
                    performance optimization, and accessibility standards in
                    frontend code.
                  </li>
                  <li>
                    Conducting periodic code review providing constructive
                    feedback to colleagues, promoting knowledge sharing, and
                    contributing to continuous improvement.
                  </li>
                  <li>
                    Collaborating with the backend development team, at the same
                    time contributing to Laravel-based backend tasks.
                  </li>
                  <li>
                    Actively participating in discussions to explore diverse
                    problem-solving approaches and perspectives within the team.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="polus">
                <ul className="list-disc">
                  <li>
                    Led the development of pixel-perfect websites and web
                    applications, ensuring a high standard of visual and
                    functional quality.
                  </li>
                  <li>
                    Held a key role within the team, being relied upon heavily
                    for critical tasks and projects.
                  </li>
                  <li>
                    Mentored junior team members, providing guidance on best
                    practices, coding standards, and fostering a collaborative
                    learning environment.
                  </li>
                  <li>
                    Received the 'Employee of the Year' award, highlighting
                    exceptional contributions, dedication, and impact on the
                    team and company.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="freelance">
                <ul className="list-disc">
                  <li>
                    Worked on a few static and dynamic websites using React.js
                    with clients from UAE and Australia.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="reizend">
                <ul className="list-disc">
                  <li>
                    Responsible for both frontend and backend development as
                    well as DB corrections.
                  </li>
                  <li>
                    Actively involved in the development of major modules in a
                    Hospital Management System which played a critical role in
                    the functioning of the application.
                  </li>
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      <div id="projects-section" className="h-screen w-[900px] m-auto">
        <h2 className="text-[32px] font-semibold sub-heading projects-sub-heading">
          Works I've done
        </h2>
        <div className="grid grid-cols-3 gap-10 pt-[3rem]">
          <Card className="w-[300px] rounded-sm">
            <CardHeader>
              <CardTitle>WokieTokie</CardTitle>
              <CardDescription className="flex gap-x-2 pt-3">
                <Badge className="rounded-md" variant="default">
                  HTML5
                </Badge>
                <Badge className="rounded-md" variant="default">
                  CSS3
                </Badge>
                <Badge className="rounded-md" variant="default">
                  Vanilla JS
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This is a Vanilla JS project used to recognize speech and
                convert and utter the recognized speech to a selected language
              </p>
            </CardContent>
            <CardFooter className="flex gap-x-5 justify-end">
              <a href="https://github.com/ashishthoppil/" target="_blank">
                <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
              <a href="https://wokietokie.xyz/" target="_blank">
                <OpenInNewWindowIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[300px] rounded-sm">
            <CardHeader>
              <CardTitle>Portfolio v1</CardTitle>
              <CardDescription className="flex gap-x-2 pt-3">
                <Badge className="rounded-md" variant="default">
                  React JS
                </Badge>
                <Badge className="rounded-md" variant="default">
                  CSS3
                </Badge>
                <Badge className="rounded-md" variant="default">
                  Webpack
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This was my first version of my portfolio that I developed using
                React.js when I had just started my journey in tech.
              </p>
            </CardContent>
            <CardFooter className="flex gap-x-5 justify-end">
              <a href="https://github.com/ashishthoppil/" target="_blank">
                <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
              <a href="https://wokietokie.xyz/" target="_blank">
                <OpenInNewWindowIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[300px] rounded-sm">
            <CardHeader>
              <CardTitle>Thinklit</CardTitle>
              <CardDescription className="flex gap-x-2 pt-3">
                <Badge className="rounded-md" variant="default">
                  Laravel
                </Badge>
                <Badge className="rounded-md" variant="default">
                  Agora SDK
                </Badge>
                <Badge className="rounded-md" variant="default">
                  S3
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                An Edtech app with integrated live class features. The app works
                on recommendations and session scheduling algorithms.
              </p>
            </CardContent>
            <CardFooter className="flex gap-x-5 justify-end">
              <a href="https://github.com/ashishthoppil/" target="_blank">
                <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
              <a href="https://wokietokie.xyz/" target="_blank">
                <OpenInNewWindowIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[300px] rounded-sm">
            <CardHeader>
              <CardTitle>Youtube Clone</CardTitle>
              <CardDescription className="flex gap-x-2 pt-3">
                <Badge className="rounded-md" variant="default">
                  HTML5
                </Badge>
                <Badge className="rounded-md" variant="default">
                  CSS3
                </Badge>
                <Badge className="rounded-md" variant="default">
                  Netlify
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                A simple Youtube clone that I developed with just HTML and CSS
                to brush up my designing skills.
              </p>
            </CardContent>
            <CardFooter className="flex gap-x-5 justify-end">
              <a href="https://github.com/ashishthoppil/" target="_blank">
                <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
              <a href="https://wokietokie.xyz/" target="_blank">
                <OpenInNewWindowIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div
        id="experience"
        className="h-full w-[700px] m-auto pb-[17rem] text-center"
      >
        <h2 className="text-[32px] font-semibold ">Get in touch</h2>
        <p className="text-xl leading-7 pt-5">
          Whether it's official or just casual, I'll try my best to get back to
          you!
        </p>
        <Button className="mt-5">
          <EnvelopeOpenIcon className="mr-2" /> Email me
        </Button>
      </div>
      <div className="flex justify-center">
        <Footer container className="w-[800px]">
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="/"
                src={logo}
                className="w-[75px]"
                alt="Logo"
              />
              <Footer.LinkGroup className="flex gap-x-5">
                <Footer.Link href="https://github.com/ashishthoppil/">
                  <GitHubLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/ashish-thoppil/">
                  <LinkedInLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
                </Footer.Link>
                <Footer.Link href="https://instagram.com/ashishbthoppil/">
                  <InstagramLogoIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
                </Footer.Link>
                <Footer.Link href="mailto:ashishthoppil23@gmail.com">
                  <EnvelopeClosedIcon className="scale-150 hover:scale-[1.8] transition duration-300" />
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright
              className="pt-4"
              href="/"
              by=" Ashish B Thoppil"
              year={2024}
            />
          </div>
        </Footer>
      </div>
    </>
  );
}

export default App;
