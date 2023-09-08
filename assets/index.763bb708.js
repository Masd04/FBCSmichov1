import{r as e,u as t,R as a,L as l,M as n,W as r,a as s,i as m,b as c,c as o,e as i,B as u,d as p,f as d,g as x,q as f}from"./vendor.030267b9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var h="/FBCSmichov1/assets/FBC_Smichov _gravatar.0ac6a31b.png",b="/FBCSmichov1/assets/FBC_Smichov_txt.6139a9cf.png",g="/FBCSmichov1/assets/bazen.04d8ea48.png",v="/FBCSmichov1/assets/skola.e73325b0.png",E="/FBCSmichov1/assets/v_gym.5fe9707f.png",w="/FBCSmichov1/assets/venk_hriste.ae0d9741.png",N="/FBCSmichov1/assets/deti1.eb4d7b5b.jpg",y="/FBCSmichov1/assets/deti2.2972ffae.jpg";const k={boxWidth:"xl:max-w-[1280px] w-full",nadpisY:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-fbcyellow select-none",nadpisG:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-fbcgreen select-none",nadpisHome:"font-poppins font-bold text-[1.5rem] xs:text-[2.2rem] sm:text-[40px] xs:leading-[76.8px] sm:leading-[66.8px] w-full text-center text-fbcgreen select-none",divNadpisAnim:"font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 via-black to-fbcgreen animate-text",heading2:"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center select-none",heading3:"font-poppins font-bold text-[1.5rem] xs:text-[2.2rem] sm:text-[2rem] xs:leading-[76.8px] sm:leading-[66.8px] w-full text-center text-fbcgreen select-none",paragraph:"font-poppins font-normal text-[18px] leading-[30.8px]",paragraphTreninky:"font-poppins font-normal text-[18px] sm:text-[25px] leading-[30.8px]",spanBgTxt:"bg-black bg-opacity-50 rounded-lg px-2 py-1",spanBgTxt1:"bg-gray-400 bg-opacity-100 rounded-lg px-2 py-1 border-2 border-black",paragraphKlub:"font-poppins font-medium text-[20px] leading-[30.8px]",paragraphPrisp:"font-poppins font-normal text-[15px] leading-[30px] text-gray-300",paragraphHome:"font-base text-[20px] leading-[30.8px]",flexCenter:"flex justify-center items-center",flexStart:"flex justify-center items-start",paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",paddingY1:"sm:pb-1 py-6",padding:"sm:px-16 px-6 sm:py-12 py-4",marginX:"sm:mx-16 mx-6",marginY:"sm:my-16 my-6",footerH1:"text-2xl mb-2 select-none",footerIcon:"w-[20%] p-3 mt-1 ml-20 scale-100 hover:scale-125 lg:p-1 lg:mt-1 md:p-6 md:mt-0 sm:p-4 sm:mt-0 ss:p-1 ss:mt-3 xs:p-0 xs:mt-6",colorCirc:"inline-block w-4 h-4 rounded-full mx-1"},$=()=>{const[n,r]=e.exports.useState(!1),s=e.exports.useRef(),m=t(),{pathname:c}=m,o=window.innerWidth<=768,i=(e,t)=>{const a=t%2==0?"hover:text-fbcgreen":"hover:text-fbcyellow",l=c===e?a.replace("hover:",""):"";return`text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10 ${a} ${l}`};e.exports.useEffect((()=>{const e=e=>{if(!s.current.contains(e.target)){if(!n)return;r(!1)}};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[n]);const u=()=>{r(!1)},p=[{path:"/",text:"Home"},{path:"/prihlaska",text:"Přihláška"},{path:"/klub",text:"Klub"},{path:"/treninky",text:"Tréninky"},{path:"/kontakt",text:"Kontakt"}];return a.createElement(a.Fragment,null,a.createElement("div",{className:"hidden sm:block absolute top-0 left-0 w-full h-16 bg-fbcyellow"},a.createElement("div",{className:"flex items-start justify-end h-full select-none"},a.createElement("a",{href:"https://www.ceskyflorbal.cz/",target:"_blank",className:"cursor-pointer mr-40"},a.createElement("div",{className:"bg-black px-6 py-1 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10"},a.createElement("img",{src:"https://lista.ceskyflorbal.cz/img/svg-src/cesky-florbal-logo.svg",alt:"Český Florbal ikonka",className:"h-[2rem] mx-2 bg-white rounded-full"}),a.createElement("span",{className:"text-white font-serif font-bold text-xl"},"Český Florbal")))),a.createElement("a",{href:"https://www.wannadosports.com/wannado/",target:"_blank",className:"flex items-start justify-end h-full mr-[15rem] select-none"},a.createElement("div",{className:"bg-black px-2 py-2 mr-44 mt-[-3.68rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10"},a.createElement("img",{src:"https://www.wannadosports.com/wp-content/uploads/2018/06/wannado-white-cropped.png",alt:"Wannado logo",className:"h-[1.5rem] mx-2"})))),a.createElement("nav",{ref:s,className:"sm:relative flex w-full py-3 sm:py-6 navbar top-0 sm:mt-[3.1rem] ml-[0.16rem] sm:ml-[0.15rem] bg-primary rounded-2xl sm:rounded-3xl select-none"},a.createElement("a",{href:"/"},a.createElement("div",{className:"hidden sm:flex md:flex lg:flex xl:flex w-[12%] xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 xl:mt-6 lg:mt-3 md:mt-7 sm:mt-7 object-contain cursor-pointer scale-100 hover:scale-110 absolute top-[-50%] left-1 transform[-translate-x-1/2] self-stretch"},a.createElement("img",{src:h,alt:"Logo Hlava Kačera",className:"h-[200%]"}))),a.createElement("a",{href:o?"/":void 0,className:`w-60 lg:w-72 object-contain cursor-pointer lg:ml-52 md:ml-40 sm:ml-28 sm:hidden md:flex ${!o&&"pointer-events-none"}`},a.createElement("img",{src:b,alt:"Logo Textové"})),a.createElement("ul",{className:"list-none sm:flex hidden justify-end items-center flex-1"},p.map(((e,t)=>a.createElement("li",{className:i(e.path,t),key:t},a.createElement(l,{to:e.path},e.text))))),a.createElement("div",{className:"sm:hidden flex flex-1 items-center justify-end"},a.createElement("img",{src:n?"/FBCSmichov1/assets/close.0a9240f8.svg":"/FBCSmichov1/assets/menu.f4bfbd85.svg",alt:"MenuButton",className:"w-[28px] h-[28px] object-contain mr-5",onClick:e=>{e.stopPropagation(),r((e=>!e))}}),a.createElement("div",{className:(n?"flex":"hidden")+"\n              p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-7 min-w[140px] rounded-xl sidebar"},a.createElement("ul",{className:"list-none flex flex-col justify-end items-center flex-1"},p.map(((e,t)=>a.createElement("li",{className:i(e.path,t),key:t},a.createElement(l,{to:e.path,onClick:u},e.text)))))))))},C=()=>a.createElement("section",{className:`${k.paddingY1} flex-col`},a.createElement("div",{className:`hidden sm:${k.flexCenter}`},a.createElement("a",{href:"/FBCSmichov1/"},a.createElement("img",{src:b,alt:"FBCSmichov-logo",className:"w-[260px] object-contain hover:scale-110"}))),a.createElement("div",{className:"flex flex-wrap w-full mb-8 xs:ml-4 ss:ml-12 sm:ml-15 ml-12"},a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},a.createElement("h1",{className:`${k.footerH1} text-white font-medium ml-5`},"Adresa:"),a.createElement("p",{className:`${k.paragraph} text-white font-medium ml-5`},"Ulice a č. popisné ",a.createElement("br",null),"Město ",a.createElement("br",null),"00000 ",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},a.createElement("h1",{className:`${k.footerH1} text-white font-medium ml-5`},"Kontakty:"),a.createElement("p",{className:`${k.paragraph} text-white font-medium ml-5`},"Jiří Irlbek ",a.createElement("br",null),"+420 775 558 518 ",a.createElement("br",null),"irlbek@fbcsmichov.cz ",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2 mt-8"},a.createElement("h1",{className:`${k.footerH1} text-white font-medium ml-5`}),a.createElement("p",{className:`${k.paragraph} text-white font-medium ml-5`},"Viktor Martínek ",a.createElement("br",null),"+420 602 724 543 ",a.createElement("br",null),"vi.ma2525@gmail.com ",a.createElement("br",null))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2"},a.createElement("img",{src:"/FBCSmichov1/assets/facebook.eb48cee5.svg",alt:"FB icon",className:`${k.footerIcon}`}),a.createElement("img",{src:"/FBCSmichov1/assets/instagram.a43eb99f.svg",alt:"IG icon",className:`${k.footerIcon}`}))));function F({scrollRef:a}){const{pathname:l}=t();return e.exports.useEffect((()=>{a.current&&a.current.scrollTo(0,0)}),[l,a]),null}function j(){return a.createElement("div",{className:"block sm:hidden fixed top-0 left-0 w-full h-12 bg-fbcyellow z-10"},a.createElement("div",{className:"flex flex-row justify-evenly"},a.createElement("div",{className:"flex items-start justify-end h-full select-none"},a.createElement("a",{href:"https://www.wannadosports.com/wannado/",target:"_blank",className:"cursor-pointer"},a.createElement("div",{className:"bg-cover px-4 py-0 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10 h-[1.7rem]",style:{backgroundImage:"url(https://www.wannadosports.com/wp-content/uploads/2018/06/nilaBg.png)"}},a.createElement("img",{src:"https://www.wannadosports.com/wp-content/uploads/2018/06/wannado-white-cropped.png",alt:"Wannado logo",className:"h-[1.3rem]"})))),a.createElement("div",{className:"flex items-start justify-end h-full select-none"},a.createElement("a",{href:"https://www.ceskyflorbal.cz/",target:"_blank",className:"cursor-pointer"},a.createElement("div",{className:"bg-black px-4 py-0 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10 h-[1.7rem]"},a.createElement("img",{src:"https://lista.ceskyflorbal.cz/img/svg-src/cesky-florbal-logo.svg",alt:"Český Florbal ikonka",className:"h-[1.4rem] mx-2 bg-white rounded-full"}),a.createElement("span",{className:"text-white font-serif font-bold text-sm"},"Český Florbal"))))))}n.setAppElement("#root");function S(){const[t,s]=e.exports.useState(null),m=e=>{s(e)},c=()=>{s(null)};return a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("title",null,"Domovská stránka - FBC Smíchov"),a.createElement("meta",{name:"description",content:"Domovská stránka florbalového klubu FBC Smíchov. Florbalový klub FBC Smíchov je zaměřený především na děti a mládež."}),a.createElement("link",{rel:"canonical",href:"/"})),a.createElement("div",{className:`${k.marginX} sm:pt-5 flex-1 flex flex-wrap`},a.createElement("div",{className:"w-full h-auto md:h-32 mb-2 rounded-lg flex items-center bg-cover sm:bg-auto bg-center",style:{backgroundImage:"url(https://www.wannadosports.com/wp-content/uploads/2018/06/nilaBg.png)"}},a.createElement("div",{className:"w-2/3 p-4 text-center font-poppins font-semibold sm:font-nunito sm:font-normal text-xs xs:text-sm ss:text-base sm:text-xl md:text-2xl lg:text-4xl pl-0"},a.createElement("p",{className:"text-white select-none"},"S náborem nám pomáhá WANNADO."),a.createElement("p",{className:"text-white select-none"},"Stánek můžete navštívit na jejich festivalu.")),a.createElement("div",{className:"w-1/3 flex justify-start select-none"},a.createElement("a",{href:"https://www.wannadosports.com/wannado/",target:"_blank"},a.createElement("img",{src:"https://www.wannadosports.com/wp-content/uploads/2018/06/wannado-white-cropped.png",alt:"Wannado logo",className:"h-4 xs:h-6 ss:h-7 sm:h-8 md:h-11 lg:h-14 cursor-pointer scale-100 hover:scale-105"})))),a.createElement("div",{className:"w-full sm:w-1/2"},a.createElement("div",{className:`${k.spanBgTxt} my-1 sm:mx-5 sm:pb-0`},a.createElement("div",{className:`${k.nadpisHome} my-1`},a.createElement("h1",null,"Vítejte na našem novém webu!")),a.createElement("div",{className:"flex items-center justify-center pt-1 sm:pt-0"},a.createElement("img",{src:"/FBCSmichov1/assets/micek3.9fe3d119.png",alt:"Icon_Floorball",className:"h-9 mx-1"})),a.createElement("div",{className:"px-1 sm:px-2 md:px-10 text-center"},a.createElement("p",{className:`${k.paragraphHome} text-white my-5`},"Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, kamarádské atmosféry a vytváříme celoroční sportovní program. Pro informace o našich trénincích a klubových příspěvcích klikněte"," ",a.createElement(l,{to:"/treninky"},a.createElement("span",{className:"text-fbcgreen hover:underline"},a.createElement("b",null,"ZDE")))," ","nebo na banner vpravo.")),a.createElement("div",{className:"flex justify-center"},a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 my-1"},a.createElement("img",{src:y,alt:"Malí florbalisti se radují",className:"sm:w-auto object-cover border-4 border-white justify-self-center cursor-pointer",onClick:()=>m(y)}),a.createElement("img",{src:N,alt:"Malí florbalisti ve hře",className:"sm:w-[77%] object-cover border-4 border-white justify-self-center cursor-pointer",onClick:()=>m(N)}))))),a.createElement("div",{className:"w-full sm:w-1/2 flex flex-col items-center"},a.createElement("div",{className:"mt-8 mb-1 sm:my-1"},a.createElement(l,{to:"/treninky",className:"block cursor-pointer"},a.createElement("img",{src:"/FBCSmichov1/assets/Web_Letak_FBC.005d43a1.jpg",alt:"FBC Smíchov náborový leták",className:"w-full mx-auto scale-100 hover:scale-105"}))),a.createElement("div",{className:"flex justify-center mt-2"},a.createElement(l,{to:"/prihlaska",className:"px-16 py-3 my-2 text-lg font-bold hover:underline bg-fbcgreen rounded-3xl dark:text-gray-800 text-white hover:scale-105"},"PODAT PŘIHLÁŠKU"))),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"}),a.createElement(n,{isOpen:null!==t,onRequestClose:c,contentLabel:"Selected Image",className:"custom-modal",overlayClassName:"custom-overlay"},a.createElement("div",{className:"flex justify-end absolute top-0 right-0 mt-2 mr-2"},a.createElement("button",{className:"text-white text-xl",onClick:c},"×")),t&&a.createElement("img",{src:t,alt:"Selected Image",className:"max-w-full max-h-full"}))))}function B(){return a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("title",null,"Informace o klubu - FBC Smíchov"),a.createElement("meta",{name:"description",content:"Informace o mládežnickém florbalovém klubu FBC Smíchov a výše placených příspěvků"}),a.createElement("link",{rel:"canonical",href:"/klub"})),a.createElement("div",{className:`${k.padingX} ${k.flex}`},a.createElement("div",{className:`${k.marginX} flex-1 `},a.createElement("div",{className:`${k.nadpisG}`},a.createElement("h1",null,"Informace o klubu")),a.createElement("div",{className:"flex justify-center"},a.createElement("div",{className:"bg-black bg-opacity-50 p-3 rounded-lg"},a.createElement("p",{className:`${k.paragraph} text-white mt-5 ss:mx-20 text-center`},"Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, kamarádské atmosféry a vytváříme celoroční sportovní program. ",a.createElement("br",null),a.createElement("br",null)),a.createElement("div",{className:"text-center"},a.createElement("p",{className:`${k.paragraphKlub} text-white`},a.createElement("br",null),"Klubové barvy: ",a.createElement("br",null),a.createElement("span",{className:"text-fbcgreen"}," Zelená",a.createElement("div",{className:`${k.colorCirc} bg-fbcgreen`})),",",a.createElement("span",{className:"text-fbcyellow"}," žlutá",a.createElement("div",{className:`${k.colorCirc} bg-fbcyellow`})," "),"a ",a.createElement("span",null,"bílá",a.createElement("div",{className:`${k.colorCirc} bg-white`})))),a.createElement("div",{className:"text-center"},a.createElement("h2",{className:`${k.heading3} pt-7`},"Členství v klubu"),a.createElement("p",{className:`${k.paragraph} text-white text-center`},"Nábor probíhá pruběžně celý rok."),a.createElement("p",{className:`${k.paragraphKlub} text-white`},a.createElement("br",null),a.createElement("h3",null,"Příspěvky:"),a.createElement("span",{className:`${k.paragraph} text-white`},"500 Kč / měsíc"),a.createElement("br",null),a.createElement("span",{className:`${k.paragraphPrisp}`},"( splatné dopředu )"),a.createElement("br",null),a.createElement("br",null),a.createElement("span",{className:`${k.paragraph} text-white`},"říjen - leden : 2000 Kč"),a.createElement("br",null),a.createElement("span",{className:`${k.paragraph} text-white`},"únor - červen : 2500 Kč")))))),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"})))}function q(){return a.createElement("div",{className:`${k.padingX} ${k.flex}`},a.createElement("div",{className:`${k.marginX} flex-1 `},a.createElement("div",{className:`${k.nadpisY}`},"Týmy"),a.createElement("p",{className:`${k.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"}))}n.setAppElement("#root");function z(){const[t,i]=e.exports.useState(null),u=e=>{i(e)},p=()=>{i(null)},d=e.exports.useRef(null),x=e.exports.useRef(null);return s.Icon.Default.mergeOptions({iconRetinaUrl:m,iconUrl:c,shadowUrl:o}),e.exports.useEffect((()=>{d.current&&d.current.remove(),d.current=s.map("map1").setView([50.07319998321817,14.355945269261003],13),s.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',maxZoom:18}).addTo(d.current);return s.marker([50.07319998321817,14.355945269261003]).addTo(d.current).bindPopup("ZŠ Weberova"),()=>{d.current&&d.current.remove()}}),[]),e.exports.useEffect((()=>{x.current&&x.current.remove(),x.current=s.map("map2").setView([50.08050725270203,14.406799073676527],13),s.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',maxZoom:18}).addTo(x.current);return s.marker([50.08050725270203,14.406799073676527]).addTo(x.current).bindPopup("Gymnázium Christiana Doplera"),()=>{x.current&&x.current.remove()}}),[]),a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("title",null,"Tréninky - FBC Smíchov"),a.createElement("meta",{name:"description",content:"Informace o časech a místech pravidelných tréninků, fotky sportovišť a mapy."}),a.createElement("link",{rel:"canonical",href:"/treninky"})),a.createElement("div",{className:`${k.padingX} ${k.flex}`},a.createElement("div",{className:`${k.marginX} flex-1`},a.createElement("div",{className:`${k.nadpisY}`},a.createElement("h1",null,"Tréninky")),a.createElement("p",{className:`${k.paragraphTreninky} text-white my-10 ss:mx-20 text-center`},a.createElement("span",{className:`${k.spanBgTxt}`},"Základní škola Weberova, Weberova 1/1090, Praha 5 - Košíře, PSČ: 150 00")),a.createElement("div",{className:"flex justify-center mb-5"},a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"},a.createElement("img",{src:v,alt:"Fotka Školy - ZŠ Weberova",className:"sm:w-auto sm:h-64 object-cover border-2",onClick:()=>u(v)}),a.createElement("img",{src:g,alt:"Fotka bazénu - ZŠ Weberova",className:"sm:w-auto sm:h-64 object-cover border-2",onClick:()=>u(g)}),a.createElement("img",{src:E,alt:"Fotka tělocvičny - ZŠ Weberova",className:"sm:w-auto sm:h-64 object-cover border-2",onClick:()=>u(E)}),a.createElement("img",{src:w,alt:"Fotka venkovního hřiště - ZŠ Weberova",className:"sm:w-auto sm:h-64 object-cover border-2",onClick:()=>u(w)}))),a.createElement("div",{className:"flex rounded-3xl shadow-2xl overflow-hidden w-[95%] sm:w-3/4 mx-auto"},a.createElement("div",{className:"w-[65%] relative z-0"},a.createElement("div",{className:"w-full h-64 md:h-96",id:"map1"})),a.createElement("div",{className:"w-[35%] bg-fbcyellow flex items-center justify-center"},a.createElement("p",{className:`${k.paragraph} text-black text-xs ss:text-base md:text-2xl md:my-12 mx-3 ss:mx-14 text-center`},a.createElement("b",null,"Středa:"),a.createElement("br",null),"19:00 - 20:15",a.createElement("br",null),a.createElement("br",null),a.createElement("b",null,"Pátek:"),a.createElement("br",null),"16:30 - 17:45"))),a.createElement("p",{className:`${k.paragraphTreninky} text-white mb-12 mt-24 ss:mx-20 text-center`},a.createElement("span",{className:`${k.spanBgTxt}`},"Gymnázium Christiana Doplera, Zborovská 621, Praha 5 - Košíře, ",a.createElement("br",{className:"xs:hidden"}),"PSČ: 150 00")),a.createElement("div",{className:"flex rounded-3xl shadow-2xl overflow-hidden w-[95%] sm:w-3/4 mx-auto"},a.createElement("div",{className:"w-[65%] relative z-0"},a.createElement("div",{className:"w-full h-64 md:h-96",id:"map2"})),a.createElement("div",{className:"w-[35%] bg-fbcyellow flex items-center justify-center"},a.createElement("p",{className:`${k.paragraph} text-black text-xs ss:text-base md:text-2xl md:my-12 mx-3 ss:mx-14 text-center`},a.createElement("b",null,"Pondělí:"),a.createElement("br",null),"17:00 - 18:00"))),a.createElement("div",{className:"flex justify-center my-6"},a.createElement(l,{to:"/prihlaska",className:"px-16 py-3 my-2 text-lg font-bold hover:underline bg-fbcgreen rounded-3xl dark:text-gray-800 text-white hover:scale-105"},"PODAT PŘIHLÁŠKU")),a.createElement("div",{className:"flex justify-center items-center"},a.createElement("div",{className:`${k.spanBgTxt} px-10`},a.createElement("h2",{className:`${k.heading3} pt-3 pb-3`},"Členství v klubu"),a.createElement("p",{className:`${k.paragraph} text-white text-center`},"Nábor probíhá pruběžně celý rok."),a.createElement("p",{className:`${k.paragraph} text-white text-center mt-3`},a.createElement("b",null,"Příspěvky:")),a.createElement("p",{className:`${k.paragraph} text-white text-center pb-3`},"900.-Kč měsíčně,",a.createElement("br",{className:"xs:hidden"})," 5 měsíců dopředu"))),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"})),a.createElement(n,{isOpen:null!==t,onRequestClose:p,contentLabel:"Selected Image",className:"custom-modal",overlayClassName:"custom-overlay"},a.createElement("div",{className:"flex justify-end absolute top-0 right-0 mt-2 mr-2"},a.createElement("button",{className:"text-white text-xl",onClick:p},"×")),t&&a.createElement("img",{src:t,alt:"Selected Image",className:"max-w-full max-h-full"}))))}function P(){return a.createElement("div",{className:`${k.padingX} ${k.flex}`},a.createElement("div",{className:`${k.marginX} flex-1 `},a.createElement("div",{className:`${k.nadpisY}`},"Partneři"),a.createElement("p",{className:`${k.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"}))}function _(){return a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("title",null,"Kontakt - FBC Smíchov"),a.createElement("meta",{name:"description",content:"Výpis kontaktů na vedení mládežnického forbalového klubu FBC Smíchov."}),a.createElement("link",{rel:"canonical",href:"/kontakt"})),a.createElement("div",{className:`${k.padingX} ${k.flex}`},a.createElement("div",{className:`${k.marginX} flex-1 `},a.createElement("div",{className:`${k.nadpisG}`},a.createElement("h1",null,"Kontakt")),a.createElement("div",{className:"flex flex-col sm:flex-row flex-wrap w-full mb-8 items-center"},a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},a.createElement("img",{src:h,alt:"Logo Hlava Kačera",className:"w-44 mx-auto"}),a.createElement("span",{className:`${k.spanBgTxt}`},a.createElement("h1",{className:`${k.footerH1} text-fbcgreen text-center font-medium`},"Předseda klubu"),a.createElement("p",{className:`${k.paragraph} text-white text-center font-medium`},"Jiří Irlbek",a.createElement("br",null),"+420 775 558 518",a.createElement("br",null),"irlbek@fbcsmichov.cz",a.createElement("br",null)))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},a.createElement("img",{src:h,alt:"Logo Hlava Kačera",className:"w-44 mx-auto"}),a.createElement("span",{className:`${k.spanBgTxt}`},a.createElement("h1",{className:`${k.footerH1} text-fbcyellow text-center font-medium`},"Sekretář klubu"),a.createElement("p",{className:`${k.paragraph} text-white text-center font-medium`},"Aneta ......",a.createElement("br",null),"+420 000 000 000",a.createElement("br",null),"vybor@fbcsmichov.cz",a.createElement("br",null)))),a.createElement("div",{className:"w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2"},a.createElement("img",{src:h,alt:"Logo Hlava Kačera",className:"w-44 mx-auto"}),a.createElement("span",{className:`${k.spanBgTxt}`},a.createElement("h1",{className:`${k.footerH1} text-fbcgreen text-center font-medium`},"Člen výboru klubu"),a.createElement("p",{className:`${k.paragraph} text-white text-center font-medium`},"Viktor Martínek ",a.createElement("br",null),"+420 602 724 543 ",a.createElement("br",null),"martinek@fbcsmichov.cz ",a.createElement("br",null)))),a.createElement("div",{className:"my-10"}))),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"})))}function L(){return a.createElement("div",{className:`${k.padingX} ${k.flex}`},a.createElement("div",{className:`${k.marginX} flex-1 `},a.createElement("div",{className:`${k.heading2}`},"Článek o florbalistech"),a.createElement("p",{className:`${k.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum. Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.")))}function I(){const t=e.exports.useRef(),[l,n]=e.exports.useState(""),[s,m]=e.exports.useState(!1);return a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("title",null,"Přihláška - FBC Smíchov"),a.createElement("meta",{name:"description",content:"Stránka pro podání přihlášky do mládežnického florbalového klubu FBC Smíchov."}),a.createElement("link",{rel:"canonical",href:"/prihlaska"})),a.createElement("div",{className:`${k.padingX} ${k.flex}`},a.createElement("div",{className:`${k.marginX} flex-1 `},a.createElement("div",{className:`${k.nadpisY}`},a.createElement("h1",null,"Přihláška do klubu")),a.createElement("div",{className:"mt-7 flex items-top justify-center"},a.createElement("form",{ref:t,onSubmit:e=>{e.preventDefault(),n("Odesílání..."),m(!1),i.sendForm("service_a6k4jgt","template_ojnaef7",t.current,"iFRj6QLQG3-Nl7bCU").then((e=>{n("Přihláška byla odeslána!"),console.log(e.text),t.current.reset()}),(e=>{n("Vyskytla se chyba, prosím opakujte akci."),m(!0),console.log(e.text)}))},className:"bg-fbcyellow shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 w-[95%] sm:w-3/4"},a.createElement("div",{className:"mb-4 grid sm:grid-cols-2 gap-4"},a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 text-lg      font-bold mb-2",htmlFor:"playerFirstName"},"Jméno hráče"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"playerFirstName",name:"playerFirstName",type:"text",placeholder:"Jméno hráče",required:!0})),a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 text-lg      font-bold mb-2",htmlFor:"playerLastName"},"Přijmení hráče"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"playerLastName",name:"playerLastName",type:"text",placeholder:"Přijmení hráče",required:!0})),a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 text-lg      font-bold mb-2",htmlFor:"dateOfBirth"},"Datum narození"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"dateOfBirth",name:"dateOfBirth",type:"date",placeholder:"Datum narození",required:!0})),a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 text-lg      font-bold mb-2",htmlFor:"address"},"Bydliště"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"address",name:"address",type:"text",placeholder:"Bydliště",required:!0})),a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 text-lg       font-bold mb-2",htmlFor:"parentFirstName"},"Jméno rodiče"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"parentFirstName",name:"parentFirstName",type:"text",placeholder:"Jméno rodiče",required:!0})),a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 text-lg       font-bold mb-2",htmlFor:"parentLastName"},"Přijmení rodiče"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"parentLastName",name:"parentLastName",type:"text",placeholder:"Přijmení rodiče",required:!0})),a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 text-lg      font-bold mb-2",htmlFor:"phone"},"Telefon"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"phone",name:"phone",type:"tel",placeholder:"Telefon",required:!0})),a.createElement("div",{className:"mb-6"},a.createElement("label",{className:"block text-gray-700 text-lg      font-bold mb-2",htmlFor:"email"},"Email"),a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",name:"email",type:"email",placeholder:"Email",required:!0}))),l&&a.createElement("div",{className:`text-center text-2xl ${s?"text-red-500":"text-fbcgreen"} text-outline tracking-widest mt-[-1em] mb-3`},a.createElement("b",null,l)),a.createElement("div",{className:"flex items-center justify-center"},a.createElement("button",{className:"bg-fbcgreen hover:bg-green-700 black font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Odeslat"))))),a.createElement("div",{className:"absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"})))}function T(){const t=e.exports.useRef();return a.createElement(u,{basename:"/FBCSmichov1"},a.createElement(F,{scrollRef:t}),a.createElement("div",{className:"bg-cover bg-center fixed top-0 left-0 right-0 bottom-0",style:{backgroundImage:"url(/FBCSmichov1/assets/florbalka.d86b8b09.png)"}},a.createElement("div",{ref:t,className:"absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll"},a.createElement("div",{className:"w-full overflow-hidden"},a.createElement(j,null),a.createElement("div",{className:`bg-primary ${k.padingX} ${k.flexCenter}`},a.createElement("div",{className:`text-white ${k.boxWidth} fixed top-9 sm:top-0 z-10`},a.createElement($,null))),a.createElement("div",{className:`${k.flexStart} ${k.paddingY}`},a.createElement("div",{className:`${k.paddingY} ${k.boxWidth} mt-16 sm:mt-5`},a.createElement(p,null,a.createElement(d,{path:"/",element:a.createElement(S,null)}),a.createElement(d,{path:"/prihlaska",element:a.createElement(I,null)}),a.createElement(d,{path:"/klub",element:a.createElement(B,null)}),a.createElement(d,{path:"/tymy",element:a.createElement(q,null)}),a.createElement(d,{path:"/treninky",element:a.createElement(z,null)}),a.createElement(d,{path:"/partneri",element:a.createElement(P,null)}),a.createElement(d,{path:"/kontakt",element:a.createElement(_,null)}),a.createElement(d,{path:"/clanek",element:a.createElement(L,null)})))),a.createElement("div",{className:`bg-primary ${k.paddingX} ${k.flexCenter}`},a.createElement("div",{className:`${k.boxWidth}`},a.createElement(C,null)))))))}x.render(a.createElement(a.StrictMode,null,a.createElement(f,null,a.createElement(T,null))),document.getElementById("root"));
