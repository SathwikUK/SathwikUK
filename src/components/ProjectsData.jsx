import { BiLogoCss3, BiLogoMongodb, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress, SiJavascript } from "react-icons/si";
import { FaNodeJs,FaBrain } from "react-icons/fa";
import port from '../assets/images/basic.png';
import devhob from '../assets/images/image.png';
import student from '../assets/images/studmarkman.png';
import express from '../assets/images/express.png';
import workji from '../assets/images/workji.png';
import tailwind from '../assets/images/tailwind.png';
import java from '../assets/images/java.png';
import python from '../assets/images/python.png';
import invigo from '../assets/images/inv1.png';
import price from '../assets/images/pricepredictor.png'
import lets from '../assets/images/lets talk.png';
import vsm from '../assets/images/one.png'


const ProjectsData = [
  {
    id: "1",
    name: "Basic Portfolio",
    image: port,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript],
    description: "This website provides A preview of  data works as a portfolio for many people",
    github: "https://github.com/SathwikUK/portfolio",
    demo: "https://portfolio-peach-six-47.vercel.app/",
  },
  
  
  
  
  
  
  {id: "3",
    name: "CarPricePrediction",
    image: price,
    icons: [FaBrain],
    description: "This website insights basic prediction model.",
    github: "https://github.com/SathwikUK/Car_prediction",
    demo: "https://car-prediction-fled.onrender.com/",
  },
  {
    id: "2",
    name: "Workout-JI",
    image: workji,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "This website insights gives scheduling our workouts.",
    github: "https://github.com/SathwikUK/workout-ji",
    demo: "https://workout-ji-mj3w.vercel.app/",
  },
  
  
  {
    id: "4",
    name: "Developers-HUB",
    image: devhob,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "In This Website Developers Hire Each other and get their work done.",
    github: "https://github.com/SathwikUK/Developer-Hub",
    demo: "https://developer-hub-api.vercel.app/",
  },
  {id: "5",
    name: "Let's-Talk",
    image: lets,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "This website helps in voice chat over people ,fun to do this.",
    github: "https://github.com/SathwikUK/Let-s-Talk_js",
    demo: "https://come-let-s-talk-ji.vercel.app/",
  },
  {id: "6",
    name: "Student Marks Management",
    image: student,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "This website insights Managing Student Marks in a Organisation.",
    github: "https://github.com/SathwikUK/StudentMarksManagement",
    demo: "https://student-marks-management-client.vercel.app/",
  },
  {id: "7",
    name: "Invigo",
    image: invigo,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "Developed Invigo, a MERN stack-based invigilation management system tailored to streamline the allocation and management of invigilators for college examinations with solid user interface.",
    github: "https://github.com/SathwikUK/Invigo-",
    demo: "https://invigo-eduvistaxe2ecsed-sathwikuks-projects.vercel.app/",
  },
  {
    id: "9",
    name: "Virtual Study Mugen-VSM",
    image: vsm,
    icons: [BiLogoReact, BiLogoCss3, SiJavascript,SiExpress,BiLogoMongodb,FaNodeJs],
    description: "Virtual Study Mugen(VSM) is a collaborative study platform that empowers students to communicate effectively through real-time messaging and seamless file sharing.",
    github: "https://github.com/SathwikUK/workout-ji",
    demo: "https://workout-ji-mj3w.vercel.app/",
  },
  
  
  
];

export default ProjectsData;