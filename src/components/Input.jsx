import React from "react";
import { TextField } from "@mui/material";

export const Input = ({ input, meta, onChange, ...props }) => {
  const hasError = () => {
    return (meta.error || meta.submitError) && meta.touched;
  };
  return (
    <TextField
      {...input}
      {...props}
      error={hasError()}
      helperText={(hasError() && meta.error) || meta.submitError}
    ></TextField>
  );
};
