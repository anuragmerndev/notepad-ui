import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { INoteData } from '../types/components';

type TNoteActions = {
    createNote: (data: INoteData) => void;
    updateNote: (id: INoteData["id"], data: INoteData) => void;
    deleteNote: (id: INoteData["id"]) => void;
    archiveNote: (id: INoteData["id"]) => void;
}

type TNoteState = {
    notes: INoteData[]
}

const useNoteStore = create<TNoteState & TNoteActions>()(
    persist(
        (set) => ({
            notes: [],
            createNote: (data) => {
                set((state) => ({
                    ...state,
                    notes: [...state.notes, data]
                }))
            },
            deleteNote: (id) => {
                set((state) => ({
                    ...state,
                    notes: state.notes.filter(note => note.id !== id)
                }))
            },
            updateNote: (id, data) => {
                set((state) => ({
                    ...state,
                    notes: state.notes.map(note => note.id === id ? data : note)
                }))
            },
            archiveNote: (id) => {
                set((state) => ({
                    ...state,
                    notes: state.notes.map(note => note.id === id ? { ...note, isArchived: !note.isArchived } : note)
                }))
            },
        }), {
        name: "note-store",
        storage: createJSONStorage(() => localStorage)
    }))


export { useNoteStore }