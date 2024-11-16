import { Box, Typography, useTheme } from "@mui/material";
import { ITagData } from "../types/components";

function NoteTag({ id, label }: ITagData) {
  const theme = useTheme();
  return (
    <Box
      key={id}
      sx={{
        background: theme.palette.secondary.dark,
        borderRadius: 2,
        marginRight: "0.3rem",
      }}
    >
      <Typography
        sx={{
          padding: "0.1rem 0.8rem",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default NoteTag;
