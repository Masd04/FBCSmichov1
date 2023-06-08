import React from 'react'
import { florbalisti, letak } from '../static'
import {Link} from 'react-router-dom';
import styles from '../style';

function Home() {
	return (
	  <div className={`${styles.padingX} ${styles.flex}`}>
  
		<div className={`${styles.marginX} flex-1 `}>
		  { /* 
		  	<div className={`${styles.nadpisY}`}>
			Přidej se k nám!
		  </div>
		  */ }
		  
		  
		  <div className="my-1">
  			<Link to="/treninky" className="block cursor-pointer">
    			<img src={letak} alt="letak" className="sm:w-[80%] md:w-[75%] lg:w-[50%] xl:w-[75%] mx-auto scale-100 hover:scale-105" />
  			</Link>
		  </div>

		  <div className="flex justify-center">
		  <Link to="/prihlaska" className="px-16 py-3 my-2 text-lg font-bold hover:underline bg-green-600 rounded-3xl dark:text-gray-800 text-white hover:scale-105">
    		PODAT PŘIHLÁŠKU
  		  </Link>
		</div>

		</div>

		
  
	   
  
	  
  
		{/* Efekt pozadí ??  */}
		<div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient"></div>

		
  
	  </div>
	)
  }
  
  export default Home
