import { Grid2, useTheme } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { IconsData } from "../data/IconsData";
import NotesCard from "../components/NotesCard";
import { useEffect, useState } from "react";
import { INoteData, INotesData, TButtonActionType } from "../types/components";
import NoteDetail from "../components/NoteDetail";
import CustomModal from "../components/CustomModal";
import CreateNoteForm from "../forms/CreateNoteForm";
import { useNoteStore } from "../store/noteStore";
import RightSideBar from "../components/RightSideBar";
import { TSideBarState, useSideBarStore } from "../store/sideBarStore";
import { useActiveNoteStore } from "../store/activeNoteStore";

function NoteLayout() {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [filteredNotes, setFilteredNotes] = useState<INoteData[] | null>(null);
  const [callUpdateFilter, setCallUpdateFilter] = useState<boolean>(false);

  const {
    notes: notesList,
    createNote,
    archiveNote,
    deleteNote,
  } = useNoteStore((state) => state);
  const activeSideBar = useSideBarStore((state) => state.activeSideBar);
  const { activeNote, setActiveNote, setInactiveNote } = useActiveNoteStore(
    (state) => state
  );

  const theme = useTheme();

  const handleCreateNote = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateNote = () => {
    setOpenCreateModal(false);
  };

  const handleActiveNote = (id: string) => {
    if (activeNote?.id === id) {
      setInactiveNote();
      return;
    }

    const selectedNote = notesList.find((notes) => notes.id === id);
    if (selectedNote) {
      setActiveNote(selectedNote);
    } else {
      setInactiveNote();
    }
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
    setCallUpdateFilter((prev) => !prev);
  };

  const handleCancel = () => {
    setOpenCreateModal(false);
  };

  const handleExtraClick = (type: TButtonActionType) => {
    switch (type) {
      case "archive":
        archiveNote(activeNote?.id!);
        setInactiveNote();
        setCallUpdateFilter((prev) => !prev);
        break;

      case "delete":
        deleteNote(activeNote?.id!);
        setInactiveNote();
        setCallUpdateFilter((prev) => !prev);
        break;

      default:
        break;
    }
  };

  const updateFilterData = (activeSide: TSideBarState["activeSideBar"]) => {
    handleFilteredNotes(activeSide);
    setInactiveNote();
  };

  useEffect(() => {
    updateFilterData(activeSideBar);
  }, [activeSideBar, callUpdateFilter]);

  const handleFilteredNotes = (activeList: TSideBarState["activeSideBar"]) => {
    switch (activeList.type) {
      case "all":
        const unArchivedNotes = notesList.filter((note) => !note.isArchived);
        setFilteredNotes(unArchivedNotes);
        break;

      case "archive":
        const archivedNotes = notesList.filter((note) => note.isArchived);
        setFilteredNotes(archivedNotes);
        break;

      case "tag":
        const filterNotesByTag = notesList.filter(
          (note) =>
            note.tags
              .map((noteTags) => noteTags.label)
              .includes(activeList.label) && !note.isArchived
        );
        setFilteredNotes(filterNotesByTag);
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
          {filteredNotes &&
            filteredNotes.map((noteData) => (
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
