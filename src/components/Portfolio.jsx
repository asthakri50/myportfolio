import React from "react";
import portfolio from "../assets/portfolio/portfolio.png";
import price_tracker from "../assets/portfolio/price_tracker.jpg";
import hangman from "../assets/portfolio/Hangman.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "My Portfolio" ,
      source_code: "https://github.com/asthakri50/myportfolio" ,
      brief: "A Single Page Application using ReactJs, JavaScript, HTML and Tailwind CSS. It is an online representation of my skills, experiences and projects that I have created. Please feel free to check out my website and provide feedback. " ,
      src: portfolio
    },
    {
      id: 2,
      title: "Hangman",
      source_code: "https://github.com/asthakri50/Hangman" ,
      brief: "A FrontEnd Game Application Using ReactJs, JavaScript, HTML and SCSS. It is a single player game in which you have 6 lives to guess an unknown word. Each incorrect guess creates one line of the stick figure of a hanged man. " ,
      src: hangman
    },
    {
      id: 3,
      title: "Amazon Price Tracker" ,
      source_code: "https://github.com/asthakri50/amazon_price_tracker" ,
      brief: "This app is used to find the best deals of your favourite products on Amazon. It reads in ASINs from a CSV file, scrapes the data from the site and adds to a simple SQL database." ,
      src: price_tracker
    }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here </p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3
        gap-8 px-12 sm:px-0
        "
        >
          {portfolios.map(({ id, title , source_code , brief,  src }) => (
            
      <div
        class="max-w-md mx-auto xl:max-w-2xl min-w-0 break-words w-full mb-6 shadow-lg rounded-xl mt-16"
      >
        <div class="card shadow-md shadow-gray-600" key={id}>
          <div class="card-header mx -4 -mt-6 ">
            <a
              href={source_code}
              blur-shadow-image="true"
            >
              <img
                class="w-auto rounded-lg"
                src={src}
                alt="tailwind-card"
              />
            </a>
          </div>
          <div class="card-body">
            <a href = {source_code}>
              <h4 class="font-bold text-center my-5">{title}</h4>
            </a>
            <p class="opcacity-60 mb-4 px-2 py-2 ">
             {brief}
            </p>
          </div>
        </div>
      </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
