import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Work {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const works: Work[] = [
    { id: 1, title: "Darth Vader", category: "Action Figure", image: "/img/darth_vader.png", description: "Arte futurista do Busto do darth Vader" },
    { id: 2, title: "Alien Landscape", category: "Utensílios", image: "/img/goku.jpeg", description: "Otherworldly environment with unique flora and atmosphere" },
    { id: 3, title: "Sci-fi Weapon", category: "objetos", image: "/img/zoro.jpeg", description: "Advanced weapon concept with detailed mechanics" },
    { id: 4, title: "Fantasy Character", category: "Action Figure", image: "/img/dummy.jpeg", description: "Mystical character design with elaborate costume" },
    { id: 5, title: "Fantasy", category: "Utensílios", image: "/img/mao.jpg", description: "Mystical character design with elaborate costume" },
    { id: 6, title: "Fantasy Character", category: "objetos", image: "/img/mao.jpg", description: "Mystical character design with elaborate costume" }
    { id: 7, title: "Goku Pop ", category: "objetos", image: "/img/goku_pop.jpg", description: "Pop do Goku feito em PLA amarelo" },
    { id: 8, title: "Vaso ", category: "objetos", image: "/img/vaso.jpg", description: "Vaso de planta feito em PLA preto com 18 CM" },
    { id: 9, title: "Gogeta SSJ4 ", category: "objetos", image: "/img/gogeta ssj 4.jpg", description: "Busto do Gogeta SSJ4 feito em PLA branco com 18CM de altura" }
  ];

  const categories = ["all", "Action Figure", "Utensílios", "objetos"];
  const filteredWorks = selectedCategory === 'all' ? works : works.filter(work => work.category === selectedCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Descrição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Galeria</h1>
          <p className="text-lg">Explore minha coleção de obras de arte e designs 3D</p>
        </motion.div>

        {/* Botões de Categorias */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover scale-100 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                <p className="text-sm text-gray-300">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
