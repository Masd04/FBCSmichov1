import React from "react";
import {Link, useLocation} from 'react-router-dom';
import { close, logo, menu, logoNapis, logoBezNapis, logoText, micek1, micek2 } from "../static";
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const { pathname } = location;

  const getNavLinkClass = (path, index) => {
    const baseClass = "text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10";
    const colorClass = index % 2 === 0 ? "hover:text-fbcgreen" : "hover:text-fbcyellow";
    const activeClass = pathname === path ? colorClass.replace('hover:', '') : "";
    return `${baseClass} ${colorClass} ${activeClass}`;
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current.contains(event.target)) {
        if (!toggle) return;
        setToggle(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [toggle]);

  const handleClick = (e) => {
    e.stopPropagation();
    setToggle((prev) => !prev);
  }

  const handleNavLinkClick = () => {
    setToggle(false);
  }

  const navLinks = [
    {path: "/", text: "Home"},
    {path: "/prihlaska", text: "Přihláška"},
    {path: "/klub", text: "Klub"},
    //{path: "/tymy", text: "Týmy"},
    {path: "/treninky", text: "Tréninky"},
    //{path: "/partneri", text: "Partneři"},
    {path: "/kontakt", text: "Kontakt"},
  ];

  return (
    <>
    <div className="hidden sm:block absolute top-0 left-0 w-full h-16 bg-fbcyellow">
    <a href="https://www.ceskyflorbal.cz/" target="_blank" className="flex items-start justify-center h-full">
      <div className="bg-black px-6 py-2 mt-[1px] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10">
        <img src="https://lista.ceskyflorbal.cz/img/svg-src/cesky-florbal-logo.svg" alt="Český Florbal" className="h-8 mx-2 bg-white rounded-full" />
        <span className="text-white font-serif font-bold text-xl">Český Florbal</span>
        </div>
    </a>


    <div className="absolute top-2 left-5 flex items-center justify-center">
          <img src={micek2} alt="Icon 1" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 2" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 3" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 4" className="h-8 mx-1"/>
          <img src={micek2} alt="Icon 1" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 2" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 3" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 4" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 1" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 2" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 3" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 4" className="h-8 mx-1" />
        </div>
    <div className="absolute top-2 right-5 flex items-center justify-center">
          <img src={micek1} alt="Icon 1" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 2" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 3" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 4" className="h-8 mx-1"/>
          <img src={micek1} alt="Icon 1" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 2" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 3" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 4" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 1" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 2" className="h-8 mx-1" />
          <img src={micek1} alt="Icon 3" className="h-8 mx-1" />
          <img src={micek2} alt="Icon 4" className="h-8 mx-1" />
        </div>

  </div>

    <nav ref={navRef} className="sm:relative flex w-full py-3 sm:py-7 navbar top-0 sm:mt-[3.1rem] bg-primary rounded-3xl select-none">

      <a href="/FBCSmichov1/"><div className="hidden sm:flex md:flex lg:flex xl:flex w-[12%] xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 mt-2 object-contain cursor-pointer scale-100 hover:scale-110 absolute top-[-50%] left-1 transform[-translate-x-1/2]">
        <img src={logoBezNapis} alt="Logo" className="h-[200%]" />
      </div></a>

      <a href="/FBCSmichov1/" className="w-60 object-contain cursor-pointer sm:hidden"><img src={logoText} alt="Logo"/></a>


        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((link, index) => (
                <li className={getNavLinkClass(link.path, index)} key={index}><Link to={link.path}>{link.text}</Link></li>
            ))}
        </ul> 

        <div className="sm:hidden flex flex-1 items-center justify-end">  
            <img src={toggle ? close : menu} alt="MenuButton" className="w-[28px] h-[28px] object-contain mr-5"
            onClick={handleClick} />

            <div className={`${toggle ? 'flex' : 'hidden'}
              p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-7 min-w[140px] rounded-xl sidebar`}>

            <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((link, index) => (
                    <li className={getNavLinkClass(link.path, index)} key={index}><Link to={link.path} onClick={handleNavLinkClick}>{link.text}</Link></li>
                ))}
            </ul>
          </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
