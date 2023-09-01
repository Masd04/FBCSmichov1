import React from "react";
import styles from '../style'

function MobBar() {
  return (
    <div className="block sm:hidden fixed top-0 left-0 w-full h-12 bg-fbcyellow z-10">

    <div className="flex flex-row justify-evenly">

      <div className="flex items-start justify-end h-full select-none">
        <a href="https://www.wannadosports.com/wannado/" target="_blank" className="cursor-pointer">
            <div className="bg-cover px-4 py-0 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10 h-[1.7rem]" style={{ backgroundImage: 'url(https://www.wannadosports.com/wp-content/uploads/2018/06/nilaBg.png)' }}>
                <img src="https://www.wannadosports.com/wp-content/uploads/2018/06/wannado-white-cropped.png" alt="Wannado" className="h-[1.3rem]" />
            </div>
        </a>
      </div>

      <div className="flex items-start justify-end h-full select-none">
        <a href="https://www.ceskyflorbal.cz/" target="_blank" className="cursor-pointer">
            <div className="bg-black px-4 py-0 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10 h-[1.7rem]">
                <img src="https://lista.ceskyflorbal.cz/img/svg-src/cesky-florbal-logo.svg" alt="Český Florbal" className="h-[1.4rem] mx-2 bg-white rounded-full" />
                <span className="text-white font-serif font-bold text-sm">Český Florbal</span>
            </div>
        </a>
      </div>

    </div>

    </div>
  )
}

export default MobBar
