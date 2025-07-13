import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import ProfileImage from '../assets/hero-img.png';

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-none min-h-screen px-6 md:px-16 py-20 flex flex-col justify-between items-center text-center md:text-left">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left - Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">About me</h2>
          <p className="text-zinc-700 leading-relaxed">
            Hii, My name is Avijit Rajak and I'm a web developer with expertise in front-end development, skilled in creating responsive, user-friendly interfaces that work seamlessly across devices. I specialize in HTML, CSS, JavaScript, and modern frameworks, and I enjoy bringing designs to life with clean, efficient code. I'm passionate about blending aesthetics with functionality, constantly exploring new trends and tools to stay ahead. Beyond coding, I'm an entrepreneur at heart—driven to build impactful digital solutions. Whether working on personal projects or collaborating with teams, I bring creativity, innovation, and a relentless focus on results to everything I do.
          </p>
          <Link to="/contact" className="inline-block px-6 py-2 bg-main-blue text-white rounded-md font-semibold">
            Contact
          </Link>
        </div>

        {/* Right - Image with Circle BG */}
        <div className="flex-1 flex justify-end">
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[#f9f9fb] rounded-full z-0" />
            <img
              src={ProfileImage}
              alt="Profile"
              loading="eager"
              className="relative z-10 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Social Icons and Name */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="https://www.instagram.com/therealmelancholic/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-zinc-800 hover:text-black" />
          </a>
          <a href="https://www.linkedin.com/in/avijitrajak1111/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 text-zinc-800 hover:text-black" />
          </a>
          <a href="mailto:avijitrajak1111@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="w-6 h-6 text-zinc-800 hover:text-black" />
          </a>
        </div>
        <p className="text-sm text-zinc-500">Avijit Rajak 2025</p>
      </div>
    </section>
  );
};

export default About;