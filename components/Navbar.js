import React from "react";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineDown,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="lg:flex py-5 px-2 border-b md:px-10 justify-between items-center w-full overflow-scroll">
      <Link href="/" className="navHead flex items-center justify-center lg:pb-0 pb-2 lg:text-start text-center">
        {/* <img className="w-[50px] pr-3" src={require("../../assets/profile.png")} alt="" /> */}
        <h1 className="text-3xl font-bold">Shoe Shop</h1>
      </Link>
      <div className="navLinks flex justify-center">
        <Link className="pr-5 transition-all" href="/">
          <p className="hover:scale-110 transition-all">Home</p>
        </Link>
        <Link className="pr-5" href="#about">
          <p className="hover:scale-110 transition-all">About</p>
        </Link>
        <Link className="pr-5 flex items-center" href="#services">
          <p className=" transition-all pr-1">Categories</p>
          <AiOutlineDown />
        </Link>
        <Link className="pr-5" href="#contact">
          <p className="hover:scale-110 transition-all">Contact</p>
        </Link>
      </div>
      <div className="right lg:text-start text-center pt-2 lg:pt-0 flex justify-center items-center gap-6">
        <button className="btn mr-1">Change Theme</button>
        <div className="wishlist relative flex items-center">
          <AiOutlineHeart className="text-2xl cursor-pointer" />
          <div className="wishCount absolute -top-4 left-5 text-secondary-content bg-secondary px-1 rounded-full">8</div>
        </div>
        <div className="myCart relative flex items-center">
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
          <div className="wishCount absolute -top-4 left-5 text-secondary-content bg-secondary px-1 rounded-full">2</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
