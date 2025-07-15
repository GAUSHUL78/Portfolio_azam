// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Education Section Logo's
import glaLogo from './assets/education_logo/sliet.jpg';
import bsaLogo from './assets/education_logo/gma.png';
import vpsLogo from './assets/education_logo/gma.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/myntra.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
 export const education = [
  {
    id: 0,
    img: glaLogo, // Replace with slietLogo if you have it
    school: "SLIET Longowal",
    date: "Nov 2022 - July 2026",
    grade: "9.5 CGPA",
    desc: "I am currently pursuing my Bachelor's degree (B.E.) in Computer Science and Engineering from SLIET, Longowal. During my academic journey, I have developed a solid foundation in core computer science subjects including Data Structures, Algorithms, Operating Systems, Computer Networks, Web Development, and Software Engineering. I actively participate in technical events, coding contests, and workshops, which have significantly enhanced my practical skills and deepened my interest in full-stack development and problem-solving.",
    degree: "Bachelor of Engineering - B.E. (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "G.M. Academy, Salempur",
    date: "Apr 2019 - March 2020",
    grade: "86.2%",
    desc: "I completed my class 12 education from G.M. Academy, Salempur, under the CBSE board. My academic stream was PCM (Physics, Chemistry, Mathematics).",
    degree: "CBSE (XII) - PCM",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "G.M. Academy, Salempur",
    date: "Apr 2017 - March 2018",
    grade: "87%",
    desc: "I completed my class 10 education from G.M. Academy, Salempur, under the CBSE board, where I studied Science with Foundation of Information Technology (IT).",
    degree: "CBSE (X) - Science with Foundation of IT",
  },
];

  
  export const projects = [
    {
      id: 0,
  title: "SLIET Mentorship Website",
  description:
    "A simple and intuitive mentorship portal designed specifically for SLIET students and faculty. Built using only vanilla HTML, CSS, and JavaScript, this platform connects students with their respective mentors, facilitating smoother academic guidance and communication. The website allows students to find and reach out to assigned mentors easily, enhancing the mentoring experience without any backend dependency.",
  image: csprepLogo, 
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://gaushul78.github.io/Mentorshipwebsite/", 
  webapp: "https://gaushul78.github.io/Mentorshipwebsite/",
},

    
      {
  id: 1,
  title: "E-Commerce Website (Myntra Clone)",
  description:
    "A fully responsive Myntra-inspired e-commerce web application built using React.js. It features a dynamic product listing, filtering, searching, cart functionality, and seamless navigation. The design mimics modern UI/UX patterns found in real-world e-commerce platforms, offering a smooth user shopping experience. It is optimized for both desktop and mobile devices, ensuring accessibility across all screen sizes.",
  image: movierecLogo, 
  tags: ["React JS", "HTML", "CSS", "JavaScript", "Responsive Design",],
  github: "https://github.com/GAUSHUL78/myntraP/deployments/Production%20%E2%80%93%20myntra-p-llky", 
  webapp: "https://myntra-p-llky.vercel.app/", 
},

    {
  id:2,
  title: "Hospital Appointment Management System",
  description:
    "A full-stack appointment booking and hospital management system developed using MERN stack. This project features 3-level authentication: Patients can register, log in, book appointments with doctors, and manage them. Doctors can log in to view booked appointments, update their profiles, and check earnings. Admin has access to a dedicated dashboard to manage doctors, monitor all appointments, and control system-wide operations. Built with a responsive front-end and a secure, scalable backend.",
  image: npmLogo, // replace with actual imported logo/image
  tags: ["React JS", "Node.js", "Express", "MongoDB", "Authentication", "Full Stack", "Dashboard", "Appointment System"],
  github: "https://github.com/yourusername/hospital-management", // replace with your actual GitHub link
  webapp: "https://yourdeploymentlink.com", // replace with actual deployment link
},
  ];  