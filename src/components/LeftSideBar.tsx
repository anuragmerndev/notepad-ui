import { Box, Grid2, Typography, useTheme } from "@mui/material";
import { mainSideBarData } from "../data/SidebarData";
import CustomListItem from "./CustomListItem";
import { ISideBarData } from "../types/components";
import { useTagStore } from "../store/tagStore";
import { IconsData } from "../data/IconsData";
import { useSideBarStore } from "../store/sideBarStore";

function LeftSideBar() {
  const tags = useTagStore((state) => state.tags);
  const { activeSideBar, setActiveSideBar } = useSideBarStore((state) => state);

  const theme = useTheme();

  const handleChangeActiveList = (data: ISideBarData) => {
    setActiveSideBar({
      label: data.label,
      type: data.listType,
    });
  };

  return (
    <Grid2
      sx={{
        borderRight: "1px solid #e1e2e9",
        padding: "1rem",
        height: "100%",
      }}
    >
      <Typography variant="h6">To Do App</Typography>
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: theme.palette.secondary.main,
        }}
      >
        {mainSideBarData.map((sideData, index) => (
          <CustomListItem
            {...sideData}
            key={sideData.label + index}
            active={sideData.label === activeSideBar.label}
            handleClick={handleChangeActiveList}
          />
        ))}
      </Box>

      <Box
        sx={{
          margin: "0.7rem 0",
          height: "83dvh",
          overflowY: "auto",
        }}
      >
        <Typography align="left" ml={2}>
          Tags
        </Typography>
        {tags.map((tagData) => (
          <CustomListItem
            key={tagData.id}
            {...tagData}
            active={tagData.label === activeSideBar.label}
            icon={<IconsData.tag />}
            handleClick={handleChangeActiveList}
            canDelete
          />
        ))}
      </Box>
    </Grid2>
  );
}

export default LeftSideBar;
