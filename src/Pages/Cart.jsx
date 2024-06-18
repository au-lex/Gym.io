import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../Redux/cartSlice";
import Loader from "../Component/Loader";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

import { LuTrash2 } from "react-icons/lu";



const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const getSubtotal = (item) => {
    return (parseFloat(item.price) * item.quantity).toFixed(2);
  };

  const getTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(getSubtotal(item)), 0)
      .toFixed(2);
  };

  return (
    <>
      <Loader />

      <Header />
      <div className="pt-[5rem] px-4 ">
        {cart.length === 0 ? (
          <section className="flex items-center justify-center flex-col h-[50vh]">
            <p className="mb-2 ">Your cart is empty</p>
            <Link
              to="/shop"
              className="block capitalize bg-yellow-500 p-2 border-[10px]  text-white"
            >
             
              contiue Shopping{" "}
            </Link>
          </section>
        ) : (
          <>
            <Link
              to="/shop"
              className=" bg-yellow-5 shadow border mb-4 border-yellow-500 w-[2rem] h-[2rem] rounded-full flex justify-center items-center"
            >
             
              <IoReturnUpBack />
            </Link>
            <h1 className=" font-semibold capitalize mb-4">my cart</h1>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex border  shadow-sm rounded-[10px] mb-3 border-yellow-500"
              >
                <figure className="cartImg boder">
                  <img
                    className="w-full h-[100px] object-cover"
                    src={item.img}
                    alt=""
                  />
                </figure>

                <figcaption className="cartdesc w-full p-2">
                  <h3>{item.name}</h3>

                  <section className="price flex justify-between my-2  w-full">
                    <p>Price: ${item.price}</p>

                    <div className="flex space-x-4">
                      <button
                        className="border p-2 shadow rounded-full h-[1.5rem] w-[1.5rem] flex justify-center items-center text-[14px]"
                        onClick={() => dispatch(decrementQuantity(item))}
                      >
                        -
                      </button>
                      <p className="border p-2 shadow rounded-full h-[1.5rem] w-[1.5rem] flex justify-center items-center text-[14px]">
                        {item.quantity}
                      </p>
                      <button
                        className="border p-2 shadow rounded-full h-[1.5rem] w-[1.5rem] flex justify-center items-center text-[14px]"
                        onClick={() => dispatch(incrementQuantity(item))}
                      >
                        +
                      </button>
                      <button
                        className="bg-red-500 border p-1  text-white shadow rounded-full h-[1.8rem] w-[1.8rem] flex justify-center items-center  "
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        <LuTrash2 className="t0px]" />
                      </button>
                    </div>
                  </section>

                  <p>Subtotal: ${getSubtotal(item)}</p>
                </figcaption>
              </div>
            ))}
            <h3 className="pb-4 font-bold">Total: ${getTotal()}</h3>

            <section className="checkout pb-4 text-white ">
              <Link className="flex justify-center items-center p-2 bg-blue-500  ">
               
                checkout{" "}
              </Link>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
