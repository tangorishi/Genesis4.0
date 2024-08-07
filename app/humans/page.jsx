import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";

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
    {
      name: "Udayan Pawar",
      team: "WebDev",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLVx5LeNNTwuma_UdayanPawarheadoftechprojectsandwebdev.jpeg?auto=format,compress",
      instagram:"https://www.instagram.com/uday.aan?igsh=MWxxY2F2d2VjbG9tcQ%3D%3D&utm_source=qr",
    },
    {
      name: "Arjun Malhotra",
      team: "WebDev",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLBR5LeNNTwule_ArjunMalhotra_JointHead_TechnicalandWebdev.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/arjun-malhotra-a90325217/",
      github: "https://github.com/iamarjunm",
      instagram:"https://www.instagram.com/iamarjun.m/",
    },
    {
      name: "Ridhi Pahuja",
      team: "WebDev",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoV5Nh5LeNNTwxJI_RidhiPahuja_jointheadoftechnical%26webdev.jpg?auto=format,compress",
      instagram:"https://www.instagram.com/ridhi_pahujaa/",
    },
    {
      name: "Janvi Chawla",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLMx5LeNNTwul6_JanviChawlaHeadofPrograms.PNG?auto=format,compress",
    },
    {
      name: "Vibhas Aggarwal",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLWR5LeNNTwumb_VibhasAggarwal_JointHeadofPrograms.jpg?auto=format,compress",
    },
    {
      name: "Aaryan Bhatia",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK1R5LeNNTwulV_AaryanBhatia_SB.jpg?auto=format,compress",
    },
    {
      name: "Yash Srivastava",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLXB5LeNNTwume_YashSrivastava_JointHead_Curations.jpg?auto=format,compress",
    },
    {
      name: "Neha Joshi",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLQR5LeNNTwumF_NehaJoshi_Head_CommunityRelations.jpg?auto=format,compress",
    },
    {
      name: "Tanisha Mathur",
      team: "Social Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLVh5LeNNTwumZ_TanishaMathur_Jointhead_CommunityRelations.jpeg?auto=format,compress",
    },
    {
      name: "Krishna Chaturvedi",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLOR5LeNNTwul__krishna_head_media.jpg?auto=format,compress",
    },
    {
      name: "Pranav Joshi",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLRB5LeNNTwumI_PranavJoshi_JointHead_Media.jpg?auto=format,compress",
    },
    {
      name: "Niyati Chaurasia",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLQh5LeNNTwumG_NiyatiChaurasia_Head_promotions.jpg?auto=format,compress",
    },
    {
      name: "Sarah Nayyar",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLSR5LeNNTwumO_SarahNayyar_jointhead_promotions.jpg?auto=format,compress",
    },
    {
      name: "Gayatri Negi",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLLR5LeNNTwulz_GayatriNegi_HeadofLogistics_IEEESB.jpg?auto=format,compress",
    },
    {
      name: "Eshaan",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLKh5LeNNTwulw_ESHAAN_JOINTHEAD_LOGISTICS.jpg?auto=format,compress",
    },
    {
      name: "Aditya Singh",
      team: "Content",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK1x5LeNNTwulX_AdityaSinghHeadEditorial.jpg?auto=format,compress",
    },
    {
      name: "Maanya Gusain",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLPx5LeNNTwumD_MaanyaGusain_JointHead_Editorial.jpg?auto=format,compress",
    },
    {
      name: "Krish Jaiswal",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLOB5LeNNTwul-_krishjaiswal_head_corporateaffairs.HEIC?auto=format,compress",
    },
    {
      name: "Devansh Kothari",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLJh5LeNNTwuls_DevanshKothari_JointHead_CorporateAffairs.jpeg?auto=format,compress",
    },
    {
      name: "Shashank Bharath",
      team: "Graphic Design",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLTR5LeNNTwumS_ShashankBharath_Head_GD.jpg?auto=format,compress",
    },
    {
      name: "Shreeya Sahai",
      team: "Graphic Design",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLTx5LeNNTwumT_ShreeyaSahai_Joint_Head_GD.jpg?auto=format,compress",
    },
    {
      name: "Pearl Katoch",
      team: "Social Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpGbzR5LeNNTxIE1_Pearl.JPG?auto=format,compress",
    },
    {
      name: "Mehul Bhardwaj",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpJI7h5LeNNTxITl_WhatsAppImage2024-07-13at14.58.15.jpeg?auto=format,compress",
    },    
    {
      name: "Bhumi Kumari",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpJCHB5LeNNTxITK_WhatsAppImage2024-07-13at14.04.51.jpeg?auto=format,compress",
    },
    {
      name: "Shubh Khandelwal",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpJCeh5LeNNTxITM_WhatsAppImage2024-07-13at11.23.49.jpeg?auto=format,compress",
    },
    {
      name: "Soumya Nayak",
      team: "Finance",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLVR5LeNNTwumX_soumya_seniorcoordinator_sm.jpg?auto=format,compress",
    },
    {
      name: "Smarya",
      team: "Social Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLUh5LeNNTwumV_SmaryaNarangseniorcoordinatorsocialmedia.PNG?auto=format,compress",
    },
    {
      name: "Thanya",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLXB5LeNNTwumd_VSThanya_seniorcoordinator_Socialmedia.jpg?auto=format,compress",
    },
    {
      name: "Isha Agarwal",
      team: "Social Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpGe8B5LeNNTxIFl_WhatsAppImage2024-07-13at02.03.01.jpeg?auto=format,compress",
    },
    {
      name: "Priyanshi",
      team: "Hospitality",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLRR5LeNNTwumK_priyanshibhardwaj_seniorcoordinator-socialmedia-.jpg?auto=format,compress",
    },
    {
      name: "Taarunya Aggarwal",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLVR5LeNNTwumY_TaarunyaAggarwal_SeniorCoordinator_GraphicDesign.jpg?auto=format,compress",
    },
    {
      name: "Asim",
      team: "Content",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLIR5LeNNTwulo_AsimAhmadAnsariIEEESBSeniorCoordinatorofGD.jpg?auto=format,compress",
    },
    {
      name: "Sahil Arvind Zade",
      team: "Graphic Design",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpGbMh5LeNNTxIEs_IMG20231028200854.jpg?auto=format,compress",
    },
    {
      name: "Arsh Adil",
      team: "Hospitality",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLDh5LeNNTwulg_ArshAdil_seniorCoordinatorGD.jpg?auto=format,compress",
    },
    {
      name: "Samriddhi Saharan",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLSB5LeNNTwumN_SamriddhiSaharan_SeniorCoordinator_Corporate.jpg?auto=format,compress",
    },
    {
      name: "Aditi Verma",
      team: "Hospitality",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK1h5LeNNTwulW_AditiVerma%2Cseniorcoordinator-corporateaffairs-_.jpg?auto=format,compress",
    },
    {
      name: "Sneha Dhanuka",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLUx5LeNNTwumW_SnehaDhanuka_seniorcordinator_corporateaff.jpg?auto=format,compress",
    },
    {
      name: "Khushi Arya",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLNR5LeNNTwul8_KhushiArya_SeniorCoordinator_CorporateAffairs.jpg?auto=format,compress",
    },
    {
      name: "Divyansh Mishra",
      team: "Finance",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLKB5LeNNTwulu_DivyanshMishraseniorcoordinatorcorporateaffairs.jpeg?auto=format,compress",
    },
    {
      name: "Arnav Malik",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLCB5LeNNTwulf_ARNAVMALIK_SENIOR_COORDINATOR_EDITORIAL.jpeg?auto=format,compress",
    },
    {
      name: "Tanmay Shah",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpKibR5LeNNTxItn_IMG_2095.HEIC?auto=format,compress",
    },
    {
      name: "Lakshita Tuli",
      team: "Content",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLOh5LeNNTwumA_LakshitaTuli_seniorcoordinator_editorial.jpg?auto=format,compress",
    },
    {
      name: "Amique Khan",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK2B5LeNNTwulY_AMIQUE_SENIORCOORDINATOR_LOGISTICS.jpg?auto=format,compress",
    },
    {
      name: "Saransh Subudhi",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLSh5LeNNTwumP_SARANSHSUBUDHI_SeniorCoordinator_LogisticsTeam.HEIC?auto=format,compress",
    },
    {
      name: "Harshit Tatia",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLLh5LeNNTwul1_HarshitTatiaSeniorcoordinatorLogistics.jpg?auto=format,compress",
    },
    {
      name: "Gautam Kakkar",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLLB5LeNNTwuly_GautamKakkarSr.coordinatorlogistics.jpg?auto=format,compress",
    },
    {
      name: "Gaurav Kapoor",
      team: "Social Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLKx5LeNNTwulx_GauravKapoor_SeniorCoordinator_Logistics.HEIC?auto=format,compress",
    },
    {
      name: "Hitesh Sharma",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLLx5LeNNTwul2_HiteshSharma_SeniorCoordinator_Logistics.jpg?auto=format,compress",
    },
    {
      name: "Mansi Negi",
      team: "Finance",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLQB5LeNNTwumE_MansiNegiSeniorCoordinatorPromotions.jpg?auto=format,compress",
    },
    {
      name: "Anubhuti Anurag",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK5R5LeNNTwula_AnubhutiAnurag_SeniorCordinator-Promotion.jpg?auto=format,compress",
    },
    {
      name: "Krish Grover",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpGVQB5LeNNTxIDf_WhatsAppImage2024-07-13at01.43.06.jpeg?auto=format,compress",
    },
    {
      name: "Raghav Katta",
      team: "Logistics",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLRx5LeNNTwumM_RaghavKatta_SeniorCoordinator-Promotions.jpg?auto=format,compress",
    },
    {
      name: "Maanvi Agrawal",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLOx5LeNNTwumB_MaanviAgrawal%2CSeniorCoordinator%2CPromotions.jpg?auto=format,compress",
    },
    {
      name: "Devansh Sharma",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLJR5LeNNTwulr_DevanshSharma_Senior_Coordinator.jpg?auto=format,compress",
    },
    {
      name: "Ansh Verma",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK4h5LeNNTwulZ_AnshVerma_SeniorCoordinator_Media%26Coverage.jpg?auto=format,compress",
    },
    {
      name: "Ayush",
      team: "Graphic Design",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLIh5LeNNTwulp_Ayush_SeniorCoordinator_Media%26Coverage.jpg?auto=format,compress",
    },
    {
      name: "Raghav Dokania",
      team: "Media",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLRh5LeNNTwumL_RaghavDokania_SeniorCordinator_MediaandCoverage.jpg?auto=format,compress",
    },
    {
      name: "Ritika",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpGRRB5LeNNTxICm_WhatsAppImage2024-07-13at01.54.07.jpeg?auto=format,compress",
    },
    {
      name: "Dev Dhawan",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLJx5LeNNTwult_DevDhawan_SeniorCoordinator_CommunityRelations.HEIC?auto=format,compress",
    },
    {
      name: "Anandita Puri",
      team: "Crafts",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZpGPRx5LeNNTxICL_WhatsAppImage2024-07-13at01.43.25.jpeg?auto=format,compress",
    },
    {
      name: "Shaivi Adesh",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLTB5LeNNTwumR_shaivi_senior_coordinator_community_relations.jpeg?auto=format,compress",
    },
    {
      name: "Arushi Verma",
      team: "Crafts",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLHx5LeNNTwull_ArushiVerma_SeniorCoordinator_CommunityRelations.heic?auto=format,compress",
    },
    {
      name: "Anushtha Chouhan",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK7R5LeNNTwulb_Anushthachouhan-seniorcoordinator-curations.heic?auto=format,compress",
    },
    {
      name: "Maanya Jain",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLPh5LeNNTwumC_Maanyajain_seniorcoordinator_curations.jpg?auto=format,compress",
    },
    {
      name: "Archisha",
      team: "Curations",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRK8R5LeNNTwulc_Archisha_seniorcoordinator-curations-.jpg?auto=format,compress",
    },
    {
      name: "Khushi Bhatia",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLNx5LeNNTwul9_Khushibhatia_seniorcoordinatorcurations.JPG?auto=format,compress",
    },
    {
      name: "Siddharth Mandal",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLUB5LeNNTwumU_SiddharthMandalSeniorCoordinatorPrograms.heic?auto=format,compress",
    },
    {
      name: "Arya Shanvi",
      team: "Flying Squad",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLIB5LeNNTwulm_AryaShanvi_SeniorCoordinator_Programs.JPG?auto=format,compress",
    },
    {
      name: "Kalash Chaudhary",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLNB5LeNNTwul7_Kalash_seniorcoordinator_programs_.jpg?auto=format,compress",
    },
    {
      name: "Arshita Sinha",
      team: "Crafts",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLEB5LeNNTwuli_ArshitaSinha_SeniorCoordinatorPrograms.webp?auto=format,compress",
    },
    {
      name: "Arushi Singh",
      team: "Corporate",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLHB5LeNNTwulk_ArushiSinghSeniorCoordinator-Programs_.jpg?auto=format,compress",
    },
    {
      name: "Diya Sekhani",
      team: "Events",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLKR5LeNNTwulv_DiyaSekhani_seniorcoordinator-Curations.jpg?auto=format,compress",
    },
    {
      name: "Paarth Yadav",
      team: "Marketing",
      role: "",
      profilepic: "https://images.prismic.io/ieeemuj/ZoRLQx5LeNNTwumH_Paarth_seniorcoordinator_promotions.heic?auto=format,compress",
    },
    {
      name: "Prisha Nasa",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2m0aF0TcGIw7E_PrishaNasaHeadofPrograms_.jpg?auto=format,compress",
    },
    {
      name: "Akshit Gupta",
      team: "Logistics",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP7n0aF0TcGIw9D_akshitgupta.jpg?auto=format,compress",
    },
    {
      name: "Vishesh Nigam",
      team: "Corporate",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2okaF0TcGIw7L_VisheshNigam-HeadCorporateAffairs-.png?auto=format,compress",
    },
    {
      name: "Anagha Ghosh",
      team: "Curations",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP1bkaF0TcGIw6j_AnaghaGhosh%2CJointHeadCorporateAffairs_.jpg?auto=format,compress",
    },
    {
      name: "Yashika Yadav",
      team: "Marketing",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2o0aF0TcGIw7M_YashikaYadav-CommunityManager-.png?auto=format,compress",
    },
    {
      name: "Shambhavi Sharma",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2vkaF0TcGIw7T_ShambhaviSharma-headofCurations-.jpg?auto=format,compress",
    },
    {
      name: "Tanishk Mittal",
      team: "Finance",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2oUaF0TcGIw7K_Tanishk_JointHeadCURATIONS.jpg?auto=format,compress",
    },
    {
      name: "Kashish Kumar",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2eUaF0TcGIw63_KashishKumar%2CHeadofEditorial.JPG?auto=format,compress",
    },
    {
      name: "Divyanshi Singh",
      team: "Content",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2QkaF0TcGIw6y_DivyanshiSingh-JointHeadofEditorial-.jpg?auto=format,compress",
    },
    {
      name: "Srishti Sen",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2gEaF0TcGIw6-_SRISHTISENHeadofPromotions.jpg?auto=format,compress",
    },
    {
      name: "Ishani Arora",
      team: "Marketing",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2WUaF0TcGIw61_IshaniArora-JointHeadPromotions.jpeg?auto=format,compress",
    },
    {
      name: "Angad Singh Harjai",
      team: "Logistics",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP7n0aF0TcGIw9C_angad.png?auto=format,compress",
    },
    {
      name: "Suhani Gupta",
      team: "Logistics",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2wUaF0TcGIw7W_SuhaniGupta%2CJointHeadofLogistics_.jpg?auto=format,compress",
    },
    {
      name: "Shubhangi Bhagat",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2f0aF0TcGIw69_ShubhangiBhagat-HeadofTechnicalprojects-.jpg?auto=format,compress",
    },
    {
      name: "Manasvi Walia",
      team: "WebDev",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP0ukaF0TcGIw6d_ManasviWaliaJointHeadTechnicalProjects.HEIC?auto=format,compress",
      linkedin: "http://www.linkedin.com/in/manasvi-walia-9516442a8",
      github: "https://github.com/manasviwalia2812",
      instagram: "https://www.instagram.com/manasviwalia?igsh=cTg3Ynd6OHRnY29h&utm_source=qr",
    },
    {
      name: "Sneha Khurana",
      team: "Graphic Design",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2n0aF0TcGIw7I_SnehaKhurana%2CHeadGD.PNG?auto=format,compress",
    },
    {
      name: "Guneet Pahwa",
      team: "Graphic Design",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP7nEaF0TcGIw88_guneet.jpg?auto=format,compress",
    },
    {
      name: "Prakriti Mishra",
      team: "Social Media",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2u0aF0TcGIw7Q_PrakritiMishraHeadSocialMedia.jpg?auto=format,compress",
    },
    {
      name: "Adhya Sharma",
      team: "Social Media",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP7oEaF0TcGIw9F_adhyasharma.jpg?auto=format,compress",
    },
    {
      name: "Nishant Prasad",
      team: "Media",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2ekaF0TcGIw64_NishantPrasad-HEADOFMEDIA-.jpg?auto=format,compress",
    },
    {
      name: "Arnav Sachdeva",
      team: "Media",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP1ikaF0TcGIw6o_ArnavSachdevaJointHeadofMedia.JPG?auto=format,compress",
    },
    {
      name: "Mohit Garg",
      team: "Flying Squad",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2ukaF0TcGIw7P_MohitGargSeniorCoordinator-Programs-.jpg?auto=format,compress",
    },
    {
      name: "Isha Choudhary",
      team: "Hospitality",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2WEaF0TcGIw60_IshaChaudhary-SrCoordinatorPrograms-.jpg?auto=format,compress",
    },
    {
      name: "Ziya Parween",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2xEaF0TcGIw7Z_ZiyaParween-SeniorCoordinatorprograms-.jpg?auto=format,compress",
    },
    {
      name: "Akanksha Sinha",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP7nkaF0TcGIw9A_Akanksha.jpeg?auto=format,compress",
    },
    {
      name: "Bhargavi Anand",
      team: "Marketing",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP1lkaF0TcGIw6q_BhargaviAnand%2CSeniorcoordinator-Promotions-.jpg?auto=format,compress",
    },
    {
      name: "Nupur Gupta",
      team: "Crafts",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2mkaF0TcGIw7D_NUPURGUPTA-Seniorcoordinator-Promotions-.jpeg?auto=format,compress",
    },
    {
      name: "Ekta Singh",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2V0aF0TcGIw6z_EktaSingh-SeniorCoordinatorPromotions-.jpg?auto=format,compress",
    },
    {
      name: "Spriha Podder",
      team: "Hospitality",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2wEaF0TcGIw7V_SprihaPodder-SeniorCoordinatorPromotions-.jpg?auto=format,compress",
    },
    {
      name: "Saanvi Dixit",
      team: "Curations",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2nEaF0TcGIw7F_Saanvidixit-seniorcoordinatoreditorial-.jpg?auto=format,compress",
    },
    {
      name: "Rudraksh Bharadwaj",
      team: "Content",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2fEaF0TcGIw66_RudrakshBhardwaj-SeniorCoordinatorEditorial-.jpg?auto=format,compress",
    },
    {
      name: "Sanskar Jain",
      team: "Content",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2vUaF0TcGIw7S_SanskarJainSeniorCoordinator-Editorial-.JPG?auto=format,compress",
    },
    {
      name: "Shritama Acharyee",
      team: "Marketing",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2v0aF0TcGIw7U_ShritamaAcharyee-SeniorCoordinator-Editorial-.jpg?auto=format,compress",
    },
    {
      name: "Ayushi Bhatia",
      team: "Graphic Design",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP1jEaF0TcGIw6p_AyushiBhatia%2CSeniorCoordinatorGD.jpg?auto=format,compress",
    },
    {
      name: "Shaili Saxena",
      team: "Flying Squad",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2nUaF0TcGIw7G_ShailiSaxena%2CseniorCoordinator-Graphicdesign-.jpg?auto=format,compress",
    },
    {
      name: "Apratim Pandey",
      team: "WebDev",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP1iUaF0TcGIw6n_ApratimPandey-SeniorCoordinatorTech-.png?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/apratimpandey",
      instagram: "https://instagram.com/apratxm",
    },
    {
      name: "Aditya Jha",
      team: "WebDev",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP5y0aF0TcGIw8T_adityajha.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/aditya-jha-654800280/",
      github: "https://github.com/adityajha2005",
      instagram: "https://www.instagram.com/_adxtya21/",
    },
    {
      name: "Arhaan Jan",
      team: "Flying Squad",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP1eUaF0TcGIw6l_ArhaanJanSeniorCoordinatorcorp.jpg?auto=format,compress",
    },
    {
      name: "Vanshika Saxena",
      team: "Curations",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2wkaF0TcGIw7X_VANSHIKASAXENAseniorcoordinatorcorporateaffairs_.jpg?auto=format,compress",
    },
    {
      name: "Sanskriti Saxena",
      team: "Corporate",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP7nUaF0TcGIw8-_sanskritisaxena.png?auto=format,compress",
    },
    {
      name: "Ananya Maheshwari",
      team: "Crafts",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP1eEaF0TcGIw6k_AnanyaMaheshwari-SeniorCoordinatorCurations-.jpg?auto=format,compress",
    },
    {
      name: "Vanshita Surana",
      team: "Hospitality",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2gkaF0TcGIw7A_VanshitaSurana-SrCoordinatorlogistics-.jpg?auto=format,compress",
    },
    {
      name: "Yash Verma",
      team: "Flying Squad",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2g0aF0TcGIw7B_YashVermaseniorcoordinatorlogistics.jpg?auto=format,compress",
    },
    {
      name: "Suhani Chhabra",
      team: "Events",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2oEaF0TcGIw7J_SuhaniChhabraseniorcoordinatorlogistics.jpg?auto=format,compress",
    },
    {
      name: "Suhani Sharma",
      team: "Corporate",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2gUaF0TcGIw6__SuhaniSharma-seniorcoordinator-socialmedia-.jpg?auto=format,compress",
    },
    {
      name: "Ritvika Surana",
      team: "Social Media",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2vEaF0TcGIw7R_RitvikaSurana%2CSeniorCoordinatorSocialMedia.jpg?auto=format,compress",
    },
    {
      name: "Dhruvil Dholakia",
      team: "Finance",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2QUaF0TcGIw6x_DhruvilDholakia--SeniorCoordinatorSocialMedia-.jpg?auto=format,compress",
    },
    {
      name: "Prathamesh Raghuvanshi",
      team: "Media",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP2e0aF0TcGIw65_PrathmeshRaghuvanshiSeniorCoordinator-Media-.png?auto=format,compress",
    },
  ];

  const executiveData = [
    {
      name: "Rishi Joshi",
      role: "Convenor",
      profilepic: "https://images.prismic.io/ieeemuj/d6afed2e-b0ba-484a-a625-6ce8d905d957_rishipic.webp?auto=compress,format",
      linkedin: "https://www.linkedin.com/in/rishi-joshi-924882200",
      github: "https://github.com/tangorishi",
      instagram: "https://instagram.com/wtfrishiiiii?igshid=ZDc4ODBmNjlmNQ==",
    },
    {
      name: "Lakshita Agrawal",
      role: "Convenor",
      profilepic: "https://images.prismic.io/ieeemuj/ZpJqhh5LeNNTxIal_WhatsAppImage2024-07-13at17.21.51.jpeg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/lakshita-agrawal-b716a4243/",
      instagram: "https://www.instagram.com/lakshita._.agrawal/",
    },
    {
      name: "Ananta Taneja",
      role: "Convenor",
      profilepic: "https://images.prismic.io/ieeemuj/ZrPy80aF0TcGIw6S_wie_chair.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/ananta-t-690431211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/at_1920_28?igsh=OGQ5ZDc2ODk2ZA==",
    },
    {
      name: "Pranav Bhardwaj",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZqoHjh5LeNNTxpJj_pranavbhaiya.png?auto=format,compress",      
      linkedin: "https://www.linkedin.com/in/pranav-bhardwaj-107454206",
      instagram: "https://instagram.com/pranav._.02?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      name: "Mohit Hingorani",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZnPxv5m069VX16JG_1000005233-02.jpeg.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/mohit-hingorani-439265248/",
      instagram:"https://www.instagram.com/mojitowithice/",
    },
    {
      name: "Harshneet Khanna",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZnHa-Zm069VX125x_WhatsAppImage2024-06-19at00.36.57_762311f2.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/harshneet-khanna-031505236",
      instagram: "https://www.instagram.com/joy_khanna11/"
    },
    {
      name: "Shristi Krishna",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/8a647216-f4e2-4258-9879-5d90ed10fd0c_SHRISTI+KRISHNA.jpg",
      linkedin: "https://www.linkedin.com/in/shristikrishna/",
      instagram:"https://instagram.com/_shristi.k_?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      name: "Naad Dantale",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZnJujpm069VX13Us_WhatsAppImage2024-06-19at10.58.58_c139107e.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/naaddantale",
      instagram: "https://instagram.com/naad.daan__",
    },
    {
      name: "Karan Kapoor",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/e18134c6-fb64-4659-8bc3-df3224374bc6_Karan+Kapoor_.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/karan-kapoor-843484267",
      instagram:"https://instagram.com/_karan_kapoor._?igshid=NGExMmI2YTkyZg==",
    },
    {
      name: "Saumya Gupta",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZrPzckaF0TcGIw6a_wie_vice.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/saumya-gupta-8629a5267",
      instagram:"https://instagram.com/saumya.gupta15?igshid=YmMyMTA2M2Y=",
    },
    {
      name: "Shashwat Singh",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZrPzMEaF0TcGIw6U_wie_secretary.jpg?auto=format,compress",
      linkedin: "",
      instagram:"https://www.instagram.com/shashwat_14singh/",
    },
    {
      name: "Gouri Sharma",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZrP5y0aF0TcGIw8U_GouriSharma-JointHeadofGraphicDesign.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/gouri-sharma-1b7911236/",
      instagram:"",
    },
    {
      name: "Devishi Mahajan",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZrPzcUaF0TcGIw6Z_wie_treasurer.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/devishi-817aa1265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:"https://www.instagram.com/devishiiimahajann?igsh=MW",
    },
    {
      name: "Shivanvi Singh",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZrPzMEaF0TcGIw6T_wie_hrd.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/competitiveblood/",
      instagram:"https://www.instagram.com/rizzvangi/",
    },
    {
      name: "Aaranay Aadi",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZrPzb0aF0TcGIw6Y_wie_tc.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/aaranay-aadi-047572252/",
      instagram:"https://www.instagram.com/aaranayaadi/",
    },
    {
      name: "Krishnav Gupta",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZpKi0B5LeNNTxIto_WhatsAppImage2024-07-13at21.21.52.jpeg?auto=format,compress",
      linkedin: "https://in.linkedin.com/in/krishnav-gupta-670a7a26a",
      instagram: "https://www.instagram.com/krishnav_g/",
    },
    {
      name: "Praketh Voona",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZpJ1_R5LeNNTxIm7_WhatsAppImage2024-07-13at18.10.42.jpeg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/praketh-voona-82b34b248",
      instagram:"https://instagram.com/lilprakx?igshid=ZDc4ODBmNjlmNQ==",
    },
    {
      name: "Kunal Kumar",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/ZpJwaR5LeNNTxIcY_WhatsAppImage2024-07-13at17.45.12.jpeg?auto=format,compress",
      linkedin: "http://linkedin.com/in/kunal-singh-70288227a",
      instagram:"https://instagram.com/kkunal97",
    },
    {
      name: "Shivam Shandilya",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/c233176a-0adf-4625-a462-f4448632ed95_SHIVAM+SHANDILYA.jpg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/shivam-shandilya-a4908a247/",
      instagram:"https://www.instagram.com/shi.vam.07",
    },
    {
      name: "Ayana Takshak",
      role: "Director",
      profilepic: "https://images.prismic.io/ieeemuj/692a3910-0b46-46fe-8e75-33afb186d14e_Ayana+takshak.jpeg?auto=format,compress",
      linkedin: "https://www.linkedin.com/in/ayana-takshak-4a609324b",
      instagram:"https://instagram.com/ayaannaa.t?igshid=MmIzYWVlNDQ5Yg==",
    },
  ];

  const facultyData=[
    {
      name: "Bhavik Agrawal",
      role: "Head of Department- Computer Science and Engineering(AIML)",
      profilepic: "",
      linkedin: "https://www.linkedin.com/in/bhavikagarwal2001/",
      twitter: "https://twitter.com/BhavikAgarwal13",
      github: "https://github.com/Bhavik-ag",
      instagram:"https://instagram.com/johndoe",
    },
    {
      name: "Samyak Bhargava",
      role: "Event Coordinator",
      profilepic: "",
      linkedin: "https://www.linkedin.com/in/sammybh6/",
      twitter: "#",
      github: "https://github.com/sammybh6",
    }
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
              className="space-y-10 pb-40"
            >
              {/* Convenor Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Convenors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {executiveData.filter(human => human.role === "Convenor").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
              {/* Director Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Directors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {executiveData.filter(human => human.role === "Director").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Organizers">
            <div className="space-y-10 pb-40">
              {/* Web Dev Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4">Web Development Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {organizerData.filter(human => human.team === "WebDev").map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>
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
