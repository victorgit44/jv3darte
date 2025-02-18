import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { MdShoppingCartCheckout } from "react-icons/md"; // Importando o ícone

const products = [
  {
    id: 1,
    name: "Darth Vader",
    category: "figures",
    price: "R$ 70,00",
    image: "/vendas/darth_vader01.png",
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
    name: "Zoro",
    category: "art",
    price: "R$ 70,00",
    image: "/img/zoro.jpeg",
    description: "Action figure feita com impressão 3D de alta qualidade.",
  }
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(product =>
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
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="mt-2">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE COMPRA */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative flex">
            
            {/* Imagem do Produto */}
            <div className="w-1/2">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto object-cover rounded-md" />
            </div>

            {/* Detalhes do Produto */}
            <div className="w-1/2 pl-6">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setSelectedProduct(null)}
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <p className="text-lg font-semibold text-gray-900 mt-2">{selectedProduct.price}</p>
              <p className="text-gray-600 mt-2">{selectedProduct.description}</p>

              <div className="mt-4 text-sm text-gray-500">
                <p>{selectedProduct.details}</p>
                <p>{selectedProduct.stock}</p>
                <p>{selectedProduct.delivery}</p>
                <p>{selectedProduct.seller}</p>
                <p>{selectedProduct.warranty}</p>
              </div>

              {/* Botão de Compra */}
              <div className="mt-6">
                <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 text-lg">
                  Comprar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
