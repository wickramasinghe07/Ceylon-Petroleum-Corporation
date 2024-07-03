import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {md : { width: "100%", height: "500px" }, xs: { width: "100%", height: "500px" }, lg: { width: "100%", height: "500px" }, xl: { width: "100%", height: "500px" }, sm: { width: "100%", height: "500px" }, width: "100%", height: "500px" };  


const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBE7DuPcd30Ld-B7cKFE6PqCs3Vp5qICOg", // Replace with your actual API key
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <></>
  );
}

export default React.memo(Map);
