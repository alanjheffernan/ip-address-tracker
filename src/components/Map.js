import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import bgMobile from "../images/pattern-bg-mobile.png";
import bgDesktop from "../images/pattern-bg-desktop.png";
import { useIpContext } from "../context/IpContext";
import { getCorrdinates } from "../service/corrdinateService";

function Map() {
  const [center, setCenter] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);
  const { data } = useIpContext();

  const handleCenterChange = () => {
    setCenter([51.5, -0.08]); // Example new center
    setZoom(17); // Example new zoom
  };

  useEffect(() => {
    if (data && data.location) {
      getCorrdinates(data.location.country)
        .then((coords) => {
          setCenter(coords);
          setZoom(10); // Adjust zoom for country view
        })
        .catch(console.error);
    }
  }, [data]);

  const SetView = ({ center, zoom }) => {
    const map = useMap(); // useMap hook to get the map instance
    useEffect(() => {
      map.setView(center, zoom);
    }, [center, zoom, map]); // Depend on center and zoom to update the view
    return null;
  };

  return (
    <section className="absolute z-[-5] flex min-h-screen w-full flex-col">
      <picture>
        <source srcset={bgDesktop} media="(min-width: 768px)" />
        <img src={bgMobile} alt="mobile background" className="w-full" />
      </picture>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
        className="grow"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <SetView center={center} zoom={zoom} />{" "}
        {/* Inline component for setting view */}
      </MapContainer>
    </section>
  );
}

export default Map;
