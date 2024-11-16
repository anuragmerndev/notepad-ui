import { Grid2 } from "@mui/material";
import { rightSideBarData } from "../data/SidebarData";
import CustomListItem from "./CustomListItem";
import { TButtonActionType } from "../types/components";

function RightSideBar({
  handleClick,
}: {
  handleClick: (type: TButtonActionType) => void;
}) {
  return (
    <Grid2
      sx={{
        height: "100%",
      }}
    >
      {rightSideBarData.map((sideData, index) => (
        <CustomListItem
          {...sideData}
          key={sideData.label + index}
          handleClick={() => handleClick(sideData.type!)}
          isButton
        />
      ))}
    </Grid2>
  );
}

export default RightSideBar;
