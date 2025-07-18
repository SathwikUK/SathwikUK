import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import htmlImage from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import react from '../assets/images/react.png';
import express from '../assets/images/express.png';
import tailwind from '../assets/images/tailwind.png';
import java from '../assets/images/java.png';
import python from '../assets/images/python.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import javascript from '../assets/images/javascript.png';
import node from '../assets/images/node.png';
import postman from '../assets/images/postman.png';
import mysql from '../assets/images/mysql.png';
import mongodb from '../assets/images/mongodb.png';

const skills = [
  { id: '1', name: 'HTML', image: htmlImage },
  { id: '2', name: 'CSS', image: cssImage },
  { id: '3', name: 'React', image: react },
  { id: '4', name: 'Express', image: express },
  { id: '5', name: 'Tailwind', image: tailwind },
  { id: '6', name: 'Java', image: java },
  { id: '7', name: 'Python', image: python },
  { id: '8', name: 'git', image: git },
  { id: '9', name: 'Github', image: github },
  { id: '10', name: 'MySQL', image: mysql },
  { id: '11', name: 'Postman', image: postman },
  { id: '12', name: 'Node', image: node },
  { id: '13', name: 'MongoDB', image: mongodb },
  { id: '14', name: 'JavaScript', image: javascript },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills" className="py-16 px-4 bg-black text-white">
      <div className="text-center mb-12">
        <h3 className="text-5xl font-bold tracking-wide">
          My <span className="text-cyan-400">Skills</span>
        </h3>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-gray-400 mt-4 text-lg"
        >
          My Technical Expertise
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-500/20 hover:border-cyan-500 shadow-lg hover:shadow-cyan-400/30 transition duration-300 rounded-xl p-5 flex flex-col items-center justify-center group transform hover:scale-105"
            data-aos="zoom-in-up"
            data-aos-duration="1200"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full overflow-hidden mb-4 bg-gray-700 group-hover:shadow-[0_0_25px_#22d3ee] transition">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-3/4 h-3/4 object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="text-lg font-medium text-gray-200 group-hover:text-cyan-300 transition duration-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
