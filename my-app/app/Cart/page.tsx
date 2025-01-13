"use client";
import React from "react";
import { remove } from "../redux/cartslice";
import { useDispatch , useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";



interface Products{
  id:number;
  title:string;
  price:number;
  image:string;
}

const CartPage:React.FC = () =>{
  const dispatch = useDispatch();
  const cartItems = useSelector((state:RootState) => state.cart);

  const handleRemove = (productId: number) => {
    dispatch(remove(productId));
  }
  return(
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="text-3xl font-bold text-center mb-8">
        <div className="space-y-6">
            {
              cartItems.map((item:Products) => {
                return(
                  <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                    <Image src={item.image} alt={item.title} width={200} height={200} className="rounded-md"/>
                    <div className="ml-4 flex-grow">
                    <h1 className="text-lg font-bold text-gray-800">{item.title}</h1>

                    <h5 className="text-lg font-medium text-gray-600 mt-2">${item.price}</h5>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>

                  </div>
                  
                  

                )
                

              })
            }
        </div>

      </div>
    </div>

  )
}

export default CartPage;