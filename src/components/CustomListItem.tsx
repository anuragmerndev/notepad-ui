import { Box, Grid2, Typography, useTheme } from "@mui/material";

import { IListItem } from "../types/components";
import { IconsData } from "../data/IconsData";
import { CenterContainer } from "./styledComp";

function ListItem({
  icon,
  label,
  id,
  active,
  handleClick,
  isButton = false,
}: IListItem) {
  const theme = useTheme();

  return (
    <Box
      onClick={() =>
        handleClick({
          icon,
          label,
          id,
        })
      }
    >
      <Grid2
        container
        key={id}
        spacing={2}
        sx={{
          padding: "0.3rem 0.2rem",
          margin: "0.5rem",
          textAlign: "left",
          borderRadius: 2,
          transition: "all 0.3s ease",
          ...(isButton && {
            border: "1px solid",
            borderColor: theme.palette.secondary.dark,
          }),
          ":hover": {
            background: theme.palette.secondary.light,
            cursor: "pointer",
          },
          ...(active
            ? {
                background: theme.palette.secondary.main,
              }
            : {}),
        }}
      >
        <CenterContainer
          size={{ md: 2 }}
          sx={active ? { color: theme.palette.text.secondary } : {}}
        >
          {icon ?? <></>}
        </CenterContainer>
        <CenterContainer
          size={{ md: 8 }}
          sx={{
            textAlign: "left",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="body1">{label}</Typography>
        </CenterContainer>
        {active ? (
          <CenterContainer size={{ md: 2 }}>
            <IconsData.arrow />
          </CenterContainer>
        ) : (
          <></>
        )}
      </Grid2>
    </Box>
  );
}

export default ListItem;
