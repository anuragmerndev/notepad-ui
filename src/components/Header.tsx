import { Grid2, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import SearchBox from "./SearchBox";
import { useSideBarStore } from "../store/sideBarStore";

function Header() {
  const [searchValue, setSearchValue] = useState<string>("");

  const activeSideBar = useSideBarStore((state) => state.activeSideBar);

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
        <Typography variant="h5">
          {activeSideBar.label}{" "}
          {activeSideBar.type === "tag" ? "Tag Notes" : ""}
        </Typography>
      </Grid2>
      <Grid2 size={{ md: 3 }}>
        <SearchBox
          value={searchValue}
          handleChange={handleSearchValueChange}
          placeholder="Search by title, content"
        />
      </Grid2>
    </Grid2>
  );
}

export default Header;
