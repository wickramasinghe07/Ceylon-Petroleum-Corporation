import React from "react";
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import { adminContentSecondaryBanner } from "@/data/admincontent";
import EditIcon from "@mui/icons-material/Edit";

const SecondaryBannerSection: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "auto",
            width: "100%",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#000",
            flexShrink: "0",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            {
              adminContentSecondaryBanner.adminContentSecondaryBannerHeaderTitle // Display the header title
            }
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0.5 },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              {
                adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle01 // Display the banner title
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Secondary Banner Section Title"
              variant="outlined"
              required
            />
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              {
                adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle02 // Display the banner sub title
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
            />
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography variant="h6" sx={{ marginTop: "10px" }}>
                  {
                    adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle03 // Display the banner description
                  }
                </Typography>
                <TextField
                  fullWidth
                  label="Enter Button Name"
                  variant="outlined"
                  required
                  sx={{ m: 1, width: "44ch" }}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              {
                adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle04 // Display the banner description
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Video URL Link"
              variant="outlined"
              multiline
            />
          </Box>
        </Card>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              sx={{
                textTransform: "none",
                marginTop: "7px",
                backgroundColor: "#4A5472",
                "&:hover": { backgroundColor: "#192959" },
                color: "white",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                marginLeft: "10px",
                textAlign: "center",
              }}
              variant="contained"
              endIcon={<EditIcon />}
            >
              <Typography
                style={{
                  color: "White",
                }}
              >
                {
                  adminContentSecondaryBanner.adminContentSecondaryBannerDetailsEditButton // Display the edit button text
                }
              </Typography>
            </Button>
            <Button
              sx={{
                textTransform: "none",
                marginTop: "7px",
                backgroundColor: "#4A5472",
                "&:hover": { backgroundColor: "#192959" },
                color: "white",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                marginLeft: "10px",
                textAlign: "center",
              }}
              variant="contained"
            >
              <Typography
                style={{
                  color: "white",
                }}
              >
                {
                  adminContentSecondaryBanner.adminContentSecondaryBannerDetailsSubmitButton // Display the submit button text
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondaryBannerSection;
