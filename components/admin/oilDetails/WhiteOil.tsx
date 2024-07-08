"use client";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Typography, Grid, Card, Button } from "@mui/material";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
import { calenderData } from "@/data/checkoutPage";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const WhiteOil = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Calendar title */}
      <Typography
        variant="h5"
        // className={lora.className}
        style={{
          color: "#11142D",
          fontSize: "24px",
          lineHeight: "120%",
          fontStyle: "normal",
          letterSpacing: "0.12px",
          fontWeight: "700",
          marginTop: "14px",
          textAlign: "center",
        }}
      >
        {calenderData.calenderTitle}
      </Typography>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        {/* Calendar component */}
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} my={4}>
          {/* Display the card 01  */}
          <Card
            elevation={0}
            sx={{
              height: "auto",
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
              Lanka Petrol 92 Octane
            </Typography>

            <Typography sx={{ marginTop: "10px" }}>Unit Price</Typography>
            <TextField
              fullWidth
              label="Price (Rs. per Ltr): 344.00"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>Litter</Typography>
            <TextField
              fullWidth
              label="ex:- 1000 Ltr"
              variant="outlined"
              multiline
              rows={1}
            />
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>Start Time</Typography>
                  <TextField
                    fullWidth
                    label="	Hour/Minute	"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>End Time</Typography>
                  <TextField
                    fullWidth
                    label="Hour/Minute"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
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
                Edit
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
                Save
              </Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} my={4}>
          {/* Display the card 02  */}
          <Card
            elevation={0}
            sx={{
              height: "auto",
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
              Lanka Petrol 95 Octane Euro 4
            </Typography>

            <Typography sx={{ marginTop: "10px" }}>Unit Price</Typography>
            <TextField
              fullWidth
              label="Price (Rs. per Ltr): 379.00"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>Litter</Typography>
            <TextField
              fullWidth
              label="ex:- 1000 Ltr"
              variant="outlined"
              multiline
              rows={1}
            />
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>Start Time</Typography>
                  <TextField
                    fullWidth
                    label="	Hour/Minute	"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>End Time</Typography>
                  <TextField
                    fullWidth
                    label="Hour/Minute"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
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
                Edit
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
                Save
              </Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} my={4}>
          {/* Display the card 03  */}
          <Card
            elevation={0}
            sx={{
              height: "auto",
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
              Lanka Auto Diesel
            </Typography>

            <Typography sx={{ marginTop: "10px" }}>Unit Price</Typography>
            <TextField
              fullWidth
              label="Price (Rs. per Ltr): 317.00"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>Litter</Typography>
            <TextField
              fullWidth
              label="ex:- 1000 Ltr"
              variant="outlined"
              multiline
              rows={1}
            />
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>Start Time</Typography>
                  <TextField
                    fullWidth
                    label="	Hour/Minute	"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>End Time</Typography>
                  <TextField
                    fullWidth
                    label="Hour/Minute"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
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
                Edit
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
                Save
              </Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} my={4}>
          {/* Display the card 01  */}
          <Card
            elevation={0}
            sx={{
              height: "auto",
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
              Lanka Super Diesel 4 Star Euro 4
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>Unit Price</Typography>
            <TextField
              fullWidth
              label="Price (Rs. per Ltr): 355.00"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>Litter</Typography>
            <TextField
              fullWidth
              label="ex:- 1000 Ltr"
              variant="outlined"
              multiline
              rows={1}
            />{" "}
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>Start Time</Typography>
                  <TextField
                    fullWidth
                    label="	Hour/Minute	"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>End Time</Typography>
                  <TextField
                    fullWidth
                    label="Hour/Minute"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
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
                Edit
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
                Save
              </Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} my={4}>
          {/* Display the card 02  */}
          <Card
            elevation={0}
            sx={{
              height: "auto",
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
              Lanka Kerosene
            </Typography>

            <Typography sx={{ marginTop: "10px" }}>Unit Price</Typography>
            <TextField
              fullWidth
              label="Price (Rs. per Ltr): 202.00"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>Litter</Typography>
            <TextField
              fullWidth
              label="ex:- 1000 Ltr"
              variant="outlined"
              multiline
              rows={1}
            />
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>Start Time</Typography>
                  <TextField
                    fullWidth
                    label="	Hour/Minute	"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>End Time</Typography>
                  <TextField
                    fullWidth
                    label="Hour/Minute"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
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
                Edit
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
                Save
              </Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} my={4}>
          {/* Display the card 03  */}
          <Card
            elevation={0}
            sx={{
              height: "auto",
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
              Lanka Industrial Kerosene
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>Unit Price</Typography>
            <TextField
              fullWidth
              label="Price (Rs. per Ltr): 210.00"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>Litter</Typography>
            <TextField
              fullWidth
              label="ex:- 1000 Ltr"
              variant="outlined"
              multiline
              rows={1}
            />{" "}
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>Start Time</Typography>
                  <TextField
                    fullWidth
                    label="	Hour/Minute	"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ marginTop: "10px" }}>End Time</Typography>
                  <TextField
                    fullWidth
                    label="Hour/Minute"
                    variant="outlined"
                    multiline
                    rows={1}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
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
                Edit
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
                Save
              </Typography>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};
export default WhiteOil;
