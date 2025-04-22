import React from "react";
import {Link, useLocation} from 'react-router-dom';
import { close, menu, logoBezNapis, logoText, wannado, flogo  } from "../static";
import { useState, useEffect, useRef } from 'react';
import styles from '../style'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const { pathname } = location;
  const isClickable = window.innerWidth <= 768;

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

    <div className="flex items-start justify-end h-full select-none">
      <a href="https://www.ceskyflorbal.cz/" target="_blank" className="cursor-pointer mr-40">
      <div className="bg-black px-3 py-1 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10">
        <img src={flogo} alt="Český Florbal ikonka" className="h-[2rem] mx-3 bg-white rounded-full" />
        <span className="text-white font-serif font-bold text-xl">Český Florbal</span>
      </div>
      </a>
    </div>

    <a href="https://www.wannadosports.com/wannado/" target="_blank" className="flex items-start justify-end h-full mr-[15rem] select-none">
      <div className="bg-black px-2 py-2 mr-44 mt-[-3.68rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10">
        <img src={wannado} alt="Wannado logo" className="h-[1.5rem] mx-2" />
      </div>
    </a>

    </div>

    <nav ref={navRef} className="sm:relative flex w-[101%] sm:w-full py-3 sm:py-6 navbar top-0 sm:mt-[3.1rem] ml-0 sm:ml-[0.15rem] bg-primary rounded-2xl sm:rounded-3xl select-none">
      <a href="/">
        <div className="hidden sm:flex md:flex lg:flex xl:flex w-[12%] xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 xl:mt-6 lg:mt-3 md:mt-7 sm:mt-7 object-contain cursor-pointer scale-100 hover:scale-110 absolute top-[-50%] left-1 transform[-translate-x-1/2] self-stretch">
          <img src={logoBezNapis} alt="Logo Hlava Kačera" className="h-[200%]" />
        </div>
      </a>
        
      <a
        href={isClickable ? '/' : undefined}
        className={`w-60 lg:w-72 object-contain cursor-pointer lg:ml-52 md:ml-40 sm:ml-28 sm:hidden md:flex ${
        !isClickable && 'pointer-events-none'
      }`}>
        <img src={logoText} alt="Logo Textové" />
      </a>


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