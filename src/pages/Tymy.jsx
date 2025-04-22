import React from 'react'
import styles from '../style'

function Tymy() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

    <div className={`${styles.marginX} flex-1 `}>
      
      <div className={`${styles.nadpisY}`}>
        Týmy
      </div>
      <p className={`${styles.paragraph} text-white my-12 ss:mx-20 text-center sm:text-left`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl massa. Curabitur pretium, nulla id vulputate finibus, leo massa vulputate dolor, et laoreet ipsum lorem ut orci. Nullam non tellus in est finibus eleifend. Maecenas at leo nisl. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras congue iaculis est, eu vehicula quam scelerisque et. Suspendisse in justo quis purus congue aliquet interdum et magna. Nulla diam arcu, venenatis mollis eros ut, volutpat blandit lorem. Nullam nulla elit, malesuada et magna porttitor, ultrices vestibulum dolor. Duis porta, est et placerat placerat, lorem enim auctor quam, id malesuada libero ipsum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus congue venenatis. Sed finibus nec diam sed rutrum.
          Morbi hendrerit nulla nec diam condimentum elementum. Suspendisse urna neque, interdum ut quam eu, blandit volutpat elit. Vivamus vitae enim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum varius massa rhoncus fringilla. Maecenas elit quam, sagittis id turpis ut, egestas malesuada lacus. Pellentesque pharetra augue at purus pretium, eget convallis lectus mollis. Aenean semper elementum lectus, sit amet commodo erat accumsan ut. Nullam et enim placerat, vulputate dui nec, eleifend tellus. Donec rhoncus, tortor ac ultricies sollicitudin, tellus enim tincidunt erat, eget iaculis lacus nibh in tortor. Phasellus vel ultrices mi.
        </p>
      </div>

   

  

      {/* Efekt pozadí ??  */}
		<div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>

  </div>
  )
}

export default Tymy
