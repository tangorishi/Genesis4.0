import { GridImage, Carousel } from "@/components/ImageGrid";

// export const metadata = {
//   title: "Gallery | Genesis IEEE",
//   description:
//     "Discover memorable moments from past HackByte events at IIITDMJ, explore images, and feel the excitement of the coding community.",
//   keywords:
//     "Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Gallery, Photos, Videos, Past Events, Previous Events",
//   openGraph: {
//     title: "Gallery | HackByte",
//     description:
//       "Discover memorable moments from past HackByte events at IIITDMJ, explore images, and feel the excitement of the coding community.",
//     url: "https://hackbyte.in/gallery",
//     images:
//       "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
//     siteName: "HackByte - IIITDMJ Hackathon",
//     type: "website",
//     locale: "en_US",
//   },
// };

const Gallery = () => {
  return (
    <>
      <div className="bg-custom-gradient min-h-screen w-full p-4 md:px-8 xl:px-4 lg:px-8 py-40">
        <p className="text-[#fffbe7] font-normal text-[4rem] md:text-[4.5rem] lg:text-[6rem] text-center pt-4 xl:pt-[100px] pb-8">
          Our Memories
        </p>
        <Carousel />
        <div className="flex flex-col justify-center min-h-screen p-4 md:px-8 lg:px-2 py-5 pt-[150px]">
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <p className="text-[rgb(255,250,225)] font-normal text-[2.25rem] md:text-[5rem]">
                Gallery
              </p>
              <p className="w-full xl:max-w-[75%] text-[#C3C3C3] font-[Inter] text-center font-normal text-[1.25rem] md:text-[1.5rem] pb-8">
                Explore our gallery of memorable moments from HackByte events at
                IIITDMJ. Immerse in the vibrant coding community, witness
                innovation, and get inspired.
              </p>
            </div>
          </div>
          <GridImage />
        </div>
      </div>
    </>
  );
};
export default Gallery;
