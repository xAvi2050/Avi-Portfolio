import { motion } from 'framer-motion';
import CurrencyConverterImg from '../assets/Currency_Converter.png';
import NotesAppImg from '../assets/Notes_App.png';
import QuizAppImg from '../assets/QuizAppImg.png';

const projects = [
  {
    title: 'Currency Converter',
    description: 'A simple currency converter application that fetches real-time exchange rates from the ExchangeRate API and converts the entered amount from one currency to another.',
    image: CurrencyConverterImg,
    link: 'https://xavi2050.github.io/Currency-Converter/',
  },
  {
    title: 'Notes App',
    description: 'A simple and efficient note-taking application where users can create, edit, delete, and search notes seamlessly.',
    image: NotesAppImg,
    link: 'https://notes-app007.vercel.app/',
  },
  {
    title: 'Quiz App',
    description: 'Built a dynamic quiz application using React.js with question navigation, answer selection, and score tracking',
    image: QuizAppImg,
    link: 'https://quiz-js-swart.vercel.app/',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
      type: 'tween',
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f9f9fb] py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center text-zinc-900 mb-16"
      >
        Projects
      </motion.h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.75, once: false }}
            custom={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} bg-white rounded-2xl overflow-hidden shadow-md`}
          >
            <motion.div
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>

            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 space-y-6">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-zinc-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ amount: 0.75, once: false }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-zinc-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ amount: 0.75, once: false }}
              >
                {project.description}
              </motion.p>

              <motion.a
                href={project.link}
                className="inline-block border border-black text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
