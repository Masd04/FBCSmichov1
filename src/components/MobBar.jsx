import React from "react";
import styles from '../style'
import {flogo, wannado} from "../static"

function MobBar() {
  return (
    <div className="block sm:hidden fixed top-0 left-0 w-full h-12 bg-fbcyellow z-10">

    <div className="flex flex-row justify-evenly">

      <div className="flex items-start justify-end h-full select-none">
        <a href="https://www.wannadosports.com/wannado/" target="_blank" className="cursor-pointer">
            <div className="bg-black bg-cover px-4 py-0 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10 h-[1.7rem]" style={{ backgroundImage: 'url(https://www.wannadosports.com/wp-content/uploads/2018/06/nilaBg.png)' }}>
                <img src={wannado} alt="Wannado logo" className="h-[1.3rem]" />
            </div>
        </a>
      </div>

      <div className="flex items-start justify-end h-full select-none">
        <a href="https://www.ceskyflorbal.cz/" target="_blank" className="cursor-pointer">
            <div className="bg-black px-4 py-0 mt-[0.3rem] rounded-xl flex items-center scale-100 hover:scale-105 shadow-xl z-10 h-[1.7rem]">
                <img src={flogo} alt="Český Florbal ikonka" className="h-[1.4rem] mx-2 bg-white rounded-full" />
                <span className="text-white font-serif font-bold text-sm">Český Florbal</span>
            </div>
        </a>
      </div>

    </div>

    </div>
  )
}

export default MobBar
