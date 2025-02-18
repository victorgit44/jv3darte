import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { MdShoppingCartCheckout } from "react-icons/md"; // Importando o ícone
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Darth Vader",
    category: "figures",
    price: "R$ 70,00",
    image: "/img/darthvader.jpg",
    description: "Uma escultura futurista impressa em 3D com detalhes únicos.",
  },
  {
    id: 2,
    name: "Placa Goku",
    category: "figures",
    price: "R$ 20,00",
    image: "/img/goku.jpeg",
    description: "Miniatura de uma Placa com a imagem de Goku detalhada, ideal para colecionadores.",
  },
  {
    id: 3,
    name: "Dummy Articulado",
    category: "art",
    price: "R$ 35,00",
    image: "/img/dummy.jpeg",
    description: "Arte geométrica e articulada feita com impressão 3D de alta qualidade.",
  },

  {
    id: 4,
    name: "Echo Plant",
    category: "art",
    price: "R$ 35,00",
    image: "/img/echo.jpg",
    description: "Arte geométrica e articulada feita com impressão 3D de alta qualidade.",
  },

  {
    id: 5,
    name: "Gojeta SSJ 4",
    category: "figures",
    price: "R$ 35,00",
    image: "/img/gogeta ssj 4.jpg",
    description: "Arte geométrica e articulada feita com impressão 3D de alta qualidade.",
  },

  {
    id: 6,
    name: "Goku Pop",
    category: "figures",
    price: "R$ 35,00",
    image: "/img/goku_pop.jpg",
    description: "Arte geométrica e articulada feita com impressão 3D de alta qualidade.",
  },

  {
    id: 7,
    name: "Mão de Planta",
    category: "figures",
    price: "R$ 35,00",
    image: "/img/maoplanta.jpg",
    description: "Arte geométrica e articulada feita com impressão 3D de alta qualidade.",
  },

  {
    id: 8,
    name: "Porta Caneta",
    category: "figures",
    price: "R$ 35,00",
    image: "/img/porta_caneta.jpg",
    description: "Arte geométrica e articulada feita com impressão 3D de alta qualidade.",
  },

  {
    id: 9,
    name: "Vaso Moderno",
    category: "figures",
    price: "R$ 35,00",
    image: "/img/vaso.jpg",
    description: "Arte geométrica e articulada feita com impressão 3D de alta qualidade.",
  },

  {
    id: 10,
    name: "Zoro",
    category: "art",
    price: "R$ 70,00",
    image: "/img/zoro.jpeg",
    description: "Action figure feita com impressão 3D de alta qualidade.",
  }
];



const Shop = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const navigate = useNavigate(); // Hook para navegação

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(
    (product) =>
      (category === "all" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Shop com Ícone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 flex justify-center items-center gap-3"
        >
          <MdShoppingCartCheckout className="text-6xl text-indigo-600" />
          <h1 className="text-5xl font-bold">Shop</h1>
        </motion.div>

        {/* Barra de pesquisa e filtro */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="border p-2 rounded w-1/2 bg-gray-100 text-gray-900"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border p-2 rounded bg-gray-100 text-gray-900"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Todas</option>
            <option value="figures">Action Figures</option>
            <option value="art">Arte Impressa</option>
          </select>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="border rounded-lg p-6 shadow-md hover:shadow-lg cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)} // Navega para a página de detalhes
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="mt-2">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Shop;
