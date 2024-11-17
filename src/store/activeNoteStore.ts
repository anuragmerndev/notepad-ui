import { create } from "zustand";
import { INotesDetail } from "../types/components";

export type TNoteState = {
    activeNote: INotesDetail | null;
}

export type TNoteAction = {
    setActiveNote: (data: INotesDetail) => void;
    setInactiveNote: () => void;
}

const useActiveNoteStore = create<TNoteState & TNoteAction>((set) => ({
    activeNote: null,
    setActiveNote: (data) => {
        set((state) => ({
            ...state,
            activeNote: data
        }))
    },
    setInactiveNote: () => {
        set((state) => ({
            ...state,
            activeNote: null
        }))
    }
}))

export { useActiveNoteStore }