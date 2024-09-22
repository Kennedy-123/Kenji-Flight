import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pic from "../images/chairwoman2.jpeg";
import Gallery from "./Gallery";
import Teams from "./Teams";
function About() {
  return (
    <Box>
      <Box sx={{ width: "100%", position: "relative" }}>
        <CardMedia component="img" src={pic} sx={{ height: "95vh" }} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "95vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            color={"white"}
            sx={{
              fontWeight: { sm: 50 },
              fontSize: { sm: 50, xs: 25 },
              fontFamily: "open-sans",
            }}
            align="center"
          >
            About Us
          </Typography>
          <Typography className="text-white w-[50vw] text-center">
          At Kenji Flight, we believe in making travel easy, affordable, and accessible for everyone. Whether you're planning your next adventure or booking a last-minute getaway, we provide the best flight deals, personalized recommendations, and seamless booking experiences.
          </Typography>
          <Button variant="contained">
            <Link>Get Started</Link>
          </Button>
        </Box>
      </Box>
      {/* Gallery section */}
      <Gallery />
      {/* Teams Section */}
      <Teams/>
    </Box>
  );
}

export default About;
