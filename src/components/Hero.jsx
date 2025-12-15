import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-[70vh] relative">
      <div
        className="absolute inset-0 blur-xs -scale-x-100 brightness-50"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1514195037031-83d60ed3b448?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center lg:text-left justify-start">
        <div className="md:max-w-4/5">
          <h1 className="mb-5 text-5xl md:text-6xl font-bold md:max-w-5/6 text-[#F5F5F5]">
            Bid on Unique Items from Around the World
          </h1>
          <p className="mb-5 text-2xl text-[#D1D5DB]">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions.
          </p>
          <button className="btn btn-primary rounded-full px-7 py-6 text-xl">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
