import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      value: "fingent",
      company: "Fingent Global Solutions",
      responsibilities: [
        "Spearheading the development of responsive and user-friendly interfaces using React.js adhering to best practices, performance optimization, and accessibility standards in frontend code.",
        "Conducting periodic code review providing constructive feedback to colleagues, promoting knowledge sharing, and contributing to continuous improvement.",
        "Collaborating with the backend development team, at the same time contributing to Laravel-based backend tasks.",
        "Actively participating in discussions to explore diverse problem-solving approaches and perspectives within the team.",
      ],
      designation: "Software Engineer",
      year: "2022 - Present",
    },
    {
      value: "polus",
      company: "Polus Solutions",
      responsibilities: [
        "Led the development of pixel-perfect websites and web applications, ensuring a high standard of visual and functional quality.",
        "Held a key role within the team, being relied upon heavily for critical tasks and projects.",
        "Mentored junior team members, providing guidance on best practices, coding standards, and fostering a collaborative learning environment.",
        "Received the 'Employee of the Year' award, highlighting exceptional contributions, dedication, and impact on the team and company.",
      ],
      designation: "Software Engineer",
      year: "2021 - 2022",
    },
    {
      value: "freelance",
      company: "Freelance",
      responsibilities: [
        "Worked on a few static and dynamic websites using React.js with clients from UAE and Australia.",
      ],
      designation: "Freelance Frontend Engineer",
      year: "2020 - 2021",
    },
    {
      value: "reizend",
      company: "Reizend IT Consultants",
      responsibilities: [
        "Responsible for both frontend and backend development as well as DB corrections.",
        "Actively involved in the development of major modules in a Hospital Management System which played a critical role in the functioning of the application.",
      ],
      designation: "Junior Systems Engineer",
      year: "2019 - 2020",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="experience"
      className="h-full m-auto px-[3rem] pt-[5rem] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[1300px] relative z-[1]"
    >
      <h2 className="text-[25px] md:text-[32px] font-semibold sub-heading experience-sub-heading">
        Professional Experience
      </h2>
      <div className="flex gap-x-5 pt-5 mt-10">
        <Tabs defaultValue="fingent" orientation="vertical" className="w-full">
          <TabsList className="flex flex-wrap bg-transparent">
            {experiences.map((experience) => (
              <TabsTrigger value={experience.value}>
                {experience.company}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="pl-3 pt-[4rem] w-[100%] ">
            {experiences.map((experience) => (
              <TabsContent value={experience.value}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ul className="experience-list">
                    {experience.responsibilities.map((item) => (
                      <li className="mt-4">{item}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between pt-5">
                    <span>
                      <strong>Position: </strong> {experience.designation}
                    </span>
                    <span>{experience.year}</span>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
      <div className="absolute sm:block -bottom-[210%] -left-[20%] w-[8rem] h-[6rem] sm:w-[45rem] sm:h-[40rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
    </motion.div>
  );
};
