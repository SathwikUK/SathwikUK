import React from "react";
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-gray-800  p-6 text-center text-white flex items-center justify-center">
      <span className="mr-2">Crafted with passion by</span>
      <span className="text-3xl"><ion-icon name="heart" class="text-red-500 "></ion-icon></span>
      <span className="ml-2 mr-2">Sathwik Uday Kiran.</span>
      <a
        href="https://github.com/SathwikUK"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <AiFillGithub size={30} />
      </a>
    </div>
  );
};

export default Footer;
