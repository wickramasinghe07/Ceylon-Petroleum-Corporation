import React from 'react';
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { adminContentDestinationOverview } from '@/data/admincontent';
import EditIcon from "@mui/icons-material/Edit";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const DestinationOverview: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "650px",
            width: "100%",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#000",
            flexShrink: "0",
            p: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            {
              adminContentDestinationOverview.adminContentMainBarHeaderTitle // Display the header title
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
            <Typography sx={{ marginTop: "10px" }}>
              {
                adminContentDestinationOverview.adminContentMainBarTitle01 // Display the main banner title
              }
            </Typography>
            <TextField
              fullWidth
              label="Enter Main Banner Card Title"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>
              {
                adminContentDestinationOverview.adminContentMainBarTitle02 // Display the main banner description
              }
            </Typography>
            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
            />
            <Typography sx={{ marginTop: "10px" }}>
              {
                adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
              }
            </Typography>
            <TextField
              fullWidth
              label="Drag & Drop Your images or Browse"
              variant="outlined"
              required
            />
            <Button
              sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              {
                adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
              }
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 01  */}
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarCard01 // Display the card 02 title
                }
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarTitle01 // Display the card 02 title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle01 // Display the card 02 description
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
              />
              <Button
                sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 02  */}
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarCard02 // Display the card 02 title
                }
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarTitle02 // Display the card 02 title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle02 // Display the card 02 description
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
              />
              <Button
                sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 03  */}
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarCard03 // Display the card 03 title
                }
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarTitle03 // Display the card 03 title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle03 // Display the card 03 description
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
              />
              <Button
                sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} my={1}>
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
                  adminContentDestinationOverview.adminContentMainBarEditButton // Display the edit button text
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
              variant="contained">
              <Typography
                style={{
                  color: "white",
                }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarSubmitButton
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DestinationOverview;