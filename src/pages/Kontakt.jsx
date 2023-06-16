import React from 'react'
import styles from '../style'
import {logoBezNapis} from "../static"

function Kontakt() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>
    <div className={`${styles.marginX} flex-1 `}>

    <div className={`${styles.nadpisG}`}>
        Kontakt
      </div>

    <div className={`flex flex-col sm:flex-row flex-wrap w-full mb-8 items-center`}>

        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2">
          <img src={logoBezNapis} alt="avatar" className="w-44 mx-auto" />
          <h1 className={`${styles.footerH1} text-fbcgreen text-center font-medium`}>Předseda klubu</h1>
          <p className={`${styles.paragraph} text-white text-center font-medium`}>
            Jiří Irlbek<br />
            +420 775 558 518<br />
            irlbek@fbcsmichov.cz<br />
          </p>
        </div>
        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2">
          <img src={logoBezNapis} alt="avatar" className="w-44 mx-auto" />
          <h1 className={`${styles.footerH1} text-fbcyellow text-center font-medium`}>Sekretář klubu</h1>
          <p className={`${styles.paragraph} text-white text-center font-medium`}>
           Aneta ......<br />
            +420 000 000 000<br />
            vybor@fbcsmichov.cz<br />
          </p>
        </div>
        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/3 lg:w-1/3 flex flex-col justify-center p-2">
          <img src={logoBezNapis} alt="avatar" className="w-44 mx-auto" />
          <h1 className={`${styles.footerH1} text-fbcgreen text-center font-medium`}>Člen výboru klubu</h1>
          <p className={`${styles.paragraph} text-white text-center font-medium`}>
            Viktor Martínek <br />
            +420 602 724 543 <br />
            martinek@fbcsmichov.cz <br />
          </p>
        </div>
       
       <div className="my-10">
        
        </div>
        
      </div>  

    
  </div>

    {/* Efekt pozadí ??  */}
		<div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>

  </div>
  )
}

export default Kontakt