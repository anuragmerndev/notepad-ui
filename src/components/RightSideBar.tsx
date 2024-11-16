import { Grid2 } from "@mui/material";
import { rightSideBarData } from "../data/SidebarData";
import CustomListItem from "./CustomListItem";

function RightSideBar() {
  const handleClick = () => {
    console.log("called");
  };

  return (
    <Grid2
      sx={{
        borderLeft: "1px solid #e1e2e9",
        height: "100%",
      }}
    >
      {rightSideBarData.map((sideData, index) => (
        <CustomListItem
          {...sideData}
          key={sideData.label + index}
          handleClick={handleClick}
          isButton
        />
      ))}
    </Grid2>
  );
}

export default RightSideBar;
