import Pin from "./flag3.svg";
import Map, { useMap, MapProvider, Marker } from "react-map-gl";

function NavigateButton() {
  const { map } = useMap();

  const onClick = () => {
    map?.flyTo({ center: [128.58, 35.7979], essential: true, zoom: 10 });
    console.log("cloice");
  };

  return <button onClick={onClick}>Go</button>;
}

function App() {
  return (
    <MapProvider>
      <Map
        initialViewState={{
          longitude: 127.9068,
          latitude: 35.6699,
          zoom: 6,
        }}
        id={"map"}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        style={{ width: "100vw", height: "100vh" }}
        mapboxAccessToken={process.env.REACT_APP_MAP_BOX_KEY}
        attributionControl={false}
        boxZoom={false}
        scrollZoom={false}
        touchZoomRotate={false}
        dragPan={false}
      >
        <Marker longitude={127.9441} latitude={36.71} anchor="bottom">
          <img src={Pin} alt={""} style={{ width: "18px", height: "18px" }} />
        </Marker>
        <Marker longitude={127.0324} latitude={37.6303} anchor="bottom">
          <img src={Pin} alt={""} style={{ width: "18px", height: "18px" }} />
        </Marker>
        <Marker longitude={128.58} latitude={35.7979} anchor="bottom">
          <img src={Pin} alt={""} style={{ width: "18px", height: "18px" }} />
        </Marker>
      </Map>
      <NavigateButton />
    </MapProvider>
  );
}

export default App;
