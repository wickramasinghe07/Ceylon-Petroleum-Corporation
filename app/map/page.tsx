
"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Grid, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MapButton from "@/components/map/MapButton";


/**
 * Map component is used to display the map in the Google Map page.
 */


// Center of the map
const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const containerStyle = {
    width: "100%",
    height: isXs
      ? "300px"
      : isSm
      ? "400px"
      : isMd
      ? "500px"
      : isLg
      ? "800px"
      : isXl
      ? "700px"
      : "500px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBE7DuPcd30Ld-B7cKFE6PqCs3Vp5qICOg", // Replace with your actual API key
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);

  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        ) : (
          <Typography variant="h6">Loading map...</Typography>
        )}
      </Grid>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <MapButton />
            {/* <BookingDetailsForm /> */}
            {/* <ServicesCard /> */}
          </Grid>
          <Grid item xs={12} md={4}>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default React.memo(Map);
