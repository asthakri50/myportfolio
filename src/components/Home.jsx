import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b 
    from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a 3rd year undergraduate student, pursuing my Bachelors in
            Technology from the Indian Institute of Engineering Science and
            Technology, Shibpur. My area of expertise includes Data Structures
            and Algorithms using Java. Also, I have deep interest in Web
            Development
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500
            to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightOutline size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto my-auto w-0 md:w-3/5 md:rounded-4xl md:p-4 md:border-solid"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
