import { Box, Grid2, Typography, useTheme } from "@mui/material";
import { mainSideBarData } from "../data/SidebarData";
import CustomListItem from "./CustomListItem";
import { useEffect, useState } from "react";
import { ISideBarData } from "../types/components";
import { useTagStore } from "../store/tagStore";
import { IconsData } from "../data/IconsData";

function LeftSideBar() {
  const [activeList, setActiveList] = useState<ISideBarData | null>(null);
  const tags = useTagStore((state) => state.tags);

  const theme = useTheme();

  useEffect(() => {
    setActiveList(mainSideBarData[0]);
  }, []);

  const handleChangeActiveList = (data: ISideBarData) => {
    setActiveList(data);
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
            active={sideData.label === activeList?.label}
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
            icon={<IconsData.tag />}
            handleClick={handleChangeActiveList}
          />
        ))}
      </Box>
    </Grid2>
  );
}

export default LeftSideBar;
