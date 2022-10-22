import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
export const Search = ({ handleOnChange }) => {
  return (
    <TextField
      variant="outlined"
      onChange={handleOnChange}
      size="small"
      placeholder="Search Pokemon"
      sx={{ width: "100%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
