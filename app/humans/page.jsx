import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";

// Organizers
import bhavik from "@/public/humansPage/bhavik.jpg";
import samyak from "@/public/humansPage/samyak.jpeg";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

// export const metadata = {
//   title: "Humans | HackByte",
//   description:
//     "Meet the team behind HackByte 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
//   keywords:
//     "Humans, Team, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech",
//   openGraph: {
//     title: "Humans | HackByte",
//     description:
//       "Meet the team behind HackByte 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
//     url: "https://hackbyte.in/humans",
//     images:
//       "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
//     siteName: "HackByte - IIITDMJ Hackathon",
//     type: "website",
//     locale: "en_US",
//   },
// };

export default function Team() {
  const organizerData = [
    {
      name: "Anvi Chauhan",
      team: "Hospitality",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHE_Jm069VX12wo_IMG-20240617-WA0046-AnviChauhan-1-.jpg?auto=format,compress",
    },
    {
      name: "Garvit Arora",
      team: "Flying Squad",
      role: "",
      profilepic:"https://images.prismic.io/ieeemuj/ZnHEtZm069VX12wU_IMG_9438-GarvitArora.png?auto=format,compress",
    },
    {
      name: "Ishita Kaushik",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHEaJm069VX12wN_5967df4b-034d-4e36-8070-6a3e010eecf6-ISHITAKAUSHIK.jpeg?auto=format,compress",
      linkedin: "",
      twitter: "",
      github: "",
      instagram:"",
    },
    {
      name: "Sarah Sohaib",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHFbZm069VX12w7_DSCN4594-1--SarahSohaib.jpg?auto=format,compress",
    },
    {
      name: "Bhavya Jaggi",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnJi7Jm069VX13Sw_WhatsAppImage2024-06-19at01.11.15_d1c48614.jpg?auto=format,compress",
    },
    {
      name: "Akshan Aggarwal",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHGPJm069VX12xK_feb6f1f4-3d03-4f2c-9d96-a716155d6b7f-AkshanAggarwal.jpeg?auto=format,compress",
    },
    {
      name: "Vanshika Madan",
      team: "Crafts",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHGfZm069VX12xQ_IMG_20240613_004154-VanshikaMadan.jpg?auto=format,compress",
    },
    {
      name: "Soumya Prasad",
      team: "Finance",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHGuJm069VX12xZ_IMG-20240616-WA0017-SoumyaPrasad.jpg?auto=format,compress",
    },
    {
      name: "Samaksh Gupta",
      team: "WebDev",
      role: "",
      profilepic:"https://images.prismic.io/ieeemuj/ZnJjw5m069VX13S1_IMG-20240405-WA0024~2-SamakshGupta.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/samakshgupta04",
      github: "https://github.com/AwesomeSam9523/",
      instagram:"https://www.instagram.com/samaksh.gupta04?igsh=c252dTcwNjZldWRp",
    },
    {
      name: "Krishnav Kanoi",
      team: "WebDev",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnJu6Zm069VX13Uv_WhatsAppImage2024-06-19at00.43.32_c5367913.jpg?auto=format,compress",
    },
    {
      name: "Kanishka Bhatia",
      team: "WebDev",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHJC5m069VX12xt_WhatsAppImage2024-06-17at13.31.31_ff2d9755-KanishkaBhatia.jpg?auto=format,compress",
    },
    {
      name: "Tamanna Yadav",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHEBZm069VX12wA_IMG_20240617_153104-TamannaYadav.jpg?auto=format,compress",
      linkedin: "",
      twitter: "",
      github: "",
    },
    {
      name: "Sneha Agarwal",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHLi5m069VX12ys_IMG_20240613_174519-SnehaAgarwal.jpg?auto=format,compress",
    },
    {
      name: "Neil Gupta",
      team: "Finance",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHJUJm069VX12xv_IMG_6473-neilgupta.jpeg?auto=format,compress",
    },
    {
      name: "Vrishaan Taneja",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHJepm069VX12yE_WhatsAppImage2024-06-17at11.23.56-VrishaanTaneja.jpeg?auto=format,compress",
    },
    {
      name: "Prakhar Mahant",
      team: "Graphic Design",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHMypm069VX12zH_pfp.jpeg.jpg?auto=format,compress",
    },
    {
      name: "Aryan Verma",
      team: "Graphic Design",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHK5pm069VX12yj_WhatsAppImage2024-06-18at23.27.31_3a44c39a.jpg?auto=format,compress",
    },
    {
      name: "Gauri Goyal",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnJjKJm069VX13Sy_WhatsAppImage2024-06-19at02.43.18_efac9c58.jpg?auto=format,compress",
    },
    {
      name: "Ayush Garg",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHKm5m069VX12yg_20240229_000536-AyushGarg.jpg?auto=format,compress",
    },
    {
      name: "Salaj Singh Bisht",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHLL5m069VX12yn_IMG_20240416_161408-SalajBisht.jpg?auto=format,compress",
    },
    {
      name: "Tiya Chhabra",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHLUJm069VX12yo_2EE8C962-95C5-4FF9-B431-396066D59B90-TiyaChhabra.jpeg?auto=format,compress",
    },
    {
      name: "Prithviraj Kolekar",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHLr5m069VX12yu_AF3C3B1A-1D9E-4E13-A65D-22C53867084C-PrithviKolekar.jpeg?auto=format,compress",
    },
    {
      name: "Anushka Tiwari",
      team: "Crafts",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHL0pm069VX12yx_Snapchat-333359366-AnushkaTiwari.jpg?auto=format,compress",
    },
    {
      name: "Krissh Gera",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHL7Zm069VX12y1_30DFA577-9259-4C50-A64D-DD9403ADEA3F-KrisshGera.jpeg?auto=format,compress",
    },
    {
      name: "Aayushi Sabharwal",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHMD5m069VX12y6_IMG-20240613-WA0010-aayushisabharwal.jpg?auto=format,compresss",
    },
    {
      name: "Dishita Sharma",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHNDJm069VX12zO_Screenshot_2024-06-17-13-44-15-43_965bbf4d18d205f782c6b8409c5773a4-dishitasharma.jpg?auto=format,compress",
    },
    {
      name: "Anushka Agarwal",
      team: "Content",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHNK5m069VX12zS_Screenshot_2024-06-12-23-52-30-148_com.instagram.android-edit-AnushkaAgarwal.jpg?auto=format,compresss",
    },
    {
      name: "Dreesty Jaiswal",
      team: "Content",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHNV5m069VX12zY_IMG_20240613_183802-DreestyJaiswal.jpg?auto=format,compress",
    },
    {
      name: "Avya Sharma",
      team: "Content",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHNf5m069VX12ze_WhatsAppImage2024-06-17at1.16.51PM-AvyaSharma.jpeg?auto=format,compress",
    },
    {
      name: "Liza Mariam Ninan",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHNopm069VX12zj_20240613_155816-LizaNinan.jpg?auto=format,compress",
    },
    {
      name: "Shivang Dutta",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHNyZm069VX12zo_IMG_4931-ShivangDutta.jpg?auto=format,compress",
    },
    {
      name: "Aarushi Shreevastava",
      team: "Hospitality",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHOG5m069VX12zt_Snapchat-1771076023-AarushiShreevastava.jpg?auto=format,compress",
    },
    {
      name: "Vaibhav Verma",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHOOpm069VX12zw_DSCN4431-VaibhavVerma.JPG?auto=format,compress",
    },
    {
      name: "Yash Paliwal",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHOVZm069VX12zy_IMG_20240613_233773-Yash.jpg?auto=format,compress",
    },
    {
      name: "Reet Ginotra",
      team: "Finance",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHOlZm069VX12z7_IMG-20240222-WA0285-reet_priyaGinotra.jpg?auto=format,compress",
    },
    {
      name: "Samarth Ruia",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnLo8Zm069VX14yr_WhatsAppImage2024-06-19at18.25.12_4a0c0fbc.jpg?auto=format,compress",
    },
    {
      name: "Vibhesh Mishra",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHPv5m069VX120i_WhatsAppImage2024-06-15at22.32.22-VibheshMishra.jpeg?auto=format,compress",
    },
    {
      name: "Mritunjay Singh",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHP_5m069VX120v_Screenshot_2024-06-17-10-16-04-93_6012fa4d4ddec268fc5c7112cbb265e7-SangyaSingh.jpg?auto=format,compress",
    },
    {
      name: "Parth Bajaj",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHQMZm069VX1205_profilePic1crop-ParthBajaj.jpg?auto=format,compress",
    },
    {
      name: "Anushka Agarwal",
      team: "Crafts",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHQ2pm069VX121J_IMG_7436-ANUSHKAAGARWAL.jpg?auto=format,compress",
    },
    {
      name: "Rudransh Dwivedi",
      team: "Marketing",
      role: "",
      profilepic:  "https://images.prismic.io/ieeemuj/ZnHQ9Zm069VX121L_IMG_5284-RudranshDwivedi.jpeg?auto=format,compress",
    },
    {
      name: "Gauransh Gupta",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHR7Zm069VX121p_WhatsAppImage2024-06-10at15.58.44_8a20d1c6-GauranshGupta.png?auto=format,compress",
    },
    {
      name: "Yash Sanjeev Thapliyal",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHSFJm069VX121q_IMG-20240614-WA0022-YashThapliyal.jpg?auto=format,compress",
    },
    {
      name: "Vansh Devgun",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHSOZm069VX121v_PicsArt_05-10-11.12.50_Original-VANSHDEVGUN.jpeg?auto=format,compress",
    },
    {
      name: "Divyansh Dobhal",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHSY5m069VX121z_FullSizeRender-DivyanshDobhal.jpeg?auto=format,compress",
    },
    {
      name: "Agrim Jain",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHS3pm069VX122P_mycropedimage-AgrimJain.jpg?auto=format,compress",
    },
    {
      name: "Vansh Saini",
      team: "Social Media",
      role: "",
      profilepic:  "https://images.prismic.io/ieeemuj/ZnHUgpm069VX123e_04109439-D93C-41E0-8FC8-5D843ED4B2D6-Vanshsaini.jpeg?auto=format,compress",
    },
    {
      name: "Khushboo Aggarwal",
      team: "Hospitality",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHY_5m069VX125P_IMG_6360.HEIC?auto=format,compress",
    },
    {
      name: "Aryan Goyal",
      team: "Social Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnJjCZm069VX13Sx_WhatsAppImage2024-06-19at02.42.56_e2592b28.jpg?auto=format,compress",
    },
    {
      name: "Ananya Singh",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHUHJm069VX123S_IMG_20240617_162632-AnanyaSingh.jpg?auto=format,compress",
    },
    {
      name: "Vinayak Jajoo",
      team: "Graphic Design",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnJjR5m069VX13Sz_IMG_6445.HEIC?auto=format,compress",
    },
    {
      name: "Kavya Gupta",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHVHZm069VX123t_IMG_7128-SidharthMonga.jpeg?auto=format,compress",
    },
    {
      name: "Waibhavi Dhatrak",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHVTZm069VX123y_IMG-20240613-WA0000-AksharaDhatrak.jpg?auto=format,compress",
    },
    {
      name: "Paridhi Dua",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHVbpm069VX1235_SAVE_20231104_221506-ParidhiDua.jpg?auto=format,compress",
    },
    {
      name: "Rohit Ganguly",
      team: "WebDev",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHVuJm069VX124B_WhatsAppImage2024-06-16at17.43.23-RG.jpeg?auto=format,compress",
    },
    {
      name: "Arisha Chadha",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHV05m069VX124E_IMG-20240616-WA0043-ArishaChadha.jpg?auto=format,compress",
    },
    {
      name: "Reetikesh Choudhury",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnJi0Jm069VX13Su_WhatsAppImage2024-06-19at00.57.08_713e498f.jpg?auto=format,compress",
    },
    {
      name: "Nikunj Khandelwal",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHWJ5m069VX124S_IMG-20240407-WA0015-2--Nikunjkhandelwal.jpg?auto=format,compress",
    },
    
  ];

  const executiveData = [
    {
      name: "Rishi Joshi",
      role: "Convenor",
      profilepic: "https://images.prismic.io/ieeemuj/d6afed2e-b0ba-484a-a625-6ce8d905d957_rishipic.webp?auto=compress,format",
      linkedin: "https://www.linkedin.com/in/rishi-joshi-924882200",
      twitter: "",
      github: "https://github.com/tangorishi",
      instagram: "https://instagram.com/wtfrishiiiii?igshid=ZDc4ODBmNjlmNQ==",
    },
    {
      name: "Pranav Bhardwajk Bhargava",
      role: "Event Coordinator",
      profilepic: "https://images.prismic.io/ieeemuj/ZqoHjh5LeNNTxpJj_pranavbhaiya.png?auto=format,compress",      linkedin: "https://www.linkedin.com/in/sammybh6/",
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
      role: "Head of Department- Computer Science and Engineering(AIML)",
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
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 pt-40 flex-grow"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
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
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 min-[300px]:text-lg sm:text-2xl text-xl leading-7 font-bold text-center border-none m-2 min-w-[100px] rounded-full hover:bg-blue-900"
            >
              Executives
            </TabsTrigger>
            <TabsTrigger
              value="Organizers"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 min-[300px]:text-lg sm:text-2xl text-xl leading-7 font-bold text-center border-none m-2 min-w-[100px] rounded-full hover:bg-blue-900"
            >
              Organizers
            </TabsTrigger>
            <TabsTrigger
              value="Faculty"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 min-[300px]:text-lg sm:text-2xl text-xl leading-7 font-bold text-center border-none m-2 min-w-[100px] rounded-full hover:bg-blue-900"
            >
              Faculty
            </TabsTrigger>
          </TabsList>


          <TabsContent value="Executives">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10 pb-40"
            >
              {executiveData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Organizers">
            <div className="space-y-10 pb-40">
              {/* Social Media Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Social Media Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Social Media").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>

              {/* Curations Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Curations Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Curations").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>

              {/* Logistics Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Logistics Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Logistics").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>

              {/* Events Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Events Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Events").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Marketing Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Marketing Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Marketing").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>

              {/* Corporate Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Corporate Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Corporate").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Web Dev Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Web Development Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "WebDev").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Hospitality Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Hospitality Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Hospitality").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              
              {/* Crafts Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Crafts Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Crafts").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Flying Squad Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Flying Squad</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Flying Squad").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Content Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Content Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Content").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              
              {/* GD Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Graphic Design Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Graphic Design").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Media Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Media & Coverage Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Media").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Finance Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Finance Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "Finance").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
                                                                                                              
              

              {/* Add more sections as needed */}
            </div>
          </TabsContent>


          <TabsContent value="Faculty">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10 pb-60"
            >
              {facultyData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
      {/* <div className="bg-black w-full h-full py-24 lg:py-40">
      </div> */}
    </>
  );
}
