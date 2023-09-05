import React, { useRef, useState } from 'react'
import styles from '../style'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async'


function Prihlaska() {

  const form = useRef();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setMessage('Odesílání...');
    setIsError(false);

    emailjs.sendForm('service_a6k4jgt', 'template_ojnaef7', form.current, 'iFRj6QLQG3-Nl7bCU')
      .then((result) => {
          setMessage('Přihláška byla odeslána!');
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          setMessage('Vyskytla se chyba, prosím opakujte akci.');
          setIsError(true);
          console.log(error.text);
      });
  };



  return (
    <>
    <Helmet>
      <title>Přihláška - FBC Smíchov</title>
      <meta name="description" content="Stránka pro podání přihlášky do mládežnického florbalového klubu FBC Smíchov." />
      <link rel="canonical" href="/prihlaska" />
    </Helmet>
    
    <div className={`${styles.padingX} ${styles.flex}`}>

      <div className={`${styles.marginX} flex-1 `}>
        
        <div className={`${styles.nadpisY}`}>
          <h1>Přihláška do klubu</h1>
        </div>
        
        


        <div className="mt-7 flex items-top justify-center">
        <form ref={form} onSubmit={sendEmail} className="bg-fbcyellow shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 w-[95%] sm:w-3/4">

          <div className="mb-4 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="playerFirstName">
                Jméno hráče
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="playerFirstName" name="playerFirstName" type="text" placeholder="Jméno hráče" required />
            </div>

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="playerLastName">
              Přijmení hráče
            </label>
            <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="playerLastName" name="playerLastName" type="text" placeholder="Přijmení hráče" required />
          </div>        

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="dateOfBirth">
              Datum narození
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth" name="dateOfBirth" type="date" placeholder="Datum narození" required />
          </div>

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="address">
              Bydliště
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address" name="address" type="text" placeholder="Bydliště" required />
          </div>


          <div>
           <label className="block text-gray-700 text-lg       font-bold mb-2" htmlFor="parentFirstName">
              Jméno rodiče
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentFirstName" name="parentFirstName" type="text" placeholder="Jméno rodiče" required />
          </div>
          <div>
           <label className="block text-gray-700 text-lg       font-bold mb-2" htmlFor="parentLastName">
             Přijmení rodiče
           </label>
           <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentLastName" name="parentLastName" type="text" placeholder="Přijmení rodiče" required />
          </div>
    
          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="phone">
              Telefon
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone" name="phone" type="tel" placeholder="Telefon" required />
         </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" name="email" type="email" placeholder="Email" required />
          </div>

    </div>

    {message && <div className={`text-center text-2xl ${isError ? 'text-red-500' : 'text-fbcgreen'} text-outline tracking-widest mt-[-1em] mb-3`}><b>{message}</b></div>}

      <div className="flex items-center justify-center">
      <button className="bg-fbcgreen hover:bg-green-700 black font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline" type="submit">
        Odeslat
      </button>
      </div>
     </form>
          

      </div>       


      </div>

     

    

      {/* Efekt pozadí ??  */}
		<div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>

    </div>

    </>
  )
}

export default Prihlaska
