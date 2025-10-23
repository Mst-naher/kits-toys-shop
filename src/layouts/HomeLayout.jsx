import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div>
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
  );
};

export default HomeLayout;