import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Footer } from "flowbite-react";

import logo from "../../assets/images/logo-light.png";

export const CustomFooter = () => {
  return (
    <div className="flex justify-center">
      <Footer container className="w-[800px]">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand href="/" src={logo} className="w-[75px]" alt="Logo" />
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
  );
};
