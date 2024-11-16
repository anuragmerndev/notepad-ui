import { create } from 'zustand';
import { ITagData } from '../types/components';

type TTagState = {
    tags: ITagData[]
}

type TTagAction = {
    createTag: (data: ITagData) => void;
    updateTag: (id: ITagData["id"], data: ITagData) => void;
    deleteTag: (id: ITagData["id"]) => void;
}

const useTagStore = create<TTagState & TTagAction>((set) => ({
    tags: [
        {
            id: "1",
            label: "Dev",
        },
        {
            id: "2",
            label: "Design",
        },
        {
            id: "3",
            label: "Frontend",
        }],
    createTag: (data: ITagData) => {
        set((state) => ({
            ...state,
            tags: [...state.tags, data]
        }))
    },
    updateTag: (id, data) => {
        set((state) => ({
            ...state,
            tags: state.tags.map((tagData) => tagData.id === id ? data : tagData)
        }))
    },
    deleteTag: (id) => {
        set((state) => ({
            ...state,
            tags: state.tags.filter((tagData) => tagData.id === id)
        }))
    }
}))

export { useTagStore }