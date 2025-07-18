import React, { useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectsData from './ProjectsData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="body-font min-h-screen bg-black text-white">
      <div className="container mx-auto px-5 py-12">
        <div id="projects" className="text-center mb-12">
          <h1 className="sm:text-5xl text-3xl font-medium title-font mb-3">
            <span className="text-white">MY</span>{' '}
            <span className="text-cyan-500">Projects</span>
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-cyan-300"
          >
            My Works
          </p>
        </div>

        <div className="grid gap-10 justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {[...ProjectsData].reverse().map((project) => (
            <div
              key={project.id}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-cyan-700 hover:shadow-cyan-500 hover:shadow-2xl transition-shadow duration-500 max-w-[500px] w-full"
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[250px] object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-cyan-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-center text-gray-900 mb-4">{project.description}</p>

                {/* Tech Icons */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {project.icons.map((Icon, index) => (
                    <div
                      key={index}
                      className="rounded-full p-2 bg-white hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="text-2xl text-gray-900 hover:text-white" />
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-300"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
