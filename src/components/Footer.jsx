import React from 'react'
import styles from '../style'
import { facebook, instagram, logoNapis, logoText } from '../static'


const Footer = () => {
  return (
    <section className={`${styles.paddingY1} flex-col`}>

      {/*   Pokud chci logotext doleva -> sm:block  */}
      <div className={`hidden sm:${styles.flexCenter}`}>
        <a href="/FBCSmichov1/"><img src={logoText} alt="FBCSmichov-logo" className="w-[260px] object-contain hover:scale-110" /></a>
      </div>

      <div className={`flex flex-wrap w-full mb-8 xs:ml-4 ss:ml-12 sm:ml-15 ml-12`}>

        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2">
          <h1 className={`${styles.footerH1} text-white font-medium ml-5`}>Adresa:</h1>
          <p className={`${styles.paragraph} text-white font-medium ml-5`}>
            Ulice a č. popisné <br />
            Město <br />
            00000 <br />
          </p>
        </div>
        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2">
          <h1 className={`${styles.footerH1} text-white font-medium ml-5`}>Kontakty:</h1>
          <p className={`${styles.paragraph} text-white font-medium ml-5`}>
            Jan Novák <br />
            +420 000 000 000 <br />
            somemail@fbcsmichov.cz <br />
          </p>
        </div>
        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2 mt-8">
          <h1 className={`${styles.footerH1} text-white font-medium ml-5`}></h1>
          <p className={`${styles.paragraph} text-white font-medium ml-5`}>
            John Doe <br />
            +420 000 000 000 <br />
            somemail@gmail.com <br />
          </p>
        </div>
        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2">
          <img src={facebook} alt="FB icon" className={`${styles.footerIcon}`} />
          <img src={instagram} alt="IG icon" className={`${styles.footerIcon}`} />
        </div>

      </div>

    </section>
  )
}


export default Footer
