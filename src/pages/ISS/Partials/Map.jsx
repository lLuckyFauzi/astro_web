import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../issStyle.css";
import ISSIcon from "/image/icons/iss.png";
import L from "leaflet";

const issIcon = L.icon({
  iconUrl: ISSIcon,
  iconRetinaUrl: ISSIcon,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 50],
});

const Map = (props) => {
  const { position } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MapContainer
        minZoom={4}
        maxZoom={12}
        center={[position.latitude, position.longitude]}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=AfK9oB1iMmoi4IsV5qSA"
        />
        <Marker
          position={[position.latitude, position.longitude]}
          icon={issIcon}
        >
          <Popup maxWidth={560}>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/86YLFOog4GM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p
                style={{
                  fontWeight: "700",
                }}
              >
                Information
              </p>
              <p>Latitude: {parseFloat(position.latitude)}</p>
              <p>Longitude: {parseFloat(position.longitude)}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
