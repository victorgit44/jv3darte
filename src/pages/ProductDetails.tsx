import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const products = [
  // Mesma lista de produtos que você já tem
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


const ProductDetails = () => {
  const { id } = useParams(); // Pega o ID do produto da URL
  const navigate = useNavigate(); // Para voltar à página anterior
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Imagem do Produto */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Detalhes do Produto */}
        <div className="w-full md:w-1/2">
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl mb-4"
            onClick={() => navigate(-1)} // Volta para a página anterior
          >
            &times;
          </button>

          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-900 mt-2">
            {product.price}
          </p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Avaliação com Estrelas */}
          <div className="mt-4 flex items-center">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="ml-2 text-gray-500">(4.0)</span>
          </div>

          {/* Seleção de Variações */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Variações
            </label>
            <select className="mt-1 block w-full p-2 border rounded-md bg-gray-100">
              <option>Pequeno</option>
              <option>Médio</option>
              <option>Grande</option>
            </select>
          </div>

          {/* Seleção de Quantidade */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="mt-1 block w-full p-2 border rounded-md bg-gray-100"
            />
          </div>

          {/* Informações sobre Frete */}
          <div className="mt-6 text-sm text-gray-600">
            <p>Frete grátis para todo o Brasil</p>
            <p>Entrega estimada em 5-7 dias úteis</p>
          </div>

          {/* Botões de Ação */}
          <div className="mt-6 flex gap-4">
            <button className="w-1/2 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Adicionar ao Carrinho
            </button>
            <button className="w-1/2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;