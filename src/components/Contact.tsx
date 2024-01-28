import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div id="contct" className="h-full w-[700px] m-auto pb-[17rem] text-center">
      <div className="absolute -bottom-[290%] right-[5%] w-[33rem] h-[30rem] bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-1000"></div>
      <div className="absolute -bottom-[275%] left-[45%] w-[43rem] h-[40rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-[330%] left-[5%] w-[33rem] h-[30rem] bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      <h2 className="text-[32px] font-semibold ">Get in touch</h2>
      <p className="text-xl leading-7 pt-5">
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
