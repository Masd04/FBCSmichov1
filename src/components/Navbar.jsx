import React from "react";
import {Link} from 'react-router-dom';
import { close, logo, menu, logoNapis, logoBezNapis, logoText} from "../static";
import { useState } from 'react';



const Navbar = () => {
  const [toggle, setToggle] = useState
  (false);
  return (
                                                                              //  Atribut rounded odebrat.. ??
    <nav className="w-full flex py-2 items-center xs:py-1 navbar top-0 bg-primary rounded-3xl">

        <a href="/FBCSmichov1/" className="hidden sm:flex md:flex lg:flex xl:flex w-1/12 xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 object-contain cursor-pointer scale-100 hover:scale-110"><img src={logoBezNapis} alt="Logo"/></a>
        <a href="/FBCSmichov1/" className="w-60 object-contain cursor-pointer sm:hidden"><img src={logoText} alt="Logo"/></a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"><Link to="/" className="">Home</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"><Link to="/klub" className="">Klub</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"><Link to="/tymy" className="">Týmy</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"><Link to="/treninky" className="">Tréninky</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"><Link to="/partneri" className="">Partneři</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"><Link to="/kontakt" className="">Kontakt</Link></li>
            
        </ul> 

                {/* LOGO -> Nápis FBC? */}
        <div className="sm:hidden flex flex-1 items-center justify-end">  
              <img src={toggle ? close : menu} alt="MenuButton" className="w-[28px] h-[28px] object-contain mr-5"
              onClick={() => setToggle((prev) => !prev)}
              />

              <div className={`${toggle ? 'flex' : 'hidden'}
              p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-7 min-w[140px] rounded-xl sidebar`}>

            <ul className="list-none flex flex-col justify-end items-center flex-1">
              
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"><Link to="/" className="">Home</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"><Link to="/klub" className="">Klub</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"><Link to="/tymy" className="">Týmy</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"><Link to="/treninky" className="">Tréninky</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"><Link to="/partneri" className="">Partneři</Link></li>
            <li className="text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"><Link to="/kontakt" className="">Kontakt</Link></li>
                
            </ul>

              </div>

        </div>

    </nav>
  )
}



export default Navbar