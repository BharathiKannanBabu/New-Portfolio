import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a passionate and detail-oriented MERN Stack Developer with 1 year of experience in developing dynamic and responsive web applications. My expertise lies in building full-stack solutions using MongoDB, Express.js, React.js, and Node.js. I have worked on projects involving real-time data handling, RESTful APIs, authentication, dashboard creation, and third-party service integrations like Typesense and Google Sheets. I enjoy bringing ideas to life through clean, efficient code and intuitive user interfaces.
        </p>

        <br />

        <p className="text-xl">
          Beyond development, I am always eager to learn and stay updated with the latest technologies in web development. I believe in writing scalable and maintainable code, collaborating effectively in team environments, and continuously improving my problem-solving skills. I take pride in turning complex requirements into simple, functional, and user-friendly web experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
