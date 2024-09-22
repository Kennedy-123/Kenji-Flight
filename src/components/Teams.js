import React from "react";
import { teams } from "../Data/Teams";
import { Typography } from "@mui/material";

function Teams() {
  return (
    <div>
      <div className=" flex flex-col place-items-center">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "open-sans",
          }}
          className="underline text-blue-400 xs:text-4xl font-bold"
        >
          Teams
        </Typography>
        <Typography className="w-[50vw] text-center">
          At Kenji Flight, our team of dedicated travel experts is committed to
          making your adventures seamless and unforgettable. With a shared
          passion for exploring the world, we bring expertise and personalized
          service to help you find the best flights and travel experiences.
        </Typography>
      </div>

      <div className=" grid lg:grid-cols-4 xs:grid-cols-1 place-items-center gap-x-2 mt-11">
        {teams.map((teammate, i) => (
          <div key={i}>
            <img
              src={teammate.image}
              alt=""
              className="h-[35vh] xs:w-[90vw] sm:w-[50vw] lg:w-[15vw]"
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "open-sans",
              }}
            >
              {teammate.name}
            </Typography>
            <Typography>{teammate.position}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
