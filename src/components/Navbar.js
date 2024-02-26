import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const loca = useLocation();
  console.log(loca);
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="./">
        <img
          src={Logo}
          alt="muscle_logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="./"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            //borderBottom: isHome ? "3px solid #FF2625" : "none",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            // borderBottom: !isHome ? "3px solid #FF2625" : "none",
          }}
        >
          Explore exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
