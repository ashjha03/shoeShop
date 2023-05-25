import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = ({showCart, setShowCart, cartItems}) => {
  

  return (
    <div className={`${!showCart && 'hidden'} fixed z-99 transition-all top-0 overflow-y-scroll right-0 p-5 bg-secondary text-secondary-content z-30 h-[100vh] lg:w-[40vw] sm:w-[60vw] w-[100vw]`}>
      <div className="cartHead p-4">
        <h1 className="text-5xl text-center">My Cart</h1>
      </div>
      <div onClick={() => setShowCart(false)} className="close absolute top-5 right-5 cursor-pointer">
        <AiFillCloseCircle className="text-3xl" />
      </div>
      <div className="cartItems">
        <div className="cartItem py-4 px-2 border-b border-secondary-content">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
              <h1 className="text-lg pr-2 lg:w-[150px]">Item</h1>
            </div>
            <div className="size pl-16">
              <p> Size </p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div className="price">
              <p>Price</p>
            </div>
          </div>
        </div>
        {cartItems && cartItems.map((data, index) => {
          return (
            <div
              key={index}
              className="cartItem py-4 px-2 border-b border-secondary-content"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center">
                  <h1 className="text-lg pr-2 name lg:max-w-[180px]">
                    {" "}
                    {index + 1}.<span className="pl-2">{data[0].attributes.name}</span> 
                  </h1>
                </div>
                <div className="size">
                  {/* <p> {data.size} </p> */}
                  <p>Regular</p>
                </div>
                <div>
                  {/* <p>{data.quantity}</p> */}
                  <p>1</p>
                </div>
                <div className="price">
                  <p>{data[0].attributes.price}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="cartTotal py-5 absolute right-5 flex flex-col justify-end">
        {/* {cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)} */}
        {cartItems && <h1 className="text-3xl">Sum Total : ₹ {cartItems.reduce((accumulator, currentValue) => accumulator + currentValue[0].attributes.price, 0)}</h1>}
        <div className="btn bg-primary text-primary-content checkout mt-3">Proceed To CheckOut</div>
      </div>
    </div>
  );
};

export default Cart;
