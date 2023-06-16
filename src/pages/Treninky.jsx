import React, { useEffect, useRef } from 'react';
import styles from '../style';
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Link} from 'react-router-dom';
import { bazen, skola, v_gym, venk_hriste } from "../static";

function Treninky() {
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
    marker.bindPopup("Naše hala"); // Set the popup text for the marker

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
    marker.bindPopup("Naše hala"); // Set the popup text for the marker

    return () => {
      // Clean up on unmount
      if (mapRef2.current) {
        mapRef2.current.remove();
      }
    };
  }, []);

  return (
    <div className={`${styles.padingX} ${styles.flex}`}>
      <div className={`${styles.marginX} flex-1`}>
        <div className={`${styles.nadpisY}`}>Tréninky</div>
        <p className={`${styles.paragraphTreninky} text-white my-10 ss:mx-20 text-center`}>
          <span className={`${styles.spanBgTxt}`}>
          Základní škola Weberova, Weberova 1/1090, Praha 5 - Košíře, PSČ: 150 00
          </span>
        </p>

        <div className="flex justify-center mb-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    <img src={skola} alt="Image 1" className="sm:w-auto sm:h-64 object-cover border-2" />
    <img src={bazen} alt="Image 2" className="sm:w-auto sm:h-64 object-cover border-2" />
    <img src={v_gym} alt="Image 3" className="sm:w-auto sm:h-64 object-cover border-2" />
    <img src={venk_hriste} alt="Image 4" className="sm:w-auto sm:h-64 object-cover border-2" />
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

        <div className="flex justify-center mt-6">
          <Link to="/prihlaska" className="px-16 py-3 my-2 text-lg font-bold hover:underline bg-fbcgreen rounded-3xl dark:text-gray-800 text-white hover:scale-105">
            PODAT PŘIHLÁŠKU
          </Link>
       </div>

        <div className="absolute z-[0] w-[40%] h-[35%] top-[150px] right-[470px] white__gradient pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Treninky;
