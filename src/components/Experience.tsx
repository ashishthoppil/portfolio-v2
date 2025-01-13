import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [ 
    {
      value: "dbiz",
      company: "Dbiz.ai",
      responsibilities: [
        "Worked on developing a RAG AI chatbot and helped enhance its performance and features.",
        "Collaborated with cross-functional teams, including designers, backend developers, and stakeholders, to implement UI/UX enhancements that improved user engagement.",
        "Analyzed and optimized frontend performance to enhance site speed and reduce loading times.",
      ],
      designation: "Frontend Analyst",
      year: "2024 - Present",
    },
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
      designation: "Senior Software Engineer",
      year: "2020 - 2022",
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
        <Tabs defaultValue="dbiz" orientation="vertical" className="w-full">
          <TabsList className="flex flex-wrap bg-transparent">
            {experiences.map((experience, index) => (
              <TabsTrigger
                key={index}
                value={experience.value}
                className="text-white bg-slate-900 rounded-none border-2 border-slate-900"
              >
                {experience.company}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="pl-3 pt-[6rem] sm:pt-[4rem] w-[100%] ">
            {experiences.map((experience, index) => (
              <TabsContent key={index} value={experience.value}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-y-5 sm:flex-row justify-between pt-5 sm:text-md mb-[50px]">
                    <span>
                      <strong>
                        <u>Position</u>: {experience.designation}
                      </strong>
                    </span>
                    <span>
                      <strong>
                        <u>Duration</u>: {experience.year}
                      </strong>
                    </span>
                  </div>
                  <ul className="experience-list">
                    {experience.responsibilities.map((item, i2) => (
                      <li key={i2} className="mt-4">
                        {item}
                      </li>
                    ))}
                  </ul>
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
