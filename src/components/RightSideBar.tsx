import { Grid2 } from "@mui/material";
import { rightSideBarData } from "../data/SidebarData";
import CustomListItem from "./CustomListItem";
import { TButtonActionType } from "../types/components";
import { useActiveNoteStore } from "../store/activeNoteStore";

function RightSideBar({
  handleClick,
}: {
  handleClick: (type: TButtonActionType) => void;
}) {
  const activeNote = useActiveNoteStore((state) => state.activeNote);

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
          label={
            sideData.type === "archive" && activeNote?.isArchived
              ? "Un Archive"
              : sideData.label
          }
          handleClick={() => handleClick(sideData.type!)}
          isButton
        />
      ))}
    </Grid2>
  );
}

export default RightSideBar;
