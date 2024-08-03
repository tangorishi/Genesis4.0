import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

import leftLeaf from "@/public/schedulePage/leftLeaf.svg";
import rightLeaf from "@/public/schedulePage/rightLeaf.svg";
import bb from "@/public/bb.png";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Schedule | HackByte",
  description:
    "Check out the schedule for HackByte! Stay updated with the timeline of events and activities happening during IIIT Jabalpur's hackathon.",
  keywords:
    "Hackathon schedule, Timeline, Events, IIITDMJ, Hackbyte, Coding, Programming, Tech",
  openGraph: {
    title: "Schedule | HackByte",
    description:
      "Check out the schedule for HackByte! Stay updated with the timeline of events and activities happening during IIIT Jabalpur's hackathon.",
    url: "https://hackbyte.in/schedule",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Schedule() {
  const day1 = [
    {
      event: "Check in",
      time: "2:30 PM - 5:00 PM",
      duration: "150mins",
    },
    {
      event: "Opening Ceremony",
      time: "5:15 PM - 6:30 PM",
      duration: "75mins",
    },
    {
      event: "Logitech Keynote",
      time: "6:00 PM - 6:30 PM",
      duration: "30mins",
    },
    {
      event: "Hacking Begins",
      time: "7:00 PM",
      duration: "NA",
    },
    {
      event: "Dinner",
      time: "9:30 PM - 10:30 PM",
      duration: "60mins",
    },
  ];

  const day2 = [
    {
      event: "Logitech Workshop",
      time: "12:00 AM - 1:00 AM",
      duration: "60mins",
    },
    {
      event: "Mentorship Round 1",
      time: "1:30AM",
      duration: "NA",
    },
    {
      event: "Checkpoint 1/4",
      time: "2:00 AM",
      duration: "NA",
    },
    {
      event: "Logitech Event-Blind Type and Postman Trivia",
      time: "2:00 AM - 3:00 AM",
      duration: "60mins",
    },
    {
      event: "Midnight Snack",
      time: "4:00 AM",
      duration: "NA",
    },
    {
      event: "Breakfast",
      time: "7:30 AM - 8:30 AM",
      duration: "60mins",
    },
    {
      event: "Virtual Protocol Session",
      time: "9:15 AM - 9:45 AM",
      duration: "30mins",
    },
    {
      event: "GitHub Copilot by Sagar",
      time: "10:15 AM - 11:00 AM",
      duration: "45mins",
    },
    {
      event: "Postman Trivia and Logitech Event-Blind Type",
      time: "11:00 AM - 12:00 PM",
      duration: "60mins",
    },
    {
      event: "Lunch",
      time: "12:00 PM - 1:00 PM",
      duration: "60mins",
    },
    {
      event: "Checkpoint 2/4",
      time: "2:00 PM",
      duration: "NA",
    },
    {
      event: "Judging Round 1",
      time: "2:00 PM - 4:00 PM",
      duration: "120mins",
    },
    {
      event: "Codespaces session by Sanskriti",
      time: "4:00 PM - 5:30 PM",
      duration: "90mins",
    },
    {
      event: "Dinner",
      time: "7:00 PM - 8:15 PM",
      duration: "75mins",
    },
    {
      event: "Checkpoint 3/4",
      time: "10:00 PM",
      duration: "NA",
    },
  ];

  const day3 = [
    {
      event: "Postman session by Aanchal",
      time: "12:00 AM - 1:00 AM",
      duration: "60mins",
    },
    {
      event: "Menorship Round 2",
      time: "1:00 AM",
      duration: "NA",
    },
    {
      event: "Games",
      time: "2:00 AM - 3:00 AM",
      duration: "60mins",
    },
    {
      event: "Checkpoint 4/4",
      time: "3:00 AM",
      duration: "NA",
    },
    {
      event: "Midnight Snack",
      time: "3:30 AM",
      duration: "NA",
    },
    {
      event: "Soft Deadline",
      time: "5:30 AM",
      duration: "NA",
    },
    {
      event: "Hard Deadline",
      time: "7:00 AM",
      duration: "NA",
    },
    {
      event: "Breakfast",
      time: "7:30 AM - 8:30 AM",
      duration: "60mins",
    },
    {
      event: "Judging Round 2",
      time: "9:00 AM",
      duration: "NA",
    },
    {
      event: "Lunch",
      time: "12:00 PM - 1:10 PM",
      duration: "70mins",
    },
    {
      event: "Closing Ceremony",
      time: "2:15 PM",
      duration: "NA",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-custom-gradient flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 2xl:px-48 py-40"
      >
        <div className="w-full flex flex-col gap-6 xl:gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F5F0D8] font-normal text-[2.25rem] md:text-[5rem]">
              Our Upcoming Events
            </p>
            <p
              className="w-full xl:max-w-[80%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:gap-6 md:grid-cols-2 
            xl:grid-cols-3 pt-6 md:px-0 md:py- sm:px-20 lg:gap-0 lg:py-2 lg:px-6"
        >
          {/* Event 1 */}
          <Dialog>
            <DialogTrigger>
            <div className="flex justify-center items-center min-h-screen">
              <div
                className="flex flex-col justify-start items-center w-[300px] h-[560px] sm:h-[500px] sm:w-[380px] sm:gap-5 md:w-[300px] md:h-[520px] gap-4 md:gap-6 px-4 py-4 md:px-2 md:py-6 cursor-pointer rounded-[4px] border border-[#E5FFF1] hover:scale-[1.01] transition-transform duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={bb}
                      alt="Event poster "
                      className="w-22 h-30 sm:w-60 sm:h-80 md:w-30 md:h-45 lg:w-60 lg:h-80"
                    />
                  </div>
                  <p
                    className="font-medium text-[1.5rem] md:text-[1.5rem]
                    sm:text-[1.75rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Breaking Bug
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </p>
                </div>

                <div className="flex gap-4 mt-0">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                    Know more
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200">
                    Register
                  </button>
                </div>
              </div>
            </div>
            </DialogTrigger>

    
          </Dialog>

          {/*Event 2*/}
          <Dialog>
            <DialogTrigger>
            <div className="flex justify-center items-center min-h-screen">
              <div
               className="flex flex-col justify-start items-center w-[300px] h-[560px] sm:h-[500px] sm:w-[380px] sm:gap-5 md:w-[300px] md:h-[520px] gap-4 md:gap-6 px-4 py-4 md:px-2 md:py-6 cursor-pointer rounded-[4px] border border-[#E5FFF1] hover:scale-[1.01] transition-transform duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={bb}
                      alt="leaf"
                       className="w-25 h-30 sm:w-60 sm:h-80 md:w-30 md:h-45 lg:w-60 lg:h-80"
                    />
                  </div>
                  <p
                  className="font-medium text-[1.5rem] md:text-[1.5rem]
                    sm:text-[1.75rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Breaking Bug
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </p>
                </div>

                <div className="flex gap-4 mt-0">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                    Know more
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200">
                    Register
                  </button>
                </div>
              </div>
              </div>
            </DialogTrigger>
       
          </Dialog>

          {/* Day 3 */}
          <Dialog>
            <DialogTrigger>
            <div className="flex justify-center items-center min-h-screen">
              <div
              className="flex flex-col justify-start items-center w-[300px] h-[560px] sm:h-[500px] sm:w-[380px] sm:gap-5 md:w-[300px] md:h-[520px] gap-4 md:gap-6 px-4 py-4 md:px-2 md:py-6 cursor-pointer rounded-[4px] border border-[#E5FFF1] hover:scale-[1.01] transition-transform duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={bb}
                      alt="leaf"
                      className="w-25 h-30 sm:w-60 sm:h-80 md:w-30 md:h-45 lg:w-60 lg:h-80"
                    />
                  </div>
                  <p
                    className="font-medium text-[1.5rem] md:text-[1.5rem]
                    sm:text-[1.75rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Breaking Bug
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </p>
                </div>

                <div className="flex gap-4 mt-0">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                    Know more
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200">
                    Register
                  </button>
                </div>
              </div>
              </div>
            </DialogTrigger>

          </Dialog>
        </div>
      </div>

      {/*<div className="bg-black w-full h-full py-24 lg:py-40">
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
      </div> */}

      <Footer />
    </>
  );
}
