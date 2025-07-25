import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';


const skills = [
  { name: 'Java', icon: <FaJava size={50} />, color: '#f89820' },
  { name: 'HTML', icon: <FaHtml5 size={50} />, color: '#e44d26' },
  { name: 'CSS', icon: <FaCss3Alt size={50} />, color: '#264de4' },
  { name: 'JavaScript', icon: <FaJs size={50} />, color: '#f0db4f' },
  { name: 'React.js', icon: <FaReact size={50} />, color: '#61dafb' },
  { name: 'Express.js', icon: <SiExpress size={50} />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb size={50} />, color: '#4DB33D' },
  { name: 'MySQL', icon: <SiMysql size={60} />, color: '#4479A1' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white px-6 md:px-16 md:pb-16 max-w-7xl mx-auto md:-mt-28 relative z-10">
      <motion.h2 
        className="text-3xl md:text-5xl font-bold text-zinc-900 mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        My Tech Stack
      </motion.h2>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center justify-center bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[160px]"
          >
            <div className="mb-3" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="text-sm md:text-base font-semibold text-zinc-800">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
