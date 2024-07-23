import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import SponsorCard from "@/components/ui/cards";

import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.jpg";
import postman from "@/public/partnersPage/postman.jpg";
import bobble from "@/public/partnersPage/bobble.webp";
import godspeed from "@/public/partnersPage/godSpeed.jpg";
import devfolio from "@/public/partnersPage/devfolio.webp";
import virtualProtocol from "@/public/partnersPage/virtualProtocol.jpg";
import nextgen from "@/public/partnersPage/nextgen.jpg";
import auth0 from "@/public/partnersPage/auth0.webp";
import taipy from "@/public/partnersPage/taipy.jpg";
import godaddy from "@/public/partnersPage/godaddy.webp";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Partners | HackByte",
  description:
    "Explore the invaluable support from our esteemed sponsors at HackByte – the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords:
    "Sponsors, Partners, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Collaboration, Innovation, Community Support, Technology Events",
  openGraph: {
    title: "Partners | HackByte",
    description:
      "Explore the invaluable support from our esteemed sponsors at HackByte – the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://hackbyte.in/partners",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const sponsorsData = [
  {
    sponsor: "MLH",
    category: "Platform Partner",
    sponsorimgsrc: mlh,
    site: "https://mlh.io",
  },
  {
    sponsor: "GitHub",
    category: "Gold Sponsor",
    sponsorimgsrc: github,
    site: "https://gh.io/hackbyte2",
  },
  {
    sponsor: "Postman",
    category: "Gold Sponsor",
    sponsorimgsrc: postman,
    site: "https://community.postman.com",
  },
  {
    sponsor: "Bobble Fan Store",
    category: "Merch Partner",
    sponsorimgsrc: bobble,
    site: "https://fanstore.bobble.ai",
  },
  {
    sponsor: "Godspeed Systems",
    category: "Silver Sponsor",
    sponsorimgsrc: godspeed,
    site: "https://godspeed.systems",
  },
  {
    sponsor: "Devfolio",
    category: "Platform Partner",
    sponsorimgsrc: devfolio,
    site: "https://devfolio.co",
  },
  {
    sponsor: "Virtual Protocol",
    category: "Bronze Sponsor",
    sponsorimgsrc: virtualProtocol,
    site: "https://www.virtuals.io/",
  },
  {
    sponsor: "NextGen",
    category: "Bronze Sponsor",
    sponsorimgsrc: nextgen,
    site: "https://nextgenglobalhub.github.io/opensourcecohort/",
  },
  {
    sponsor: "Auth0",
    category: "Track Sponsor",
    sponsorimgsrc: auth0,
    site: "http://hackp.ac/auth0",
  },
  {
    sponsor: "Taipy",
    category: "Track Sponsor",
    sponsorimgsrc: taipy,
    site: "https://hackp.ac/taipy-gettingstarted",
  },
  {
    sponsor: "Go Daddy Registry",
    category: "Track Sponsor",
    sponsorimgsrc: godaddy,
    site: "http://hackp.ac/godaddyregistry",
  },
];

const Partners = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col items-center min-h-screen 
          px-6 md:px-16 lg:px-20 2xl:px-32 py-40"
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-[#F5F0D8] text-[2rem] font-normal md:text-[5rem]">
            Partners
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p
              className="w-full lg:max-w-[80%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              We are proud to collaborate with visionary organizations that
              share our passion for innovation and technology. These esteemed
              partners play a crucial role in making GENESIS 4.0 a success.
            </p>
          </div>
        </div>

        <div
          className="w-full flex flex-col items-center gap-8 xl:gap-12"
        >
          <TitleSponsorCard />

          <div
            className="w-full xl:max-w-[95%] 2xl:max-w-[90%] grid grid-cols-1 
              md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12"
          >
            {sponsorsData.map((sponsor, index) => {
              return <SponsorCard key={index} index={index} {...sponsor} />;
            })}
          </div>
        </div>
      </div>

      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
            tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <FooterAnimation />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;
