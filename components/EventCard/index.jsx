import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import Image from "next/image";
import bb from "@/public/bb.png";

function EventCard() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex justify-center items-center">
          <div
            className="flex flex-col justify-start items-center w-[18rem] h-[32rem] sm:w-[15rem] sm:h-[30rem]
            md:w-[16rem] md:h-[32rem] xl:w-[18rem] xl:h-[35rem] gap-4 md:gap-6 cursor-pointer rounded-[4px] border
            border-[#E5FFF1] transition-transform duration-200 ease-in-out"
            style={{
              background:
                "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
            }}
          >
            <div className="flex flex-col items-center justify-start gap-1 p-4 pb-0">
              <div className="flex justify-start items-start gap-0">
                <Image
                  src={bb}
                  alt="Event poster "
                  className="w-full"
                />
              </div>
              <p
                className="font-medium text-[1.5rem] sm:text-[1.5rem] md:text-[1.75rem]"
                style={{
                  background:
                    "linear-gradient(80deg, #6CC6EF 6.67%, #72CFFA 28.13%, #74D3FF 64.87%, #6CC6EF 95.66%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Breaking Bug
              </p>
              <p className="text-white text-[0.85rem] sm:text-[0.85rem] md:text-[1rem]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
            </div>

            <div className="flex gap-4 mt-0 pb-4 text-[0.85rem] sm:text-[0.85rem] md:text-[1rem]">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                Know more
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  )
}

export default EventCard;