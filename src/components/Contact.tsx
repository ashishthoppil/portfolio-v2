import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="h-full sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px] m-auto py-[10rem] sm:py-[25rem] px-[3rem] text-center"
    >
      <div className="absolute -bottom-[290%] right-[15%] w-[6rem] h-[5rem] sm:w-[33rem] sm:h-[30rem] bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-1000"></div>
      <div className="absolute  sm:block -bottom-[275%] left-[45%] w-[5rem] h-[4rem] sm:w-[43rem] sm:h-[40rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute sm:block -bottom-[330%] left-[5%] w-[7rem] h-[5rem] sm:w-[33rem] sm:h-[30rem] bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      <h2 className="text-[25px] md:text-[32px] font-semibold ">
        Get in touch
      </h2>
      <p className="text-base leading-6 md:text-[18px] md:leading-7 md:pt-[1rem] lg:text-xl lg:leading-7  pt-5">
        Whether it's official or just casual, I'll try my best to get back to
        you!
      </p>
      <Button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "mailto:ashishthoppil23@gmail.com";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="mt-5"
      >
        <EnvelopeOpenIcon className="mr-2" /> Email me
      </Button>
    </div>
  );
};
