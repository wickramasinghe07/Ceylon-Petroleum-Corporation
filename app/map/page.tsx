
"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Grid, Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

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

  const handleConfirmClick = () => {
    console.log("Confirm button clicked!");
    // Add your custom logic here
  };


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
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Button
            sx={{
              my: 2,
              textTransform: "none",
              marginTop: "7px",
              justifyContent: "center",
              backgroundColor: "#F6C324",
              color: "white",
              width: "200px",
              height: "fullWidth",
              borderRadius: "8px",
              textAlign: "center",
              borderColor: "#5B5959",
              "&:hover": {
                backgroundColor: "#F6C324",
              },
            }}
            variant="outlined"
            onClick={handleConfirmClick}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "16px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              Confirm
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default React.memo(Map);
