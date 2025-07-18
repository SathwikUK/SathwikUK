import React, { useState } from "react";
import hero from "../assets/images/5.png";
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import "../index.css";

const Hero = () => {
  const social_media = [
    { icon: "logo-instagram", url: "https://www.instagram.com/sathwik.uk" },
    { icon: "logo-twitter", url: "https://www.facebook.com/sampengala.sathwik" },
    { icon: "logo-linkedin", url: "https://www.linkedin.com/in/sathwikuk/" },
    { icon: "logo-github", url: "https://github.com/SathwikUK" },
  ];

  const [showFinalText, setShowFinalText] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full rounded-lg">
        <img
          src={hero}
          alt=""
          className="md:w-11/12 h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 mt-20">
        <div className="md:text-left text-center">
          {/* Typing title first, then show styled version */}
          {!showFinalText ? (
            <h1
              className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold"
              style={{ textShadow: "1px 0px 8px white" }}
            >
              <TypeAnimation
                sequence={[
                  "Hello! My Name is Sathwik Uday Kiran",
                  1000,
                  () => setShowFinalText(true),
                ]}
                speed={50}
                repeat={0}
                cursor={false}
              />
            </h1>
          ) : (
            <h1
              className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold"
              style={{ textShadow: "1px 0px 8px white" }}
            >
              <span
                className="text-cyan-400 md:text-6xl text-5xl"
                style={{ textShadow: "0 0 8px #2dd4bf" }}
              >
                Hello!
                <br />
              </span>
              My Name is{" "}
              <span
                className="text-cyan-400"
                style={{ textShadow: "0 0 8px #2dd4bf" }}
              >
                Sathwik
              </span>{" "}
              Uday Kiran
            </h1>
          )}

          {/* Sub-title with typing effect after main title appears */}
          {showFinalText && (
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer", 1000,
                  "MERN Stack", 1000,
                  "Java", 1000,
                  "SQL", 1000,
                  "JavaScript", 1000,
                  "Tailwind", 1000,
                  "POSTMAN",1000,
                  
                ]}
                speed={70}
                repeat={Infinity}
              />
            </h4>
          )}

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="btn-primary mt-8 inline-block"
          >
            Contact Me
          </ScrollLink>

          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
