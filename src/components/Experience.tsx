import resume from "../assets/documents/resume.pdf";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [ 
    {
      company: "Dbiz.ai",
      responsibilities: "Worked on developing a RAG AI chatbot and helped enhance its performance and features. Collaborated with cross-functional teams, including designers, backend developers, and stakeholders, to implement UI/UX enhancements that improved user engagement. Analyzed and optimized frontend performance to enhance site speed and reduce loading times.",
      designation: "Analyst",
      year: "09/2024 - 01/2025",
      tech: ['JavaScript', 'TypeScript', 'React.js', 'Next.js']
    },
    {
      company: "Fingent",
      responsibilities: "Spearheading the development of responsive and user-friendly interfaces using React.js adhering to best practices, performance optimization, and accessibility standards in frontend code. Conducting periodic code review providing constructive feedback to colleagues, promoting knowledge sharing, and contributing to continuous improvement. Collaborating with the backend development team, at the same time contributing to Laravel-based backend tasks. Actively participating in discussions to explore diverse problem-solving approaches and perspectives within the team.",
      designation: "Software Engineer",
      year: "07/2022 - 08/2024",
      tech: ['JavaScript', 'TypeScript', 'React.js', 'Node.js']
    },
    {
      company: "Polus Solutions",
      responsibilities: 
        `Led the development of pixel-perfect websites and web applications, ensuring a high standard of visual and functional quality.,
        Held a key role within the team, being relied upon heavily for critical tasks and projects.
        Mentored junior team members, providing guidance on best practices, coding standards, and fostering a collaborative learning environment.
        Received the 'Employee of the Year' award, highlighting exceptional contributions, dedication, and impact on the team and company.`,
      
      designation: "Software Developer",
      year: "06/2021 - 07/2022",
      tech: ['JavaScript', 'React.js', 'PHP', 'Wordpress']
    },
    {
      company: "Reizend IT Consultants",
      responsibilities: 
        `Responsible for both frontend and backend development as well as DB corrections.
        Actively involved in the development of major modules in a Hospital Management System which played a critical role in the functioning of the application.`,
      designation: "Junior Systems Engineer",
      year: "07/2019 - 08/2020",
      tech: ['PHP', 'JavaScript', 'HTML5']
    },
  ];

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
    <motion.div
      id="experience"
      className="flex flex-col gap-5 pt-[2rem] bg-black w-full"
    >
      <div className="flex flex-col gap-5 w-full">
        {experiences.map((item) => <div className="flex flex-col md:flex-row gap-10 group hover:bg-[#ffffff2b] duration-500 w-full rounded-[10px] px-5 py-5">
          <div className="flex items-start text-zinc-700 font-semibold group-hover:text-white duration-500 w-full md:w-[25%]">
            {item.year}
          </div>
          <div className="flex flex-col gap-5 text-white  items-start w-full md:w-[75%]">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold">{item.designation} &middot; {item.company} </h1>
              <ExternalLinkIcon />
            </div>
            <div className="text-[14px]">
              {item.responsibilities}
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              {item.tech.map((element, index) => <span key={index} className="px-2 pb-[2px] rounded-full bg-gray-600 text-white text-[12px]">{element}</span>)}
            </div>
          </div>
        </div>)}
        <button onClick={resumeDownload} className="flex items-center gap-2 text-white font-semibold text-[18px]">View Resume <ExternalLinkIcon /></button>
      </div>
    </motion.div>
  );
};
