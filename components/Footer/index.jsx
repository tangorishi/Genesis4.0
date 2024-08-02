import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import genesisLogo from "./../../public/footer/WHITE TEXT .png";
import ieeeSBLogo from "./../../public/footer/ieee sb white logo.png";
import ieeeCSLogo from "./../../public/footer/IEEE CS WHITE LOGO.png";
import ieeeWIELogo from "./../../public/footer/ieee wie white logo.png";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 h-auto flex flex-col px-4 md:px-10 xl:px-28 overflow-hidden p-8"
      style={{
        backgroundImage: "url('/footer/bgfooter.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3">
          <img
            src={genesisLogo.src}
            alt="Genesis Logo"
            className="w-80 h-auto mb-4"
          />
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <img
              src={ieeeCSLogo.src}
              alt="IEEE CS Logo"
              className="h-12 w-auto"
            />
            <img
              src={ieeeSBLogo.src}
              alt="IEEE SB Logo"
              className="h-12 w-auto"
            />
            <img
              src={ieeeWIELogo.src}
              alt="IEEE WIE Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>

        <div className="hidden lg:block w-px bg-white h-40 mx-4"></div>

        <div className="flex flex-col items-center justify-center text-white lg:w-1/3 lg:px-4">
          <ContactInfo
            name="Rishi Joshi"
            phone="+91 95699 13103"
            role="(Chairperson-IEEE CS MUJ)"
          />
          <ContactInfo
            name="Lakshita Agarwal"
            phone="+91 93129 41940"
            role="(Chairperson-IEEE SB MUJ)"
          />

          <ContactInfo
            name="Ananta Taneja"
            phone="+91 95909 28296"
            role="(Chairperson-IEEE WIE MUJ)"
          />
        </div>

        <div className="hidden lg:block w-px bg-white h-40 mx-4"></div>

        <div className="flex flex-col items-center lg:items-end text-white mt-8 lg:mt-0 lg:w-1/3 lg:px-4">
          <WebsiteLink name="IEEE CS WEBSITE" href="https://cs.ieeemuj.com/" />
          <WebsiteLink name="IEEE SB WEBSITE" href="https://ieeemuj.com/" />
          <WebsiteLink name="IEEE WIE WEBSITE" href="https://wie.ieeemuj.com/" />
        </div>
      </div>

      <div className="w-full h-px bg-white my-8"></div>

      <div className="flex justify-center items-center flex-wrap">
        <InstagramLink
          name="Genesis"
          href="https://www.instagram.com/genesismuj/"
        />
        <InstagramLink
          name="IEEE CS"
          href="https://www.instagram.com/ieeecs_muj/"
        />
        <InstagramLink
          name="IEEE SB"
          href="https://www.instagram.com/ieeemuj/?igshid=NjIwNzIyMDk2Mg%3D%3D"
        />
        <InstagramLink
          name="IEEE WIE"
          href="https://www.instagram.com/ieee.wiemuj/?igshid=NjIwNzIyMDk2Mg%3D%3D"
        />
      </div>
    </div>
  );
};

const ContactInfo = ({ name, phone, role }) => (
  <div className="mb-4 text-center">
    <p className="text-lg font-semibold">{name}</p>
    <p className="text-sm">{phone}</p>
    <p className="text-xs">{role}</p>
  </div>
);

const WebsiteLink = ({ name, href }) => (
  <Link
    href={href}
    className="flex items-center text-white mb-4 hover:underline"
  >
    {name}
  </Link>
);

const InstagramLink = ({ name, href }) => (
  <Link
    href={href}
    className="flex items-center text-white hover:text-gray-300 transition-colors w-1/2 pl-[16%] sm:pl-0 sm:w-1/4 sm:justify-center"
  >
    <InstagramLogoIcon className="w-6 h-6 mr-2" />
    <span>{name}</span>
  </Link>
);

export default Footer;
