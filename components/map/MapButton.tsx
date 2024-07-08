"use client";
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useRouter } from "next/router";

/**
 * BookingInfo component is the card used in checkout page to display details of each room.
 */

/* Styles for checkbox typography */
const checkBoxTypographyStyle = {
  color: "#9A9AB0",
  fontSize: "16px",
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "400",
  marginTop: "18px",
};

// Main BlogForm component.
const MapButton = () => {
  // const router = useRouter();

  // const navigationToExplore = () => {
  //   router.push("/explore");
  // };

  return (
    <>
      {/* Card for booking information */}
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
            // onClick={navigationToExplore}
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
    </>
  );
};

export default MapButton;
