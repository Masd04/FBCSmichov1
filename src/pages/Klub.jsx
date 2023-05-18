import React from 'react'
import styles from '../style'

function Klub() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

      <div className={`${styles.marginX} flex-1 `}>
        
        <div className={`${styles.nadpisY}`}>
          Informace o klubu
        </div>
        <p className={`${styles.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`}>
        Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, kamarádské atmosféry a vytváříme celoroční sportovní program. <br /><br />
        Naše motto je: ............................................................<br /><br />
        Klubové barvy: <span className="text-green-500">Zelená</span>, <span className="text-yellow-400">žlutá</span> a <span>bílá</span> <i>(nebyla by lepší barevná kolečka?)</i>

        </p>
        
      </div>

     

    

      

    </div>
  )
}

export default Klub
