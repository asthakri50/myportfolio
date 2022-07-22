import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen md:max-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi! I am a final year undergraduate student pursuing my Bachelors in
          Technology from the Indian Institute of Engineering Science and
          Technology, Shibpur. Currently, I am working in Kentropy Technologies
          as a Software Developer Intern. My roles include analyzing, design and
          fixing issues reported in web-applications.
        </p>

        <br />

        <p className="text-xl">
          My area of expertise includes Data Structures and Algorithms using
          Java. I love exploring different domains of technologies. 
          I have worked on web applications using technologies like
          Reactjs, TailwindCSS and Nodejs. I am also an open-source enthusiast and
          contribued to various project in GirlScript Summer of Code on GitHub.
        </p>
      </div>
    </div>
  );
};

export default About;
