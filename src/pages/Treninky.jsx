import React, { useEffect, useRef, useState } from 'react';
import styles from '../style';
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Link} from 'react-router-dom';
import { bazen, skola, v_gym, venk_hriste } from "../static";
import Modal from 'react-modal';
import '../static/css/modal.css';
import { Helmet } from 'react-helmet-async'

function Treninky() {
  // Modal Popup
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

//  MAPA
  const mapRef1 = useRef(null);  // Create a ref to store the first map instance
  const mapRef2 = useRef(null);  // Create a ref to store the second map instance

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  });

  useEffect(() => {
    if (mapRef1.current) {
      // If map instance exists, remove it before creating a new one
      mapRef1.current.remove();
    }

    // Create the first map instance
    mapRef1.current = L.map('map1').setView([50.07319998321817, 14.355945269261003], 13);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mapRef1.current);

    // Add a marker at the desired location
    const marker = L.marker([50.07319998321817, 14.355945269261003]).addTo(mapRef1.current);
    marker.bindPopup("ZŠ Weberova"); // Set the popup text for the marker

    return () => {
      // Clean up on unmount
      if (mapRef1.current) {
        mapRef1.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (mapRef2.current) {
      // If map instance exists, remove it before creating a new one
      mapRef2.current.remove();
    }

    // Create the second map instance
    mapRef2.current = L.map('map2').setView([50.08050725270203, 14.406799073676527], 13);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mapRef2.current);

    // Add a marker at the desired location
    const marker = L.marker([50.08050725270203, 14.406799073676527]).addTo(mapRef2.current);
    marker.bindPopup("Gymnázium Christiana Doplera"); // Set the popup text for the marker

    return () => {
      // Clean up on unmount
      if (mapRef2.current) {
        mapRef2.current.remove();
      }
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>Tréninky - FBC Smíchov</title>
      <meta name="description" content="Informace o časech a místech pravidelných tréninků, fotky sportovišť a mapy." />
      <link rel="canonical" href="/treninky" />
    </Helmet>


    <div className={`${styles.padingX} ${styles.flex}`}>
      <div className={`${styles.marginX} flex-1`}>
        <div className={`${styles.nadpisY}`}><h1>Tréninky</h1></div>
        <p className={`${styles.paragraphTreninky} text-white my-10 ss:mx-20 text-center`}>
          <span className={`${styles.spanBgTxt}`}>
          Základní škola Weberova, Weberova 1/1090, Praha 5 - Košíře, PSČ: 150 00
          </span>
        </p>

        <div className="flex justify-center mb-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    <img src={skola} alt="Fotka Školy - ZŠ Weberova" className="sm:w-auto sm:h-64 object-cover border-2" onClick={() => handleImageClick(skola)} />
    <img src={bazen} alt="Fotka bazénu - ZŠ Weberova" className="sm:w-auto sm:h-64 object-cover border-2" onClick={() => handleImageClick(bazen)} />
    <img src={v_gym} alt="Fotka tělocvičny - ZŠ Weberova" className="sm:w-auto sm:h-64 object-cover border-2" onClick={() => handleImageClick(v_gym)} />
    <img src={venk_hriste} alt="Fotka venkovního hřiště - ZŠ Weberova" className="sm:w-auto sm:h-64 object-cover border-2" onClick={() => handleImageClick(venk_hriste)} />
  </div>
</div>

        <div className="flex rounded-3xl shadow-2xl overflow-hidden w-[95%] sm:w-3/4 mx-auto">
          <div className="w-[65%] relative z-0">
            <div className="w-full h-64 md:h-96" id="map1"></div>
          </div>

          <div className="w-[35%] bg-fbcyellow flex items-center justify-center">
            <p className={`${styles.paragraph} text-black text-xs ss:text-base md:text-2xl md:my-12 mx-3 ss:mx-14 text-center`}>
              <b>Středa:</b>
              <br />
              19:00 - 20:15
              <br />
              <br />
              <b>Pátek:</b>
              <br />
              16:30 - 17:45
            </p>
          </div>
        </div>

        <p className={`${styles.paragraphTreninky} text-white mb-12 mt-24 ss:mx-20 text-center`}>
        <span className={`${styles.spanBgTxt}`}>
          Gymnázium Christiana Doplera, Zborovská 621, Praha 5 - Košíře, <br className="xs:hidden"/>PSČ: 150 00
        </span>
        </p>

        <div className="flex rounded-3xl shadow-2xl overflow-hidden w-[95%] sm:w-3/4 mx-auto">
          <div className="w-[65%] relative z-0">
            <div className="w-full h-64 md:h-96" id="map2"></div>
          </div>

          <div className="w-[35%] bg-fbcyellow flex items-center justify-center">
            <p className={`${styles.paragraph} text-black text-xs ss:text-base md:text-2xl md:my-12 mx-3 ss:mx-14 text-center`}>
              <b>Pondělí:</b>
              <br />
              17:00 - 18:00
            </p>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <Link to="/prihlaska" className="px-16 py-3 my-2 text-lg font-bold hover:underline bg-fbcgreen rounded-3xl dark:text-gray-800 text-white hover:scale-105">
            PODAT PŘIHLÁŠKU
          </Link>
       </div>

        <div className={`flex justify-center items-center`}>
        <div className={`${styles.spanBgTxt} px-10`}>
          <h2 className={`${styles.heading3} pt-3 pb-3`}>Členství v klubu</h2>
          <p className={`${styles.paragraph} text-white text-center`}>Nábor probíhá pruběžně celý rok.</p>
          <p className={`${styles.paragraph} text-white text-center mt-3`}><b>Příspěvky:</b></p>
          <p className={`${styles.paragraph} text-white text-center pb-3`}>900.-Kč měsíčně,<br className="xs:hidden"/> 5 měsíců dopředu</p>
          </div>
          </div>

        <div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        className="custom-modal" // Add custom modal class
        overlayClassName="custom-overlay" // Add custom overlay class
      >
        <div className="flex justify-end absolute top-0 right-0 mt-2 mr-2">
          <button className="text-white text-xl" onClick={closeModal}>
            &times;
          </button>
        </div>
        {selectedImage && <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />}
      </Modal>

    </div>

    </>
  );
}

export default Treninky;
