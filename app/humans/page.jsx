import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";

// Organizers
import bhavik from "@/public/humansPage/bhavik.jpg";
import samyak from "@/public/humansPage/samyak.jpeg";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Humans | HackByte",
  description:
    "Meet the team behind HackByte 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
  keywords:
    "Humans, Team, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech",
  openGraph: {
    title: "Humans | HackByte",
    description:
      "Meet the team behind HackByte 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
    url: "https://hackbyte.in/humans",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Team() {
  const organizerData = [
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },

  ];

  const executiveData = [
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },

  ];

  const facultyData=[
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },
    {
      name: "Bhavik Agrawal",
      role: "Event Coordinator",
      profilepic: bhavik,
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: samyak,
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    },

  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-custom-gradient flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 py-40"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <div
              className="w-fit rounded-full 
                border border-[#D1CAC7] px-4 py-1 mb-3"
            >
              <p
                className="w-full text-[#C3C3C3] font-[Inter] 
                  text-center font-normal text-[1.25rem] tracking-[0.0625rem]"
              >
                TEAM GENESIS
              </p>
            </div>
            <p
              className="text-[#F5F0D8] text-center text-[2.5rem] font-normal 
                md:text-[4rem] xl:text-[5rem] md:leading-[4.5rem] xl:leading-[5.25rem]"
            >
              Unveiling the minds behind
              <br /> Genesis
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="Executives"
          className="flex flex-col justify-center items-center text-white mt-4 md:mt-12"
        >
          <TabsList className="mb-8 md:mb-16 w-full max-w-3xl mx-auto border border-white rounded-full min-w-[24rem]">
            <TabsTrigger
              value="Executives"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 min-[300px]:text-lg sm:text-2xl text-xl leading-7 font-bold text-center border-none m-2 min-w-[100px] rounded-full"
            >
              Executives
            </TabsTrigger>
            <TabsTrigger
              value="Organizers"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 min-[300px]:text-lg sm:text-2xl text-xl leading-7 font-bold text-center border-none m-2 min-w-[100px] rounded-full"
            >
              Organizers
            </TabsTrigger>
            <TabsTrigger
              value="Faculty"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 min-[300px]:text-lg sm:text-2xl text-xl leading-7 font-bold text-center border-none m-2 min-w-[100px] rounded-full"
            >
              Faculty
            </TabsTrigger>
          </TabsList>


          <TabsContent value="Executives">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {executiveData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Organizers">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {organizerData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Faculty">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {facultyData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* <div className="bg-black w-full h-full py-24 lg:py-40">
      </div> */}
      <Footer />
    </>
  );
}
