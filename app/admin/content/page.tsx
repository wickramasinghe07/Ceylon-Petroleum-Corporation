"use client";
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grid, Button, Typography, Box } from '@mui/material';
import DestinationOverview from '@/components/admin/contentPage/DestinationOverview';
import HeroBanner from '@/components/admin/contentPage/HeroBanner';
import DestinationCards from '@/components/admin/contentPage/DestinationCards';
import LogoCarousel from '@/components/admin/contentPage/LogoCarousel';
import Testimonials from '@/components/admin/contentPage/Testimonials';
import SecondaryBannerSection from '@/components/admin/contentPage/SecondaryBannerSection';
import TermsConditions from '@/components/admin/contentPage/TermsConditions';
import PrivacyPolicy from '@/components/admin/contentPage/PrivacyPolicy';
import Footer from '@/components/admin/contentPage/Footer';
import { adminContentPage } from "@/data/admincontent";

const HomePage: React.FC = () => {
  const [component, setComponent] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setComponent(event.target.value as string);
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Container>
        <Typography variant="h3" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          {adminContentPage.adminContentPageHeaderTitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        ></Box>
      </Container>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Container>
          <FormControl fullWidth margin="normal">
            <InputLabel id="component-select-label">
              <Typography variant='h6'>Select Component</Typography>
            </InputLabel>
            <Select
              labelId="component-select-label"
              value={component}
              label="Select Component"
              onChange={handleChange}
            >
              <MenuItem value="x">
                <Typography variant="h5">Hero Banner</Typography>
              </MenuItem>
              <MenuItem value="y"> <Typography variant="h5">Destination Overview</Typography></MenuItem>
              <MenuItem value="z"><Typography variant="h5">Destination Cards</Typography></MenuItem>
              <MenuItem value="a"><Typography variant="h5">Logo Carousel </Typography></MenuItem>
              <MenuItem value="b"><Typography variant="h5">Testimonials</Typography></MenuItem>
              <MenuItem value="c"><Typography variant="h5">Secondary Banner Section</Typography></MenuItem>
              <MenuItem value="d"><Typography variant="h5">Terms & Conditions</Typography></MenuItem>
              <MenuItem value="e"><Typography variant="h5">Privacy Policy</Typography></MenuItem>
              <MenuItem value="f"><Typography variant="h5">Footer</Typography></MenuItem>
            </Select>
          </FormControl>
          {component === "x" && <HeroBanner />}
          {component === "y" && <DestinationOverview />}
          {component === "z" && <DestinationCards />}
          {component === "a" && <LogoCarousel />}
          {component === "b" && <Testimonials />}
          {component === "c" && <SecondaryBannerSection />}
          {component === "d" && <TermsConditions />}
          {component === "e" && <PrivacyPolicy />}
          {component === "f" && <Footer />}
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomePage;
