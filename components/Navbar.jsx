import React, { useState } from "react";
import PhoneNav from "./PhoneNav";
import logo from "../assets/logo.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navON, setNav] = useState(false)

  return (
    <>
      <section>
        <nav className="relative">
          <div className="container mx-auto px-4 font-display">
            <div className="relative flex h-24 items-center">
              <Link
                className="flex space-x-2 items-center  text-xl font-bold"
                href="/"
              >
                  <Image height={60} width={60} className="h-10 w-10   mr-1" src={logo} alt="" />
                <p className="font-bold">SHADOW</p>
              </Link>

              <button onClick={()=>setNav(true)} className="lg:hidden navbar-burger flex items-center justify-center h-10 w-10 ml-auto border border-teal-900 bg-teal-200 bg-opacity-30 hover:bg-teal-700 rounded-lg">
              
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5H21"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 12H21"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 19H21"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="hidden lg:flex ml-auto items-center">
                <a
                  className="inline-block  hover:text-teal-400 mr-10"
                  href="#"
                >
                  How it works
                </a>
                <a
                  className="inline-block  hover:text-teal-400 mr-10"
                  href="#"
                >
                  Pricing
                </a>

                <a
                  className="inline-block  hover:text-teal-400 mr-10"
                  href="#"
                >
                  Blog
                </a>
                <a
                  className="inline-block  hover:text-teal-400"
                  href="#"
                >
                  Contact Sales
                </a>
              </div>
              <div className="hidden lg:block ml-12">
                <Link
                  className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center text-sm  font-semibold border border-gray-800 rounded-lg hover:bg-purple-700 transition duration-400 "
                  href="/login"
                >
                  Login
                </Link>
                <a
                  className="group inline-block justify-center p-1 text-center text-sm  font-semibold rounded-lg"
                  href="#"
                >
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
        {
          navON ? <PhoneNav setNav={setNav}   />
            : null
        }
    </>
  );
};

export default Navbar;
