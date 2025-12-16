import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Items = ({ handleFav }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="overflow-x-auto w-[70vw] bg-indigo-950 rounded-lg shadow-2xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-20 w-20">
                      <img src={item.image} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>${item.current_bid}</td>
              <td>{item.time_left}</td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => {
                    handleFav(item);
                  }}
                >
                  <FaRegHeart size={18} className="text-gray-400" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
