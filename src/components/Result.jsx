import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Result = ({ favorites, handleRemoveFav }) => {
  const total = favorites.reduce((sum, item) => sum + item.current_bid, 0);

  return (
    <div className="w-[28vw] bg-indigo-950 rounded-2xl shadow-2xl p-8">
      {/* Header */}
      <div className="flex items-center gap-3 pb-6 border-b border-gray-300 mb-6">
        <FaRegHeart size={20} className="text-gray-400" />
        <h2 className="text-xl font-bold text-gray-400">Wishlisted Items</h2>
      </div>

      {/* Items List */}
      {favorites.length !== 0 ? (
        <div className="space-y-6 mb-8">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 pb-6 border-b border-gray-200 last:border-b-0"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1">
                <h3 className="text-md font-medium text-gray-300 mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center gap-6 text-gray-200">
                  <span className="text-md font-semibold">
                    ${item.current_bid}
                  </span>
                  <span className="text-xs">Bids: {item.bids}</span>
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="text-gray-400 hover:text-gray-600 flex-shrink-0 hover:cursor-pointer"
                onClick={() => {
                  handleRemoveFav(item);
                }}
              >
                <IoClose size={28} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-gray-400 pb-6">
            No Items in Wishlist
          </h2>
        </div>
      )}

      {/* Total */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-300">
        <span className="text-xl font-semibold text-gray-400">
          Total bids Amount
        </span>
        <span className="text-2xl font-bold text-gray-300">${total}</span>
      </div>
    </div>
  );
};

export default Result;
