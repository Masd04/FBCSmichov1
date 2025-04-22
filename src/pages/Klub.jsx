import React from 'react'
import styles from '../style'
import { Helmet } from 'react-helmet-async'

function Klub() {
  return (
    <>

     <Helmet>
      <title>Informace o klubu - FBC Smíchov</title>
      <meta name="description" content="Informace o mládežnickém florbalovém klubu FBC Smíchov a výše placených příspěvků" />
      <link rel="canonical" href="/klub" />
    </Helmet>
   
    <div className={`${styles.padingX} ${styles.flex}`}>

    <div className={`${styles.marginX} flex-1 `}>
      
      <div className={`${styles.nadpisG}`}>
        <h1>Informace o klubu</h1>
      </div>

      <div className="flex justify-center">
      <div className="bg-black bg-opacity-50 p-3 rounded-lg">
      <p className={`${styles.paragraph} text-white mt-5 ss:mx-20 text-center`}>
      Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, kamarádské atmosféry a vytváříme celoroční sportovní program. <br /><br />
      </p>
      
      <div className="text-center">
        <p className={`${styles.paragraphKlub} text-white`}>
            <br />
            Klubové barvy: <br />
          <span className="text-fbcgreen"> Zelená<div className={`${styles.colorCirc} bg-fbcgreen`}></div></span>,
          <span className="text-fbcyellow"> žlutá<div className={`${styles.colorCirc} bg-fbcyellow`}></div> </span>
          a <span>bílá<div className={`${styles.colorCirc} bg-white`}></div></span>
        </p>
        </div>

        <div className="text-center">
        <h2 className={`${styles.heading3} pt-7`}>Členství v klubu</h2>
          <p className={`${styles.paragraph} text-white text-center`}>Nábor probíhá pruběžně celý rok.</p>
        <p className={`${styles.paragraphKlub} text-white`}>
            <br />
            <h3>Příspěvky:</h3>
          <span className={`${styles.paragraph} text-white`}>500 Kč / měsíc</span><br />
          <span className={`${styles.paragraphPrisp}`}>( splatné dopředu )</span><br /><br />
          <span className={`${styles.paragraph} text-white`}>říjen - leden : 2000 Kč</span><br />
          <span className={`${styles.paragraph} text-white`}>únor - červen : 2500 Kč</span>
        </p>
        </div>

        </div>
        </div>
      
      
      


    </div>

   

  

    {/* Efekt pozadí ??  */}
    <div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>

  </div>
  
  </>
  )
}

export default Klub
