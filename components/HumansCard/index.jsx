"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

const SocialMediaIcon = ({ Icon, href }) => {
  if (!href) return null; // Return null if href is not provided or empty

  return (
    <a href={href} target="_blank" className="social-icon">
      <Icon
        className="w-7 h-7 text-white transition ease-in-out delay-150 
          hover:scale-125 duration-300"
      />
    </a>
  );
};

const HumansCard = ({
  index,
  name,
  role,
  profilepic,
  linkedin,
  twitter,
  github,
  instagram,
}) => {
  const defaultGradient =
    "radial-gradient(100% at center, #363636 100%, #1A1A1A 27%)";

  return (
    <>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
          y: index % 3 === 1 ? 20 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <div
          className="flex flex-col items-center gap-0 shadow text-white rounded-lg bg-gray-800"
          style={{ background: defaultGradient }}
        >
          <div className="relative group bg-gray-800 rounded-lg overflow-hidden ">
            <motion.div
              className="relative"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="relative w-[240px] h-[300px]">
                <Image
                  src={profilepic}
                  className="w-full h-full outline-none object-cover transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-black border-8 border-gray-800"
                  placeholder="blur"
                  alt="Profile Picture"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black 
                  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0"
                >
                  <div className="flex gap-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    {linkedin && <SocialMediaIcon href={linkedin} Icon={LinkedInLogoIcon} />}
                    {twitter && <SocialMediaIcon href={twitter} Icon={TwitterLogoIcon} />}
                    {github && <SocialMediaIcon href={github} Icon={GitHubLogoIcon} />}
                    {instagram && <SocialMediaIcon href={instagram} Icon={InstagramLogoIcon} />}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 p-1 bg-gray-800 rounded-b-lg">
            <p className="sm:text-2xl text-xl text-white font-semibold text-center mb-1">
              {name}
            </p>
            {role && (
              <p className="font-[Inter] text-blue-500 text-lg sm:text-base leading-6">
                {role}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HumansCard;
