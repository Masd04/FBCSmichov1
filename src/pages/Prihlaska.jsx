import React from 'react'
import styles from '../style'

function Prihlaska() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

      <div className={`${styles.marginX} flex-1 `}>
        
        <div className={`${styles.nadpisY}`}>
          Přihláška do klubu
        </div>
        
        
      </div>

     

    

      {/* Efekt pozadí ??  */}
		<div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient"></div>

    </div>
  )
}

export default Prihlaska
