import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    "3D Modeling",
    "Character Design",
    "Environment Design",
    "Texturing",
    "Rigging",
    "Animation",
    "3D Printing",
    "Concept Art"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
          <p className="text-lg">Apaixonado por transformar imaginação em realidade</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000"
              alt="Profile"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Minha Jornada</h2>
              <p className="">
              Tive o privilégio de trabalhar em diversos projetos emocionantes em diferentes indústrias. Minha paixão por criar obras de arte 3D detalhadas e imaginativas me impulsionou a expandir continuamente minhas habilidades e abraçar novas tecnologias.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold  mb-4">Minha Abordagem</h2>
              <p className="">
              Acredito na combinação de excelência técnica com visão criativa para criar obras de arte 3D impressionantes que contam uma história e capturam a imaginação. Seja no design de personagens, modelagem de ambientes ou impressão 3D, estou comprometido em entregar resultados de alta qualidade que superem as expectativas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;