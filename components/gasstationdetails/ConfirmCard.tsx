"use client"; // This directive indicates that the component is client-side rendered in Next.js.

import { Grid, Card, Typography, Button, Box } from "@mui/material"; // Importing MUI components.
import { useState } from "react"; // Importing useState hook from React.
import dynamic from "next/dynamic"; // Importing dynamic for lazy loading.
import { styled } from "@mui/material/styles"; // Importing styled for custom styling.
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import { currentYear, footerContent } from "@/data/homePage";
import { useRouter } from "next/navigation";


// Interface defining the structure of the blog form values.
interface BlogFormValues {
  title: string;
  subTitle: string;
  tags: string[];
  bodyContent: string;
  author: string;
  authorDescription: string;
  twitter: string;
  facebook: string;
  linkedin: string;
}

// Custom styled component to visually hide the input element.
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

// Main BlogForm component.
const ConfirmCard: React.FC = () => {
   const router = useRouter();

   const navigationToCheckOut = () => {
     router.push("/checkout");
   };
  // useState hook to manage form values.
  const [formValues, setFormValues] = useState<BlogFormValues>({
    title: "",
    subTitle: "",
    tags: [],
    bodyContent: "",
    author: "",
    authorDescription: "",
    twitter: "",
    facebook: "",
    linkedin: "",
  });
  // Handler to update body content in form values.
  const handleBodyChange = (body: string) => {
    setFormValues({ ...formValues, bodyContent: body });
  };

  // Handler for form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior.
    console.log("Form Values:", formValues); // Log the form values.

    // Reset the form values after submission.
    setFormValues({
      title: "",
      subTitle: "",
      tags: [],
      bodyContent: "",
      author: "",
      authorDescription: "",
      twitter: "",
      facebook: "",
      linkedin: "",
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "150px",
            width: "auto",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "white",
            flexShrink: "0",
            marginTop: "20px",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box display="flex">
            <Image
              src={footerContent.socialLocationIcon3}
              width={19}
              height={19}
              alt="fb"
              style={{
                flexShrink: 0,
                marginTop: "8px",
              }}
            />
            <Typography
              style={{
                color: "#000",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginLeft: "12px",
                marginTop: "5px",
              }}
            >
              No.609, Dr. Danister de Silva Mawatha, Colombo 09.
            </Typography>
            <Box display="flex" justifyContent="end" alignItems="center" ml={2}>
              <Button
                endIcon={<EditIcon />}
                variant="outlined"
                sx={{
                  my: 2,
                  textTransform: "none",
                  marginTop: "7px",
                  justifyContent: "center",
                  backgroundColor: "#000",
                  color: "white",
                  width: "auto",
                  height: "auto",
                  borderRadius: "8px",
                  textAlign: "center",
                  borderColor: "#5B5959",
                  "&:hover": {
                    backgroundColor: "#192959",
                  },
                }}
              >Edit</Button>
            </Box>
          </Box>
          {/* TextEditor component for rich text editing */}
        </Card>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              onClick={navigationToCheckOut}
              sx={{
                my: 2,
                textTransform: "none",
                marginTop: "7px",
                justifyContent: "center",
                backgroundColor: "	#F6C324",
                color: "white",
                width: "200px",
                height: "fullWidth",
                borderRadius: "8px",
                textAlign: "center",
                borderColor: "#5B5959",
                "&:hover": {
                  backgroundColor: "	#F6C324",
                },
              }}
              variant="outlined"
            >
              <Typography
                variant="h1"
                style={{
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
    </Grid>
  );
};
export default ConfirmCard;
