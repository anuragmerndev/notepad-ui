import { Grid2, useTheme } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { IconsData } from "../data/IconsData";
import NotesCard from "../components/NotesCard";
import { useState } from "react";
import {
  INotesData,
  INotesDetail,
  TButtonActionType,
} from "../types/components";
import NoteDetail from "../components/NoteDetail";
import CustomModal from "../components/CustomModal";
import CreateNoteForm from "../forms/CreateNoteForm";
import { useNoteStore } from "../store/noteStore";
import RightSideBar from "../components/RightSideBar";

function NoteLayout() {
  const [activeNote, setActiveNote] = useState<INotesDetail | null>(null);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  const {
    notes: notesList,
    createNote,
    archiveNote,
    deleteNote,
  } = useNoteStore((state) => state);
  const theme = useTheme();

  const handleCreateNote = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateNote = () => {
    setOpenCreateModal(false);
  };

  const handleActiveNote = (id: string) => {
    const selectedNote = notesList.find((notes) => notes.id === id);
    setActiveNote(selectedNote ? selectedNote : null);
  };

  const handleSubmitData = (value: INotesData) => {
    createNote({
      id: new Date().getTime().toString(),
      body: value.body,
      title: value.title,
      tags: value.tags,
      created_date: new Date().toLocaleString(),
      isArchived: false,
    });
    setOpenCreateModal(false);
  };

  const handleCancel = () => {
    setOpenCreateModal(false);
  };

  const handleExtraClick = (type: TButtonActionType) => {
    switch (type) {
      case "archive":
        archiveNote(activeNote?.id!);
        setActiveNote(null);
        break;

      case "delete":
        deleteNote(activeNote?.id!);
        setActiveNote(null);
        break;

      default:
        break;
    }
  };

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
          {notesList
            .filter((note) => !note.isArchived)
            .map((noteData) => (
              <NotesCard
                key={noteData.id}
                {...noteData}
                handleClick={handleActiveNote}
                active={activeNote?.id === noteData.id}
              />
            ))}
        </Grid2>
      </Grid2>
      {activeNote ? (
        <>
          <Grid2 size={{ md: 7 }}>
            <NoteDetail {...activeNote} />
          </Grid2>
          <Grid2
            size={{ md: 2 }}
            sx={{
              borderLeft: "1px solid",
              borderColor: theme.palette.secondary.dark,
            }}
          >
            <RightSideBar handleClick={handleExtraClick} />
          </Grid2>
        </>
      ) : (
        <></>
      )}
      <CustomModal
        title="Create New Note"
        open={openCreateModal}
        handleClose={handleCloseCreateNote}
      >
        <CreateNoteForm
          handleSubmit={handleSubmitData}
          handleCancel={handleCancel}
        />
      </CustomModal>
    </Grid2>
  );
}

export default NoteLayout;
