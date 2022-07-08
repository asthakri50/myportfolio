import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/astha-kumari-256b411ab/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/asthakri50",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:astha.kri50@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Leetcode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/asthakri50/",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume_astha_kumari.pdf",
      download: true,
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[25%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li key={id}
            className="flex justify-between items-center 
              w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300
               rounded-md bg-gray-500 my-2" 
          >
            <a
              href={href}
              className="flex justify-between items-center
             w-full text-white"
             download={download}
             target="_blank"
             rel="noreferrer"
            >
            {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
