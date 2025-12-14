import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-black-100 rounded-box z-1 mt-3 w-52 p-5 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auctions</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How it Works</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl hover:bg-indigo-900 hover:text-white hover:border-0">
          <span className="text-[#8bbdfa] font-extrabold hover:text-[#8bbdfa]">
            Auction
          </span>
          Gallery
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-10 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Auctions</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>How it Works</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-lg bg-blue-200 border-0 px-7 py-5 rounded-4xl font-bold">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
