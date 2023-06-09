import React, { useRef } from 'react'
import styles from '../style'
import emailjs from '@emailjs/browser';

function Prihlaska() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

      <div className={`${styles.marginX} flex-1 `}>
        
        <div className={`${styles.nadpisY}`}>
          Přihláška do klubu
        </div>
        

        <div className="mt-7 flex items-top justify-center">
        <form className="bg-yellow-400 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 w-[95%] sm:w-3/4">

          <div className="mb-4 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="playerFirstName">
                Jméno hráče
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="playerFirstName" type="text" placeholder="Jméno hráče" required />
            </div>

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="playerLastName">
              Přijmení hráče
            </label>
            <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="playerLastName" type="text" placeholder="Přijmení hráče" required />
          </div>        

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="dateOfBirth">
              Datum narození
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth" type="date" placeholder="Datum narození" required />
          </div>

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="address">
              Bydliště
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address" type="text" placeholder="Bydliště" required />
          </div>


          <div>
           <label className="block text-gray-700 text-lg       font-bold mb-2" htmlFor="parentFirstName">
              Jméno rodiče
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentFirstName" type="text" placeholder="Jméno rodiče" required />
          </div>
          <div>
           <label className="block text-gray-700 text-lg       font-bold mb-2" htmlFor="parentLastName">
             Přijmení rodiče
           </label>
           <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentLastName" type="text" placeholder="Přijmení rodiče" required />
          </div>
    
          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="phone">
              Telefon
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone" type="tel" placeholder="Telefon" required />
         </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="Email" required />
          </div>

    </div>

    <div className="flex items-center justify-center">
      <button className="bg-green-500 hover:bg-green-700 black font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline" type="submit">
        Odeslat
      </button>
    </div>
  </form>
</div>



        


      </div>

     

    

      {/* Efekt pozadí ??  */}
		<div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>

    </div>
  )
}

export default Prihlaska
