import React, { use } from 'react';
import { CartContext } from '../Providers/CartContext';
import MyContainer from '../components/MyContainer';



const Cart = () => {
  const {cart, setCart} = use(CartContext);
  const handleRemove=()=>{

  }
  return (
    <MyContainer>
      <div className="grid lg:grid-cols-2 mt-5 mb-8">
        {cart.map((toy) => (
          <>
            <div>
              <div className="flex gap-10 bg-base-300 rounded-xl cursor-pointer m-2 py-2 p-4  w-[700px] ">
                <figure className=" overflow-hidden rounded-xl ">
                  <img
                    className="w-[200px] h-[150px] object-cover"
                    src={toy.pictureURL}
                    alt={"toy"}
                  />
                </figure>
                <div className="text-sm text-slate-500">
                  <p key={toy.toyId}> {toy.toyName}</p>
                  <p> Price {toy.price} $</p>
                  <p>
                    Rating : {toy.rating} <span className="text">⭐⭐⭐⭐</span>
                  </p>
                  <p> Available : {toy.availableQuantity}</p>
                  <p> Price {toy.price} $</p>
                  <button onClick={()=>handleRemove()} className="btn btn-secondary btn-sm">X</button>
                  <button onClick={()=>handleRemove()} className="btn btn-secondary btn-sm ml-6">➡</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </MyContainer>
  );
};

export default Cart;