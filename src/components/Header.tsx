import { Grid2, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import SearchBox from "./SearchBox";

function Header() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchValueChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(event.target.value);
  };

  return (
    <Grid2
      container
      sx={{
        padding: "1rem",
        textAlign: "left",
        alignItems: "center",
      }}
    >
      <Grid2 size={{ md: 9 }}>
        <Typography variant="h5">All Todo</Typography>
      </Grid2>
      <Grid2 size={{ md: 3 }}>
        <SearchBox
          value={searchValue}
          handleChange={handleSearchValueChange}
          placeholder="Search by title, content and tags"
        />
      </Grid2>
    </Grid2>
  );
}

export default Header;
