"use client";
import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
  Button,
  Typography,
  Box,
} from "@mui/material";
import WhiteOil from "@/components/admin/oilDetails/WhiteOil";
import BlackOil from "@/components/admin/oilDetails/BlackOil";
import Bitumen from "@/components/admin/oilDetails/Bitumen";
import { adminContentPage } from "@/data/admincontent";

const HomePage: React.FC = () => {
  const [component, setComponent] = useState<string>("");

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
              <Typography variant="h6">Select Component</Typography>
            </InputLabel>
            <Select
              labelId="component-select-label"
              value={component}
              label="Select Component"
              onChange={handleChange}
            >
              <MenuItem value="x">
                <Typography variant="h5">White Oil</Typography>
              </MenuItem>
              <MenuItem value="y">
                {" "}
                <Typography variant="h5">Black Oil</Typography>
              </MenuItem>
              <MenuItem value="z">
                <Typography variant="h5">Bitumen</Typography>
              </MenuItem>
            </Select>
          </FormControl>
          {component === "x" && <WhiteOil />}
          {component === "y" && <BlackOil />}
          {component === "z" && <Bitumen />}
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomePage;
