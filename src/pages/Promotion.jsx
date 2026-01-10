import React from 'react';

const Promotion = () => {
  return (   
    
    <div className="hero bg-blue-300 h-[700px] mt-10  ">
      
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/qF2cx2B9/Toys-Store.png"
          className="max-w-sm rounded-lg shadow-4xl w-[300px] h-[250px] lg:w-[700px] lg:h-[500px] hover:bg-purple-800"
        />
        <div className="lg:ml-15 mt:15 md:mt:10 lg:mt:8">
          <h1 className=" md:text-2xl lg:text-5xl font-semibold text-blue-800 cursor-pointer hover:text-white hover:bg-black">
            BE IN TIME FOR THE HUGE <br /> PROMO IN OUR STORES!
          </h1>
          <p className="py-6 lg:ml-15 text-[10px] md:text-[10px] lg:text-[18px] md:p-5">
            Use our coupon code and get an awesome <br />
            discount on a new game for your children
            <br /> along with our dtailed review, tips and hints!.
          </p>
          <div className="flex md:flex-cols lg:flex-row md:ml-8 lg:ml-35 ">
            <button className="btn btn-success">Purchase</button>
            <button className="btn btn-success ml-10">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;