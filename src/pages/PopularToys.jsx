import React from 'react';


const PopularToys = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-secondary p-3 text-center">
        Our Popular Toys
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/j97ZvHRG/teddy-bear-removebg-preview.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src="https://i.ibb.co/y3xXPGF/toy2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src="https://i.ibb.co/QvPnTNkS/toy3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default PopularToys;