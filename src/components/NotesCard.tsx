import { INotesCard } from "../types/components";
import { Grid2, Typography, useTheme } from "@mui/material";
import NoteTag from "./NoteTag";

function NotesCard({ title, tags, created_date, id, active }: INotesCard) {
  const theme = useTheme();
  return (
    <Grid2
      key={id}
      container
      sx={{
        flexDirection: "column",
        textAlign: "left",
        borderBottom: "1px solid",
        borderColor: theme.palette.secondary.main,
        margin: "1rem 0",
        padding: "0.5rem",
        borderRadius: 2,
        ":hover": {
          background: theme.palette.secondary.main,
          cursor: "pointer",
        },
        ...(active
          ? {
              background: theme.palette.secondary.main,
            }
          : {}),
      }}
    >
      <Grid2>
        <Typography variant="h6">{title}</Typography>
      </Grid2>
      <Grid2
        container
        sx={{
          margin: "0.8rem 0",
        }}
      >
        {tags.map((tagData) => (
          <NoteTag {...tagData} />
        ))}
      </Grid2>
      <Grid2>
        <Typography>{created_date}</Typography>
      </Grid2>
    </Grid2>
  );
}

export default NotesCard;
