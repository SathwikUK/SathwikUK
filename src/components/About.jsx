import React from "react";
import aboutImg from "../assets/images/aboutme.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white ">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold "style={{ textShadow: "0 0 8px white" }}>
          About <span className="text-cyan-400">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center my-2  md:gap-6 gap-12 px-10 max-w-6xl mx-auto mt-0">
          <div className="p-1 my-2 mx-0">
            <div className="text-gray-300 my-2 mx-0">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I'm an enthusiastic and dedicated individual who combines hard work with smart strategies. My adaptable nature allows me to fit into any environment seamlessly. I thrive on continuous learning and creative problem-solving, always seeking to expand my knowledge and skills.<br/><br/>



              I excel in uniting people and fostering collaboration, even in challenging situations. My leadership qualities and effective communication skills enable me to build strong relationships and convey ideas clearly. I believe in teamwork and strive to create a positive, productive atmosphere.<br/><br/>

              As a computer science student, I have strong technical skills in full-stack development, including HTML, CSS, React, Node.js, MongoDB, and Express. My passion for technology drives me to build impactful solutions, and I am eager to contribute to innovative projects with my expertise and collaborative spirit.
              </p>
              
              <br />
              <br />
              <a href="./src/assets/Sathwik_resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-50 relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-50  h-70 object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;