import React, { useState } from 'react';
import { Outlet, useNavigation,  } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartContext } from '../Providers/CartContext';





const HomeLayout = () => {
const [cart, setCart] = useState([{}]);

 const navigation = useNavigation()
console.log(navigation.state)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="bg-blue-800">
        <header className="w-11/12 mx-auto bg-base-200">
          <Header></Header>
          <nav className=" my-3 bg-base-300">
            <Navbar></Navbar>
          </nav>
        </header>

        <main>
          <section className="flex-1 main">
            <Outlet></Outlet>
          </section>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </CartContext.Provider>
  );
};

export default HomeLayout;