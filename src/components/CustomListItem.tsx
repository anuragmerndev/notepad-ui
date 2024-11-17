import { Box, Grid2, Typography, useTheme } from "@mui/material";

import { IListItem } from "../types/components";
import { IconsData } from "../data/IconsData";
import { CenterContainer } from "./styledComp";
import { useState } from "react";
import { useTagStore } from "../store/tagStore";

function ListItem({
  icon,
  label,
  id,
  active,
  handleClick,
  listType,
  isButton = false,
  canDelete,
}: IListItem) {
  const theme = useTheme();
  const [showDelete, setShowDelete] = useState<boolean>(false);

  const deleteTag = useTagStore((state) => state.deleteTag);

  const deleteTagByID = (id: string) => {
    deleteTag(id);
  };

  return (
    <Box
      onClick={() =>
        handleClick({
          icon,
          label,
          id,
          listType,
        })
      }
      onMouseEnter={() => {
        setShowDelete(true);
      }}
      onMouseLeave={() => {
        setShowDelete(false);
      }}
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
          size={{ md: 7 }}
          sx={{
            textAlign: "left",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="body1">{label}</Typography>
        </CenterContainer>
        <Grid2
          size={{ md: 3 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {canDelete && showDelete ? (
            <IconsData.delete
              sx={{
                transition: "all 0.3s ease",
                ":hover": {
                  color: theme.palette.error.dark,
                },
              }}
              onClick={() => deleteTagByID(id!)}
            />
          ) : (
            <></>
          )}
          {active ? <IconsData.arrow /> : <></>}
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default ListItem;
