import{r as e,R as t,L as a,a as l,B as r,b as n,c as s,d as o}from"./vendor.ac9fb298.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var c="/FBCSmichov1/assets/FBC_Smichov _gravatar.0ac6a31b.png",i="/FBCSmichov1/assets/FBC_Smichov_txt.6139a9cf.png";const m=()=>{const[l,r]=e.exports.useState(!1);return t.createElement("nav",{className:"w-full flex py-2 items-center xs:py-1 navbar top-0 bg-primary rounded-3xl"},t.createElement("a",{href:"/FBCSmichov1/",className:"hidden sm:flex md:flex lg:flex xl:flex w-1/12 xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 object-contain cursor-pointer scale-100 hover:scale-110"},t.createElement("img",{src:c,alt:"Logo"})),t.createElement("a",{href:"/FBCSmichov1/",className:"w-60 object-contain cursor-pointer sm:hidden"},t.createElement("img",{src:i,alt:"Logo"})),t.createElement("ul",{className:"list-none sm:flex hidden justify-end items-center flex-1"},t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"},t.createElement(a,{to:"/",className:""},"Home")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"},t.createElement(a,{to:"/klub",className:""},"Klub")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"},t.createElement(a,{to:"/tymy",className:""},"Týmy")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"},t.createElement(a,{to:"/treninky",className:""},"Tréninky")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"},t.createElement(a,{to:"/partneri",className:""},"Partneři")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"},t.createElement(a,{to:"/kontakt",className:""},"Kontakt"))),t.createElement("div",{className:"sm:hidden flex flex-1 items-center justify-end"},t.createElement("img",{src:l?"/FBCSmichov1/assets/close.0a9240f8.svg":"/FBCSmichov1/assets/menu.f4bfbd85.svg",alt:"MenuButton",className:"w-[28px] h-[28px] object-contain mr-5",onClick:()=>r((e=>!e))}),t.createElement("div",{className:(l?"flex":"hidden")+"\n              p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-7 min-w[140px] rounded-xl sidebar"},t.createElement("ul",{className:"list-none flex flex-col justify-end items-center flex-1"},t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"},t.createElement(a,{to:"/",className:""},"Home")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"},t.createElement(a,{to:"/klub",className:""},"Klub")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"},t.createElement(a,{to:"/tymy",className:""},"Týmy")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"},t.createElement(a,{to:"/treninky",className:""},"Tréninky")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-green-500"},t.createElement(a,{to:"/partneri",className:""},"Partneři")),t.createElement("li",{className:"text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 hover:text-yellow-400"},t.createElement(a,{to:"/kontakt",className:""},"Kontakt"))))))},u={boxWidth:"xl:max-w-[1280px] w-full",nadpisY:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-yellow-400",nadpisG:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-green-500",divNadpisAnim:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 via-black to-green-500 animate-text",heading2:"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center",paragraph:"font-poppins font-normal text-[18px] leading-[30.8px]",flexCenter:"flex justify-center items-center",flexStart:"flex justify-center items-start",paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",paddingY1:"sm:pb-16 py-6",padding:"sm:px-16 px-6 sm:py-12 py-4",marginX:"sm:mx-16 mx-6",marginY:"sm:my-16 my-6",footerH1:"text-2xl mb-2",footerIcon:"w-[20%] p-3 mt-1 ml-20 scale-100 hover:scale-125 lg:p-1 lg:mt-1 md:p-6 md:mt-0 sm:p-4 sm:mt-0 ss:p-1 ss:mt-3 xs:p-0 xs:mt-6"},p=()=>t.createElement("section",{className:`${u.paddingY1} flex-col`},t.createElement("div",{className:`hidden sm:${u.flexCenter}`},t.createElement("a",{href:"/FBCSmichov1/"},t.createElement("img",{src:i,alt:"FBCSmichov-logo",className:"w-[260px] object-contain hover:scale-110"}))),t.createElement("div",{className:"flex flex-wrap w-full mb-8 xs:ml-4 ss:ml-12 sm:ml-15 ml-12"},t.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},t.createElement("h1",{className:`${u.footerH1} text-white font-medium ml-5`},"Adresa:"),t.createElement("p",{className:`${u.paragraph} text-white font-medium ml-5`},"Ulice a č. popisné ",t.createElement("br",null),"Město ",t.createElement("br",null),"00000 ",t.createElement("br",null))),t.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},t.createElement("h1",{className:`${u.footerH1} text-white font-medium ml-5`},"Kontakty:"),t.createElement("p",{className:`${u.paragraph} text-white font-medium ml-5`},"Jiří Irlbek ",t.createElement("br",null),"+420 775 558 518 ",t.createElement("br",null),"irlbek@fbcsmichov.cz ",t.createElement("br",null))),t.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2 mt-8"},t.createElement("h1",{className:`${u.footerH1} text-white font-medium ml-5`}),t.createElement("p",{className:`${u.paragraph} text-white font-medium ml-5`},"Viktor Martínek ",t.createElement("br",null),"+420 602 724 543 ",t.createElement("br",null),"vi.ma2525@gmail.com ",t.createElement("br",null))),t.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},t.createElement("img",{src:"/FBCSmichov1/assets/facebook.eb48cee5.svg",alt:"FB icon",className:`${u.footerIcon}`}),t.createElement("img",{src:"/FBCSmichov1/assets/instagram.a43eb99f.svg",alt:"IG icon",className:`${u.footerIcon}`}))));function d(){return t.createElement("section",{id:"hero",className:"flex md:flex-row flex-col"},t.createElement("div",{className:"container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"},t.createElement("a",{rel:"noopener noreferrer",href:"#",className:"block rounded-3xl max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-300"},t.createElement("img",{src:"/FBCSmichov1/assets/tranava-florball.723427f5.png",alt:"",className:"object-cover w-full h-64 rounded-l-3xl sm:h-96 lg:col-span-7 dark:bg-gray-500"}),t.createElement("div",{className:"p-6 space-y-2 lg:col-span-5"},t.createElement("h3",{className:"text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"},"Článek o florbalistech"),t.createElement("span",{className:"text-xs dark:text-gray-400"},"February 19, 2021"),t.createElement("p",null,"Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id."))),t.createElement("div",{className:"grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"},t.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl"},t.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?1"}),t.createElement("div",{className:"p-6 space-y-2"},t.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),t.createElement("span",{className:"text-xs dark:text-gray-400"},"January 21, 2021"),t.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),t.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl"},t.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?2"}),t.createElement("div",{className:"p-6 space-y-2"},t.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),t.createElement("span",{className:"text-xs dark:text-gray-400"},"January 22, 2021"),t.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),t.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl"},t.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?3"}),t.createElement("div",{className:"p-6 space-y-2"},t.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),t.createElement("span",{className:"text-xs dark:text-gray-400"},"January 23, 2021"),t.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),t.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl hidden sm:block"},t.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?4"}),t.createElement("div",{className:"p-6 space-y-2"},t.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),t.createElement("span",{className:"text-xs dark:text-gray-400"},"January 24, 2021"),t.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),t.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl hidden sm:block"},t.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?5"}),t.createElement("div",{className:"p-6 space-y-2"},t.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),t.createElement("span",{className:"text-xs dark:text-gray-400"},"January 25, 2021"),t.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."))),t.createElement("a",{rel:"noopener noreferrer",href:"#",className:"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded-3xl hidden sm:block"},t.createElement("img",{role:"presentation",className:"object-cover w-full rounded-t-3xl h-44 dark:bg-gray-500",src:"https://source.unsplash.com/random/480x360?6"}),t.createElement("div",{className:"p-6 space-y-2"},t.createElement("h3",{className:"text-2xl font-semibold group-hover:underline group-focus:underline"},"In usu laoreet repudiare legendos"),t.createElement("span",{className:"text-xs dark:text-gray-400"},"January 26, 2021"),t.createElement("p",null,"Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.")))),t.createElement("div",{className:"flex justify-center"},t.createElement("button",{type:"button",className:"px-6 py-3 text-sm hover:underline bg-green-500 rounded-3xl dark:text-gray-800 hover:scale-105"},"Načíst více..."))),t.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient"}))}function x(){return t.createElement("div",{className:`${u.padingX} ${u.flex}`},t.createElement("div",{className:`${u.marginX} flex-1 `},t.createElement("div",{className:`${u.nadpisY}`},"Informace o klubu"),t.createElement("p",{className:`${u.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, kamarádské atmosféry a vytváříme celoroční sportovní program. ",t.createElement("br",null),t.createElement("br",null),"Naše motto je: ............................................................",t.createElement("br",null),t.createElement("br",null),"Klubové barvy: ",t.createElement("span",{className:"text-green-500"},"Zelená"),", ",t.createElement("span",{className:"text-yellow-400"},"žlutá")," a ",t.createElement("span",null,"bílá")," ",t.createElement("i",null,"(nebyla by lepší barevná kolečka?)"))))}function f(){return t.createElement("div",{className:`${u.padingX} ${u.flex}`},t.createElement("div",{className:`${u.marginX} flex-1 `},t.createElement("div",{className:`${u.nadpisG}`},"Týmy"),t.createElement("p",{className:`${u.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")))}function g(){return e.exports.useEffect((()=>{const e=l.map("map").setView([50.07319998321817,14.355945269261003],13);l.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',maxZoom:18}).addTo(e);const t=l.icon({iconUrl:"/src/static/favicon.ico",iconSize:[62,50],iconAnchor:[16,32]});l.marker([50.07319998321817,14.355945269261003],{icon:t}).addTo(e).bindPopup("Your marker text")}),[]),t.createElement("div",{className:`${u.padingX} ${u.flex}`},t.createElement("div",{className:`${u.marginX} flex-1`},t.createElement("div",{className:`${u.nadpisY}`},"Tréninky"),t.createElement("p",{className:`${u.paragraph} text-white my-12 ss:mx-20 text-center`},"Základní škola Weberova, Weberova 1/1090, Praha 5- Košíře, Psč: 150 00"),t.createElement("div",{className:"w-3/4 mx-auto h-64 md:h-96 rounded-3xl shadow-2xl",id:"map"}),t.createElement("div",{className:"w-3/4 mx-auto my-5 py-1 bg-yellow-400 rounded-3xl shadow-2xl"},t.createElement("p",{className:`${u.paragraph} text-black my-12 ss:mx-20 text-center sm:text-left`},"Středa: ...................",t.createElement("br",null),t.createElement("br",null),"Pátek: ...................."))))}function h(){return t.createElement("div",{className:`${u.padingX} ${u.flex}`},t.createElement("div",{className:`${u.marginX} flex-1 `},t.createElement("div",{className:`${u.nadpisG}`},"Partneři"),t.createElement("p",{className:`${u.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")))}function b(){return t.createElement("div",{className:`${u.padingX} ${u.flex}`},t.createElement("div",{className:`${u.marginX} flex-1 `},t.createElement("div",{className:`${u.nadpisY}`},"Kontakt"),t.createElement("div",{className:"flex flex-col sm:flex-row flex-wrap w-full mb-8 items-center"},t.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},t.createElement("img",{src:c,alt:"avatar",className:"w-44 mx-auto"}),t.createElement("h1",{className:`${u.footerH1} text-green-500 text-center font-medium`},"Předseda klubu"),t.createElement("p",{className:`${u.paragraph} text-white text-center font-medium`},"Jiří Irlbek",t.createElement("br",null),"+420 775 558 518",t.createElement("br",null),"irlbek@fbcsmichov.cz",t.createElement("br",null))),t.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},t.createElement("img",{src:c,alt:"avatar",className:"w-44 mx-auto"}),t.createElement("h1",{className:`${u.footerH1} text-yellow-400 text-center font-medium`},"Sekretář klubu"),t.createElement("p",{className:`${u.paragraph} text-white text-center font-medium`},"Aneta ......",t.createElement("br",null),"+420 000 000 000",t.createElement("br",null),"aneta@fbcsmichov.cz",t.createElement("br",null))),t.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},t.createElement("img",{src:c,alt:"avatar",className:"w-44 mx-auto"}),t.createElement("h1",{className:`${u.footerH1} text-green-500 text-center font-medium`},"Člen výboru klubu"),t.createElement("p",{className:`${u.paragraph} text-white text-center font-medium`},"Viktor Martínek ",t.createElement("br",null),"+420 602 724 543 ",t.createElement("br",null),"vi.ma2525@gmail.com ",t.createElement("br",null))),t.createElement("div",{className:"my-10"}))))}function E(){return t.createElement(r,{basename:"/FBCSmichov1"},t.createElement("div",{className:"bg-primary fixed top-0 left-0 right-0 bottom-0"},t.createElement("div",{className:"absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll"},t.createElement("div",{className:"w-full overflow-hidden"},t.createElement("div",{className:`bg-primary ${u.padingX} ${u.flexCenter}`},t.createElement("div",{className:`text-white ${u.boxWidth} fixed top-0`},t.createElement(m,null))),t.createElement("div",{className:`${u.flexStart} ${u.paddingY}`},t.createElement("div",{className:`${u.paddingY} ${u.boxWidth}`},t.createElement(n,null,t.createElement(s,{path:"/",element:t.createElement(d,null)}),t.createElement(s,{path:"/klub",element:t.createElement(x,null)}),t.createElement(s,{path:"/tymy",element:t.createElement(f,null)}),t.createElement(s,{path:"/treninky",element:t.createElement(g,null)}),t.createElement(s,{path:"/partneri",element:t.createElement(h,null)}),t.createElement(s,{path:"/kontakt",element:t.createElement(b,null)})))),t.createElement("div",{className:`bg-primary ${u.paddingX} ${u.flexCenter}`},t.createElement("div",{className:`${u.boxWidth}`},t.createElement(p,null)))))))}o.render(t.createElement(t.StrictMode,null,t.createElement(E,null)),document.getElementById("root"));
