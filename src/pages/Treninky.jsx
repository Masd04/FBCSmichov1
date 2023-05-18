import React, { useEffect } from 'react';
import styles from '../style';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function Treninky() {
  useEffect(() => {
    // Create the map instance
    const map = L.map('map').setView([50.07319998321817, 14.355945269261003], 13);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Customize the marker icon
    const customIcon = L.icon({
      iconUrl: '/src/static/favicon.ico', // Path to your custom marker icon
      iconSize: [62 ,50], // Size of the icon
      iconAnchor: [16, 32], // Anchor point of the icon (centered horizontally, bottom of the icon)
    });

    // Add a marker at the desired location
    const marker = L.marker([50.07319998321817, 14.355945269261003], { icon: customIcon }).addTo(map);
    marker.bindPopup("Your marker text"); // Set the popup text for the marker
  }, []);

  return (
    <div className={`${styles.padingX} ${styles.flex}`}>
      <div className={`${styles.marginX} flex-1`}>
        <div className={`${styles.nadpisY}`}>Tréninky</div>
        <p className={`${styles.paragraph} text-white my-12 ss:mx-20 text-center`}>
          Základní škola Weberova, Weberova 1/1090, Praha 5- Košíře, Psč: 150 00
        </p>

        <div className="w-3/4 mx-auto h-64 md:h-96 rounded-3xl shadow-2xl" id="map"></div>

        <div className="w-3/4 mx-auto my-5 py-1 bg-yellow-400 rounded-3xl shadow-2xl">
        <p className={`${styles.paragraph} text-black my-12 ss:mx-20 text-center sm:text-left`}>
          Středa: ...................
          <br />
          <br />
          Pátek: ....................
        </p>
        </div>

      </div>
    </div>
  );
}

export default Treninky;
