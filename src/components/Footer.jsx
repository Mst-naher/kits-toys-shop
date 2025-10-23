import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-11/12 mx-auto footer footer-horizontal footer-center bg-secondary text-primary-content p-10">
        <aside>
          <div className="flex flex-col">
            <img className="w-100 h-30 ml-7" src="../assets/logo-3.png" alt="" />
            <h3 className=" text-xl font-semibold p-1">
              {/* <span className=" bg-liner-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </span> */}
            </h3>
          </div>
          {/* <p className="font-bold">
            P.Hero Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p> */}
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <BsTwitterX />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaFacebook />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
