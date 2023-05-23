import React from "react";
import { useRouter } from "next/router";
import ProductItem from "/components/ProductItem.jsx"

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="py-16 lg:px-16 px-4 max-w-6xl mx-auto">
      <div className="lg:flex gap-5">
        <div className="productImg w-[50%]">
          <img
            src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
            className="h-[80vh] w-full rounded-xl"
          />
        </div>
        <div className="productDescription p-4 w-[50%]">
          <div className="heading pb-4">
            <h1 className="text-4xl pb-2">
              Air Jordan XXXVII Low PF
            </h1>
            <h2 className="text-2xl">Men's Shoes</h2>
          </div>
          <div className="priceBox">
            <span className="flex justify-between">
              <h1 className="text-xl font-bold">MRP: ₹700</h1>
              <h1 className="text-lg text-primary">50% off</h1>
            </span>
            <p className="text-md">inclusive of all taxes</p>
          </div>
          <div>
            <h1 className="text-2xl pt-6">Sizes : </h1>
          <div className="sizes grid grid-cols-4 gap-4 text-center pt-4">
            <div className="p-2  text-primary-content rounded-lg cursor-pointer font-bold bg-secondary">
              <p className="text-xl">XL</p>
            </div>
            <div className="p-2 bg-primary text-primary-content rounded-lg cursor-pointer font-bold">
              <p className="text-xl">L</p>
            </div>
            <div className="p-2 bg-primary text-primary-content rounded-lg cursor-pointer font-bold">
              <p className="text-xl">M</p>
            </div>
            <div className="p-2 bg-primary text-primary-content rounded-lg cursor-pointer font-bold">
              <p className="text-xl">S</p>
            </div>
          </div>
          </div>
          <div className="buttons pt-4">
            <div className="btn w-full bg-primary text-primary-content mb-2 outline-none border-none">
              Add to Cart
            </div>
            <div className="btn w-full bg-secondary text-secondary-content outline-none border-none">
              Wishlist
            </div>
          </div>
          <div className="details pt-8">
            <h1 className="text-xl font-bold">Product Details</h1>
            <p className="pt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolorem aut corporis libero voluptatem deserunt repellat excepturi
              porro quasi aliquam mollitia soluta et harum, earum, dolor qui
              quae ratione? Odit vitae error mollitia corporis eum. Numquam
              recusandae facilis nihil omnis in suscipit, sit quisquam nam
              ratione expedita accusantium adipisci fuga.
            </p>
          </div>
        </div>
      </div>

      <div className="suggestions pt-12">
        <div className="suggestHeading">
          <h1 className="text-3xl">You might also like</h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-8'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
