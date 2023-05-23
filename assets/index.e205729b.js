import{r as e,u as t,R as a,L as l,a as n,B as r,b as s,c as i,d as m}from"./vendor.8cff872e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var c="/FBCSmichov1/assets/FBC_Smichov _gravatar.0ac6a31b.png",o="/FBCSmichov1/assets/FBC_Smichov_txt.6139a9cf.png";const u=()=>{const[n,r]=e.exports.useState(!1),s=e.exports.useRef(),i=t(),{pathname:m}=i,u=(e,t)=>{const a=t%2==0?"hover:text-green-500":"hover:text-yellow-400",l=m===e?a.replace("hover:",""):"";return`text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 ${a} ${l}`};e.exports.useEffect((()=>{const e=e=>{if(!s.current.contains(e.target)){if(!n)return;r(!1)}};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[n]);const p=()=>{r(!1)},d=[{path:"/",text:"Home"},{path:"/klub",text:"Klub"},{path:"/tymy",text:"Týmy"},{path:"/treninky",text:"Tréninky"},{path:"/partneri",text:"Partneři"},{path:"/kontakt",text:"Kontakt"}];return a.createElement("nav",{ref:s,className:"w-full flex py-2 items-center xs:py-1 navbar top-0 bg-primary rounded-3xl"},a.createElement("a",{href:"/FBCSmichov1/",className:"hidden sm:flex md:flex lg:flex xl:flex w-1/12 xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 object-contain cursor-pointer scale-100 hover:scale-110"},a.createElement("img",{src:c,alt:"Logo"})),a.createElement("a",{href:"/FBCSmichov1/",className:"w-60 object-contain cursor-pointer sm:hidden"},a.createElement("img",{src:o,alt:"Logo"})),a.createElement("ul",{className:"list-none sm:flex hidden justify-end items-center flex-1"},d.map(((e,t)=>a.createElement("li",{className:u(e.path,t),key:t},a.createElement(l,{to:e.path},e.text))))),a.createElement("div",{className:"sm:hidden flex flex-1 items-center justify-end"},a.createElement("img",{src:n?"/FBCSmichov1/assets/close.0a9240f8.svg":"/FBCSmichov1/assets/menu.f4bfbd85.svg",alt:"MenuButton",className:"w-[28px] h-[28px] object-contain mr-5",onClick:e=>{e.stopPropagation(),r((e=>!e))}}),a.createElement("div",{className:(n?"flex":"hidden")+"\n              p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-7 min-w[140px] rounded-xl sidebar"},a.createElement("ul",{className:"list-none flex flex-col justify-end items-center flex-1"},d.map(((e,t)=>a.createElement("li",{className:u(e.path,t),key:t},a.createElement(l,{to:e.path,onClick:p},e.text))))))))},p={boxWidth:"xl:max-w-[1280px] w-full",nadpisY:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-yellow-400",nadpisG:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-green-500",divNadpisAnim:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 via-black to-green-500 animate-text",heading2:"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center",paragraph:"font-poppins font-normal text-[18px] leading-[30.8px]",flexCenter:"flex justify-center items-center",flexStart:"flex justify-center items-start",paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",paddingY1:"sm:pb-16 py-6",padding:"sm:px-16 px-6 sm:py-12 py-4",marginX:"sm:mx-16 mx-6",marginY:"sm:my-16 my-6",footerH1:"text-2xl mb-2",footerIcon:"w-[20%] p-3 mt-1 ml-20 scale-100 hover:scale-125 lg:p-1 lg:mt-1 md:p-6 md:mt-0 sm:p-4 sm:mt-0 ss:p-1 ss:mt-3 xs:p-0 xs:mt-6"},d=()=>a.createElement("section",{className:`${p.paddingY1} flex-col`},a.createElement("div",{className:`hidden sm:${p.flexCenter}`},a.createElement("a",{href:"/FBCSmichov1/"},a.createElement("img",{src:o,alt:"FBCSmichov-logo",className:"w-[260px] object-contain hover:scale-110"}))),a.createElement("div",{className:"flex flex-wrap w-full mb-8 xs:ml-4 ss:ml-12 sm:ml-15 ml-12"},a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},a.createElement("h1",{className:`${p.footerH1} text-white font-medium ml-5`},"Adresa:"),a.createElement("p",{className:`${p.paragraph} text-white font-medium ml-5`},"Ulice a č. popisné ",a.createElement("br",null),"Město ",a.createElement("br",null),"00000 ",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},a.createElement("h1",{className:`${p.footerH1} text-white font-medium ml-5`},"Kontakty:"),a.createElement("p",{className:`${p.paragraph} text-white font-medium ml-5`},"Jiří Irlbek ",a.createElement("br",null),"+420 775 558 518 ",a.createElement("br",null),"irlbek@fbcsmichov.cz ",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2 mt-8"},a.createElement("h1",{className:`${p.footerH1} text-white font-medium ml-5`}),a.createElement("p",{className:`${p.paragraph} text-white font-medium ml-5`},"Viktor Martínek ",a.createElement("br",null),"+420 602 724 543 ",a.createElement("br",null),"vi.ma2525@gmail.com ",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},a.createElement("img",{src:"/FBCSmichov1/assets/facebook.eb48cee5.svg",alt:"FB icon",className:`${p.footerIcon}`}),a.createElement("img",{src:"/FBCSmichov1/assets/instagram.a43eb99f.svg",alt:"IG icon",className:`${p.footerIcon}`}))));function x(){return a.createElement("section",{id:"hero",className:"flex md:flex-row flex-col"},a.createElement("div",{className:"container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"},a.createElement(l,{to:"/clanek",className:"block rounded-3xl max-w-sm gap-3 mx-auto sm:max-w-full hover:bg-gray-400 lg:grid lg:grid-cols-12 bg-gray-300"},a.createElement("img",{src:"/FBCSmichov1/assets/tranava-florball.723427f5.png",alt:"",className:"object-cover w-full h-64 rounded-l-3xl sm:h-96 lg:col-span-7 dark:bg-gray-500 pointer-events-none"}),a.createElement("div",{className:"p-6 space-y-2 lg:col-span-5 pointer-events-none"},a.createElement("h3",{className:"text-2xl font-semibold sm:text-4xl"},"Článek o florbalistech"),a.createElement("span",{className:"text-xs dark:text-gray-400"},"February 19, 2021"),a.createElement("p",null,"Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id."))),a.createElement("div",{className:"grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"},a.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl"},a.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?1"}),a.createElement("div",{className:"p-6 space-y-2"},a.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),a.createElement("span",{className:"text-xs dark:text-gray-400"},"January 21, 2021"),a.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),a.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl"},a.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?2"}),a.createElement("div",{className:"p-6 space-y-2"},a.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),a.createElement("span",{className:"text-xs dark:text-gray-400"},"January 22, 2021"),a.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),a.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl"},a.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?3"}),a.createElement("div",{className:"p-6 space-y-2"},a.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),a.createElement("span",{className:"text-xs dark:text-gray-400"},"January 23, 2021"),a.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),a.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl hidden sm:block"},a.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?4"}),a.createElement("div",{className:"p-6 space-y-2"},a.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),a.createElement("span",{className:"text-xs dark:text-gray-400"},"January 24, 2021"),a.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),a.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl hidden sm:block"},a.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?5"}),a.createElement("div",{className:"p-6 space-y-2"},a.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),a.createElement("span",{className:"text-xs dark:text-gray-400"},"January 25, 2021"),a.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),a.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl hidden sm:block"},a.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?6"}),a.createElement("div",{className:"p-6 space-y-2"},a.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),a.createElement("span",{className:"text-xs dark:text-gray-400"},"January 26, 2021"),a.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.")))),a.createElement("div",{className:"flex justify-center"},a.createElement("button",{type:"button",className:"px-6 py-3 text-sm hover:underline bg-green-500 rounded-3xl dark:text-gray-800 hover:scale-105"},"Načíst více..."))),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient"}))}function f(){return a.createElement("div",{className:`${p.padingX} ${p.flex}`},a.createElement("div",{className:`${p.marginX} flex-1 `},a.createElement("div",{className:`${p.nadpisY}`},"Informace o klubu"),a.createElement("p",{className:`${p.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, kamarádské atmosféry a vytváříme celoroční sportovní program. ",a.createElement("br",null),a.createElement("br",null),"Naše motto je: ............................................................",a.createElement("br",null),a.createElement("br",null),"Klubové barvy: ",a.createElement("span",{className:"text-green-500"},"Zelená"),", ",a.createElement("span",{className:"text-yellow-400"},"žlutá")," a ",a.createElement("span",null,"bílá")," ",a.createElement("i",null,"(nebyla by lepší barevná kolečka?)"))))}function g(){return a.createElement("div",{className:`${p.padingX} ${p.flex}`},a.createElement("div",{className:`${p.marginX} flex-1 `},a.createElement("div",{className:`${p.nadpisG}`},"Týmy"),a.createElement("p",{className:`${p.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")))}function b(){return e.exports.useEffect((()=>{const e=n.map("map").setView([50.07319998321817,14.355945269261003],13);n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',maxZoom:18}).addTo(e);n.marker([50.07319998321817,14.355945269261003]).addTo(e).bindPopup("Naše hala")}),[]),a.createElement("div",{className:`${p.padingX} ${p.flex}`},a.createElement("div",{className:`${p.marginX} flex-1`},a.createElement("div",{className:`${p.nadpisY}`},"Tréninky"),a.createElement("p",{className:`${p.paragraph} text-white my-12 ss:mx-20 text-center`},"Základní škola Weberova, Weberova 1/1090, Praha 5- Košíře, Psč: 150 00"),a.createElement("div",{className:"relative z-0"},a.createElement("div",{className:"w-3/4 mx-auto h-64 md:h-96 rounded-3xl shadow-2xl",id:"map"})),a.createElement("div",{className:"w-3/4 mx-auto my-5 py-1 bg-yellow-400 rounded-3xl shadow-2xl"},a.createElement("p",{className:`${p.paragraph} text-black my-12 ss:mx-20 text-center sm:text-left`},"Středa: ...................",a.createElement("br",null),a.createElement("br",null),"Pátek: ...................."))))}function h(){return a.createElement("div",{className:`${p.padingX} ${p.flex}`},a.createElement("div",{className:`${p.marginX} flex-1 `},a.createElement("div",{className:`${p.nadpisG}`},"Partneři"),a.createElement("p",{className:`${p.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")))}function v(){return a.createElement("div",{className:`${p.padingX} ${p.flex}`},a.createElement("div",{className:`${p.marginX} flex-1 `},a.createElement("div",{className:`${p.nadpisY}`},"Kontakt"),a.createElement("div",{className:"flex flex-col sm:flex-row flex-wrap w-full mb-8 items-center"},a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},a.createElement("img",{src:c,alt:"avatar",className:"w-44 mx-auto"}),a.createElement("h1",{className:`${p.footerH1} text-green-500 text-center font-medium`},"Předseda klubu"),a.createElement("p",{className:`${p.paragraph} text-white text-center font-medium`},"Jiří Irlbek",a.createElement("br",null),"+420 775 558 518",a.createElement("br",null),"irlbek@fbcsmichov.cz",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},a.createElement("img",{src:c,alt:"avatar",className:"w-44 mx-auto"}),a.createElement("h1",{className:`${p.footerH1} text-yellow-400 text-center font-medium`},"Sekretář klubu"),a.createElement("p",{className:`${p.paragraph} text-white text-center font-medium`},"Aneta ......",a.createElement("br",null),"+420 000 000 000",a.createElement("br",null),"aneta@fbcsmichov.cz",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},a.createElement("img",{src:c,alt:"avatar",className:"w-44 mx-auto"}),a.createElement("h1",{className:`${p.footerH1} text-green-500 text-center font-medium`},"Člen výboru klubu"),a.createElement("p",{className:`${p.paragraph} text-white text-center font-medium`},"Viktor Martínek ",a.createElement("br",null),"+420 602 724 543 ",a.createElement("br",null),"vi.ma2525@gmail.com ",a.createElement("br",null))),a.createElement("div",{className:"my-10"}))))}function E(){return a.createElement("div",{className:`${p.padingX} ${p.flex}`},a.createElement("div",{className:`${p.marginX} flex-1 `},a.createElement("div",{className:`${p.heading2}`},"Článek o florbalistech"),a.createElement("p",{className:`${p.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")))}function N(){return a.createElement(r,{basename:"/FBCSmichov1"},a.createElement("div",{className:"bg-primary fixed top-0 left-0 right-0 bottom-0"},a.createElement("div",{className:"absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll"},a.createElement("div",{className:"w-full overflow-hidden"},a.createElement("div",{className:`bg-primary ${p.padingX} ${p.flexCenter}`},a.createElement("div",{className:`text-white ${p.boxWidth} fixed top-0 z-10`},a.createElement(u,null))),a.createElement("div",{className:`${p.flexStart} ${p.paddingY}`},a.createElement("div",{className:`${p.paddingY} ${p.boxWidth}`},a.createElement(s,null,a.createElement(i,{path:"/",element:a.createElement(x,null)}),a.createElement(i,{path:"/klub",element:a.createElement(f,null)}),a.createElement(i,{path:"/tymy",element:a.createElement(g,null)}),a.createElement(i,{path:"/treninky",element:a.createElement(b,null)}),a.createElement(i,{path:"/partneri",element:a.createElement(h,null)}),a.createElement(i,{path:"/kontakt",element:a.createElement(v,null)}),a.createElement(i,{path:"/clanek",element:a.createElement(E,null)})))),a.createElement("div",{className:`bg-primary ${p.paddingX} ${p.flexCenter}`},a.createElement("div",{className:`${p.boxWidth}`},a.createElement(d,null)))))))}m.render(a.createElement(a.StrictMode,null,a.createElement(N,null)),document.getElementById("root"));
