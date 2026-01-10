import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-11/12 mx-auto footer footer-horizontal footer-center bg-secondary text-primary-content p-10 cursor-pointer">
        <aside>
          <div className="flex flex-col">
            <img className="lg:w-100 h-30 ml-7" src="/logo-3.png" alt="logo" />
            <h3 className=" text-xl font-semibold p-1">
              
            </h3>
          </div>
         
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com" target="_blank">
              <BsTwitterX />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
