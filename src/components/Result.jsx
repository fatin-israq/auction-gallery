import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Result = () => {
  const favoriteItems = [
    {
      id: 1,
      title: "1965 Gibson SG Standard Electric Guitar...",
      price: "$2,650",
      bids: 12,
      image:
        "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Vintage Leica M3 Camera",
      price: "$2,650",
      bids: 12,
      image:
        "https://images.unsplash.com/photo-1606933248010-ef7781c59a6f?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Rolex Submariner 16610",
      price: "$2,650",
      bids: 12,
      image:
        "https://images.unsplash.com/photo-1587836374492-4b90f0c1b1f7?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="w-[28vw] bg-indigo-950 rounded-2xl shadow-2xl p-8">
      {/* Header */}
      <div className="flex items-center gap-3 pb-6 border-b border-gray-300 mb-6">
        <FaRegHeart size={20} className="text-gray-400" />
        <h2 className="text-xl font-bold text-gray-400">Favorite Items</h2>
      </div>

      {/* Items List */}
      <div className="space-y-6 mb-8">
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 pb-6 border-b border-gray-200 last:border-b-0"
          >
            {/* Image */}
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Item Details */}
            <div className="flex-1">
              <h3 className="text-md font-medium text-gray-300 mb-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-6 text-gray-200">
                <span className="text-md font-semibold">{item.price}</span>
                <span className="text-xs">Bids: {item.bids}</span>
              </div>
            </div>

            {/* Remove Button */}
            <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <IoClose size={28} />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-300">
        <span className="text-xl font-semibold text-gray-400">
          Total bids Amount
        </span>
        <span className="text-2xl font-bold text-gray-300">$78,000</span>
      </div>
    </div>
  );
};

export default Result;
