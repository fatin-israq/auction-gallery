import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Items = () => {
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
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-20 w-20">
                    <img src="" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Product Name</div>
                </div>
              </div>
            </td>
            <td>$1000</td>
            <td>2 Days</td>
            <th>
              <button className="btn btn-ghost btn-xs">
                <FaRegHeart size={18} className="text-gray-400" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Items;
