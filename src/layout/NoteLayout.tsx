import { Grid2, useTheme } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { IconsData } from "../data/IconsData";
import { notesData, notesDetailedData } from "../data/DynamicData";
import NotesCard from "../components/NotesCard";
import { useEffect, useState } from "react";
import { INotesCard } from "../types/components";
import NoteDetail from "../components/NoteDetail";

function NoteLayout() {
  const [activeNote, setActiveNote] = useState<INotesCard>();

  const theme = useTheme();

  const handleCreateNote = () => {};

  useEffect(() => {
    setActiveNote(notesData[0]);
  }, []);

  return (
    <Grid2 container height={"100%"}>
      <Grid2
        size={{ md: 3 }}
        sx={{
          borderRight: "1px solid #e1e2e9",
          height: "90dvh",
          overflowY: "auto",
        }}
      >
        <Grid2
          sx={{
            position: "sticky",
            top: 0,
            padding: "1rem 1rem 0",
            background: theme.palette.background.default,
          }}
        >
          <CustomButton
            text="Create new note"
            handleClick={handleCreateNote}
            icon={<IconsData.add />}
            color="primary"
            fullWidth
          />
        </Grid2>
        <Grid2
          sx={{
            padding: "0 1rem",
          }}
        >
          {notesData.map((noteData) => (
            <NotesCard {...noteData} active={activeNote?.id === noteData.id} />
          ))}
        </Grid2>
      </Grid2>
      <Grid2 size={{ md: 9 }}>
        <NoteDetail {...notesDetailedData} />
      </Grid2>
    </Grid2>
  );
}

export default NoteLayout;
