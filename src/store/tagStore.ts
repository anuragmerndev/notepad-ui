import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ITagData } from '../types/components';

type TTagState = {
    tags: ITagData[]
}

type TTagAction = {
    createTag: (data: ITagData) => void;
    updateTag: (id: ITagData["id"], data: ITagData) => void;
    deleteTag: (id: ITagData["id"]) => void;
}

const useTagStore = create<TTagState & TTagAction>()(
    persist((set) => ({
        tags: [
            {
                id: "1",
                label: "Dev",
                listType: "tag"
            },
            {
                id: "2",
                label: "Design",
                listType: "tag"
            },
            {
                id: "3",
                label: "Frontend",
                listType: "tag"
            }],
        createTag: (data: ITagData) => {
            set((state) => ({
                ...state,
                tags: [...state.tags, { ...data, listType: "tag" }]
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
                tags: state.tags.filter((tagData) => tagData.id !== id)
            }))
        }
    }), {
        name: "tag-store",
        storage: createJSONStorage(() => localStorage)
    }))

export { useTagStore }