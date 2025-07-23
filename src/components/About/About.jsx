import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile3.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-4 md:px-8 lg:px-12 font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pr-24">
          {/* Greeting and Name - visually appealing single heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-center md:text-left">
            <span className="font-normal text-white">Hi, I am </span>
            <span className="font-extrabold text-white">Gaushul Azam</span>
          </h1>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'MERN Stack Developer',
                'AI/ML Enthusiast',
                'Coder',
                'UI/UX Designer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with experience in
            building scalable web applications.
            Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button and Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://drive.google.com/file/d/11qHeHkrAb1p5J22leXgny05SC0qgVTIy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-md"
            >
              DOWNLOAD CV
            </a>
            <a
              href="https://github.com/GAUSHUL78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8245ec] hover:text-[#a855f7] text-2xl"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gaushul-azam-064b58257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8245ec] hover:text-[#a855f7] text-2xl"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" /></svg>
            </a>
          </div>

        </div>
        {/* Right Side (Photo) */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:pl-24">
          <div className="relative flex items-center justify-center w-72 h-72 sm:w-96 sm:h-96">
            {/* SVG Tech/Geometric Accents */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="192" cy="192" r="150" stroke="#2563eb" strokeWidth="2" opacity="0.3" />
              <circle cx="192" cy="192" r="180" stroke="#2563eb" strokeWidth="2" opacity="0.15" />
              {/* Corner accents */}
              <path d="M30 30 v40 h40" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
              <path d="M354 30 v40 h-40" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
              <path d="M30 354 v-40 h40" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
              <path d="M354 354 v-40 h-40" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
              {/* Random short lines for tech effect */}
              <line x1="60" y1="100" x2="80" y2="100" stroke="#2563eb" strokeWidth="4" />
              <line x1="324" y1="284" x2="344" y2="284" stroke="#2563eb" strokeWidth="4" />
              <line x1="100" y1="324" x2="100" y2="344" stroke="#2563eb" strokeWidth="4" />
              <line x1="284" y1="60" x2="284" y2="80" stroke="#2563eb" strokeWidth="4" />
            </svg>
            {/* Circular Profile Photo */}
            <img
              src={profileImage}
              alt="Gaushul Azam"
              className="w-60 h-60 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-[#22223b] shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
