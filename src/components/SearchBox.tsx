import { TextField } from "@mui/material";

import { ISearchBox } from "../types/components";
import { IconsData } from "../data/IconsData";

function SearchBox({ placeholder, value, handleChange }: ISearchBox) {
  return (
    <TextField
      fullWidth
      sx={{
        borderRadius: 2,
      }}
      label={placeholder}
      id="fullWidth"
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e)}
      slotProps={{
        input: {
          endAdornment: <IconsData.search />,
        },
      }}
    />
  );
}

export default SearchBox;
