import React from "react";
import {Link, useLocation} from 'react-router-dom';
import { close, logo, menu, logoNapis, logoBezNapis, logoText} from "../static";
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const { pathname } = location;

  const getNavLinkClass = (path, index) => {
    const baseClass = "text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10";
    const colorClass = index % 2 === 0 ? "hover:text-green-500" : "hover:text-yellow-400";
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
    <nav ref={navRef} className="w-full flex py-2 items-center xs:py-1 navbar top-0 bg-primary rounded-3xl select-none">
        <a href="/FBCSmichov1/" className="hidden sm:flex md:flex lg:flex xl:flex w-[10%] xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 object-contain cursor-pointer scale-100 hover:scale-110"><img src={logoBezNapis} alt="Logo"/></a>
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
  )
}

export default Navbar
