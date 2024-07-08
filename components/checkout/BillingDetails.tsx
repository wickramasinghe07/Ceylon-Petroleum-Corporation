import {
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import React from 'react'
import { billingDetailsForm } from "@/data/checkoutPage";
import { lora, mulish } from "../../app/fonts";

/**
 * BillingDetails component is the form used in checkout page to input users billing details.
 */

/* Syles for text fields */
const textFieldStyles = {
  width: "100%",
  height: "48px",
  marginTop: "10px",
};

/* Styles for form labels */
const formLabelStyles = {
  color: "#11142D",
  fontSize: "16px",
  lineHeight: "120%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "700",
  marginTop: "10px",
};

/* Font style for placeholder */
const mulishPlaceholderStyle = {
  fontFamily: "Mulish",
};

const BillingDetails = () => {
  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "auto",
          maxWidth: "auto",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "#E1E1E1",
          flexShrink: "0",
        }}
      >
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2} sx={{ padding: "15px 32px 15px 32px" }}>
              {/* Title for the billing details form */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  className={lora.className}
                  style={{
                    color: "#11142D",
                    fontSize: "24px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.12px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  {billingDetailsForm.billingDetailsFormTitle}
                </Typography>
              </Grid>
              {/* Address */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  className={mulish.className}
                  style={formLabelStyles}
                >
                  {billingDetailsForm.addressLbl}
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Location in Here"
                  variant="outlined"
                  sx={{
                    width: "auto",
                    height: "32px",
                    marginTop: "10px",
                    marginBottom: "30px",
                  }}
                  InputProps={{ style: mulishPlaceholderStyle }}
                />
              </Grid>
            </Grid>
          </form>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#F6C324",
              color: "#FFFFFF",
              width: "auto",
              height: "auto",
              marginTop: "2px",
              marginLeft: "10%",
            }}
          >
            <Typography
              variant="h1"
              className={mulish.className}
              style={{
                fontSize: "16px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "700",
                color: "#000",
              }} >     
            Confirm
          </Typography>
          </Button>
        </CardContent>
        <img
          src="/images/gasStation/room3.webp"
          alt="Billing Details"
          style={{
            width: "100%",
            height: "350px",
            flexShrink: 0,
          }}
        />
      </Card>
    </>
  );
}

export default BillingDetails;
