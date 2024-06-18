import { url } from "inspector";

/* Assign Page routes and labels for navigation bar component of the website */
export const pages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "/explore" },
  { label: "Gas Station Details", route: "/checkout" },
  { label: "Contact", route: "/contact-us" },
  { label: "Blog", route: "/blog"}
];

/* Assign button labels to the navigation bar component of the website */
export const navBarButtons = {
  navBarcta1Caption: "Register",
  navBarcta2Caption: "Login",
};

/* Assign array of pages and their corresponding routes to the navigation drawer component of the website */
export const drawerPages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "/explore" },
  { label: "Gas Station Details", route: "/checkout" },
  { label: "Contact", route: "/contact-us" },
  { label: "Blog", route: "/blog"},
  // { label: "Register", route: "/register" },  //TEMPORARY REMOVE
  // { label: "Login", route: "/login" }, // TEMPORARY REMOVE
];

/* Assign array of pages and their corresponding routes to the navigation drawer component of the website */
export const adminDrawerPages = [
  { label: "Dashboard", route: "/admin/dashboard" },
  { label: "Item", route: "/admin/item" },
  { label: "Blog", route: "/admin/blog" },
  { label: "Contact Us", route: "/admin/contact-us" },
  { label: "Settings", route: "/admin/settings" },
  { label: "Log Out", route: "/admin/logout" },
];


/* Assign data to the banner section of home page */
export const bannerDetails = {
  bannerTitle: "Welcome to Ceylon Petroleum Corporation",
  bannerSubTitle: "Best travel and destinations",
  bannerDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet,",
  bannercta1Caption: "Our Page",
  bannercta2Caption: "Find Gas Stations",
  modalTitle: "Booking request has been sent successfully  !",
  modalContentText: "We will get back to you with confirmation/ request update after checking availability.",
  captionButton: "ok",
  
};

/* Assign title, description and image to the custom card of the home page*/
export const cardDetails1 = {
  customCardTitle: "CEYPETCO",
  customCardDescription:
    "To carry on business as an importer, exporter, seller, supplier and distributor of Petroleum products. To carry on business of exploring for the exploiting, producing, and refining of Petroleum and to carry on any such business as may be incidental or conducive to the attainment of the objectives",
  customCardImage: "/images/homePage/customCardImages/gas.webp",
};

/* Assign other details to the custom card of the home page */
export const cardDetails2 = [
  {
    id: "1",
    title: "VISION",
    description: "To be a sustainable entity in the petroleum and related industries; pioneer new opportunities and deliver value to our stakeholders.",
  },
  {
    id: "2",
    title: "MISSION",
    description: "Competitiveness : Strive to be a market leader by procuring and supplying petroleum and related products at competitive prices.",
  },
 
];

/* Assign array of client logos with their corresponding IDs and image paths to the logo carousel of the home page */
export const clientLogos = [
  { id: 1, logoImage: "/images/homePage/clientLogos/alitalia.png" },
  { id: 2, logoImage: "/images/homePage/clientLogos/axon.png" },
  { id: 3, logoImage: "/images/homePage/clientLogos/expedia.png" },
  { id: 4, logoImage: "/images/homePage/clientLogos/jetstar.png" },
  { id: 5, logoImage: "/images/homePage/clientLogos/qantas.png" },
];

/* Assign title and description to blog section of home page */
export const blogSection = {
  blogSectionTitle: "Our Features",
  blogSectionDescription:
    "",
};

/* Assign data to blog section cards of home page */
export const blogCardData = [
  {
    id: 1,
    URL: "https://ceypetco.gov.lk/refinery/",
    city: "Refinery",
    description:
      "The Ceylon Petroleum Corporation was established by Act No. 28 of 1961 and entered import, distribution and....",
   
  },
  {
    id: 2,
    URL: "https://www.youtube.com/watch?v=RzaoWTSSj7E",
    city: "Marketing & Sales",
    description:
      "With the incorporation of the CPC by Act of Parliament in 1961, the Marketing operations were begun on the ……",
    
  },
  {
    id: 3,
    URL: "https://www.youtube.com/watch?v=RzaoWTSSj7E",
    city: "Ceypetco Agro Chemicals",
    description:
      "Ceylon Petroleum Corporation (CPC) established an Agrochemicals Function in 1969. CPC has been rendered unblemished service in the Agrochemicals Market over 50 years as a strategic Business Unit in the Ceypetco Marketing Function…..",
    
  },
];

/* Assign custom texts and button label to the blog card */
export const blogCardText = {
  blogctaCaption: "See More",
};
export const Blog2 = {
  contactNowTitle: "Ceylon Petroleum Corporation",
  contactNowDescription:
    "From powering industries to fueling your daily commute, trust in Ceypetco for reliable, high-quality fuel that keeps you moving forward with confidence.",
    contactNowCaption: "Ceylon Petroleum Corporation",
    contactNowVedioLink: "https://www.youtube.com/watch?v=RzaoWTSSj7E"
};


/* Assign profile image, user name and testimonial of the user to the testimonials section of the home page */
export const userTestimonial = {
  userProfileImage: "/images/homePage/testimonialsImage/Profile.webp",
  userName: "Jhone Lown",
  testimonial:
    "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet,”",
    
  userProfileImage1: "/images/homePage/testimonialsImage/profile1.webp",
  userName1: "Kane Braen",
  testimonial1:
  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet,”",
      
  userProfileImage2: "/images/homePage/testimonialsImage/profile2.webp",
  userName2: "Adam lauvis",
  testimonial2:
  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet,”",
  testimonialButtonText: "Read More",
  testimonialButtonLink: "https://business.google.com/reviews",
  };

/* Assign logo, description, other texts and social media icons to the footer section of the website */
export const footerContent = {
  footerSectionLogoImage: "/images/homePage/footerImages/logoDark.webp",
  footerSectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet,",
  footerSectionText1: "Products",
  destination1: "Product 1",
  destination2: "Product 2",
  destination3: "Product 3",
  footerSectionText2: "About",
  customText1: "Contact Us",
  customText2: "Testimoni",
  customText3: "Rating",
  footerSectionText3: "Follow Us",
  socialMediaIcon1: "/images/homePage/footerImages/facebook.webp",
  socialMediaText1: "Facebook",
  socialMediaLink1: "https://www.facebook.com/profile.php?id=100054573484391",
  socialMediaIcon2: "/images/homePage/footerImages/twitter.webp",
  socialMediaText2: "Twitter",
  socialMediaLink2: "",
  socialMediaIcon3: "/images/homePage/footerImages/instagram.webp",
  socialMediaText3: "Instagram",
  socialMediaLink3: "",
  TermsConditionText: "Terms and Conditions",
  TermsConditionLink: "/terms-condition",
  CompanyNameText: "CPC",
  PrivacyPolicyText: "Privacy Policy",
  PrivacyPolicyLink: "/privacy-policy",
};

// error modal variable
export const dialogBox ={
  errormodalTitle: "Please Try Again !",
  errorContentText: "We seem to be facing a problem while sending your request .",
  errorcaptionButton: "Try again",
};


export const currentYear = new Date().getFullYear();

export const cookieData ={
  cookieDescription: "We collect your data in order to improve your experience in the form of cookies.",
  cookieButtonCaption: "Accept",
  cookieButtonCaptionReject: "Reject",
}
