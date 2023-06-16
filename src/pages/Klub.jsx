import React from 'react'
import styles from '../style'

function Klub() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

    <div className={`${styles.marginX} flex-1 `}>
      
      <div className={`${styles.nadpisG}`}>
        Informace o klubu
      </div>

      <div className="flex justify-center">
      <div className="bg-black bg-opacity-50 p-3 rounded-lg">
      <p className={`${styles.paragraph} text-white mt-5 ss:mx-20 text-center`}>
      Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, kamarádské atmosféry a vytváříme celoroční sportovní program. <br /><br />
      </p>
      
      <div className="text-center">
        <p className={`${styles.paragraphKlub} text-white`}>
            Naše motto je: ............................................................<br /><br />
            Klubové barvy: 
          <span className="text-fbcgreen"> Zelená<div className={`${styles.colorCirc} bg-fbcgreen`}></div></span>,
          <span className="text-fbcyellow"> žlutá<div className={`${styles.colorCirc} bg-fbcyellow`}></div> </span>
          a <span>bílá<div className={`${styles.colorCirc} bg-white`}></div></span>
        </p>
        </div>

        </div>
        </div>
      
      
      


    </div>

   

  

    {/* Efekt pozadí ??  */}
    <div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>

  </div>
  )
}

export default Klub
