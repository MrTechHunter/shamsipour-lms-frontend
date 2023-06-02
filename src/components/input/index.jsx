import { TextField } from "@mui/material";
import React from "react";

const Inputs = ({ variant, disabled, label, name }) => {
  if (variant === "outlined") {
    return <TextField label={label} variant="outlined" name={name} />;
  } else if (variant === "filled") {
    return <TextField label={label} variant="filled" name={name} />;
  } else {
    return <TextField label={label} variant="standard" name={name} />;
  }
};

export default Inputs;
