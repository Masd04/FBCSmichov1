import React from 'react';
import { florbalisti, letak, micek3, skola, v_gym, doppler } from '../static';
import { Link } from 'react-router-dom';
import styles from '../style';

function Home() {
  return (
    <div className={`${styles.marginX} sm:pt-5 flex-1 flex flex-wrap`}>

      <div className="w-full sm:w-1/2">
      <div className={`${styles.spanBgTxt} my-1 sm:mx-5 sm:pb-0`}>

        {/* Left Column */}
        <div className={`${styles.nadpisHome} my-1`}>
          Vítejte na našem novém webu!
        </div>

          <div className="flex items-center justify-center pt-1 sm:pt-0">
          <img src={micek3} alt="Icon_Floorball" className="h-9 mx-1" />
          </div>

        <div className="px-1 sm:px-10 text-center">
        <p className={`${styles.paragraphHome} text-white my-5`}>
        Florbalový klub FBC Smíchov je zaměřený především na děti a mládež. 
        Jdeme cestou sportovního prožitku, dobré nálady na tréninku i zápasu, 
        kamarádské atmosféry a vytváříme celoroční sportovní program.
        Pro informace o našich trénincích a klubových příspěvcích klikněte <Link to="/treninky"><span className="text-fbcgreen hover:underline"><b>ZDE</b></span></Link> nebo na banner vpravo.
        </p>
        </div>

        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-1">
            <img src={skola} alt="Image 1" className="sm:w-auto object-cover border-4 border-white justify-self-center" />
            <img src={doppler} alt="Image 2" className="sm:w-[86%] object-cover border-4 border-white justify-self-center" />
        </div>
        </div>

      </div>
      </div>


      <div className="w-full sm:w-1/2 flex flex-col items-center">

        {/* Right Column */}
        <div className="my-1">
          <Link to="/treninky" className="block cursor-pointer">
            <img
              src={letak}
              alt="letak"
              className="w-full mx-auto scale-100 hover:scale-105"
            />
          </Link>
        </div>
        <div className="flex justify-center mt-2">
          <Link
            to="/prihlaska"
            className="px-16 py-3 my-2 text-lg font-bold hover:underline bg-fbcgreen rounded-3xl dark:text-gray-800 text-white hover:scale-105"
          >
            PODAT PŘIHLÁŠKU
          </Link>
        </div>
      </div>


      <div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>
    </div>
  );
}

export default Home;
