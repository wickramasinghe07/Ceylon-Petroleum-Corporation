"use client";
import { Box, Container } from "@mui/material";
import Banner from "../components/homePage/Banner";
import Testimonials from "../components/homePage/Testimonials";
import Blog from "../components/homePage/Blog";
import CustomCard from "../components/homePage/CustomCard";
import LogoCarousel from "@/components/homePage/LogoCarousel";
import ContactNowBanner from "@/components/homePage/ContactNow";
import Cookie from "../components/cookie/Cookie";

/**
 * HomeScreen represents the main screen of the website.
 * It includes sections like Banner, Destination Card, Blog, Testimonials, and Footer.
 */

/* Style class for the box component of each section component */
const sectionStyle = {
  backgroundColor: "#FFFFF",
  padding: "20px 0",
  width: "100%",
};

export default function HomeScreen() {
  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "	#3c3c3c",
          color: "white",
          padding: "40px 0",
          flexGrow: 1,
        }}
      >
        <Container>
          <Banner />
        </Container>
      </Box>
      {/* Custom Card Section*/}
      <Box sx={sectionStyle}>
        <Container>
          <CustomCard />
        </Container>
      </Box>
      {/* Logo Carousel Section */}
      <Box sx={sectionStyle}>
        <Container>
          <LogoCarousel />
        </Container>
      </Box>
      {/* Blog Section */}
      <Box sx={sectionStyle}>
        <Container>
          <Blog />
        </Container>
      </Box>
      {/* Contact Now Banner  */}
      <Box
        sx={{ backgroundColor: "#000", color: "white", padding: "40px 0" }}
      >
        <Container>
          <ContactNowBanner />
        </Container>
      </Box>
      {/* Testimonials Section */}
      <Box
        sx={{ backgroundColor: "#F7F7F7", padding: "20px 0", width: "100%" }}
      >
        <Container>
          <Testimonials />
        </Container>
      </Box>
      {/* Cookie Consent Banner*/}
      <Box>
        <Cookie />
      </Box>
    </>
  );
}
