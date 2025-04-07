import React from "react";
import githubAppPic from '../assets/portfolio/githubPic.jpg';
import chatAppPic from '../assets/portfolio/chatAppPic.jpg';
import cttiAppPic from '../assets/portfolio/cttiAppPic.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: githubAppPic,
      demo: "https://mern-github-app-gpc4.onrender.com/",
      code: "https://github.com/BharathiKannanBabu/mern-github-app",
    },
    {
      id: 2,
      src: chatAppPic,
      demo: "https://fullstack-chat-app2.onrender.com/",
      code: "https://github.com/BharathiKannanBabu/mern-chat-app",
    },
    {
      id: 3,
      src: cttiAppPic,
      demo: "https://ctti-items-stroe.onrender.com/",
      code: "https://github.com/BharathiKannanBabu/CTTI-Items-stroe",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="Project screenshot"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-105 bg-cyan-600 rounded-md"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-700 rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
