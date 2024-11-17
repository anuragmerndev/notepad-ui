import { create } from "zustand";
import { mainSideBarData } from "../data/SidebarData";
import { TSideBarListType } from "../types/components";

export type TSideBarState = {
    activeSideBar: {
        label: string;
        type: TSideBarListType;
    }
}

type TSideBarAction = {
    setActiveSideBar: (activeSide: TSideBarState["activeSideBar"]) => void;
}

const useSideBarStore = create<TSideBarState & TSideBarAction>((set) => ({
    activeSideBar: {
        label: mainSideBarData[0].label,
        type: mainSideBarData[0].listType
    },
    setActiveSideBar: (activeSide) => {
        set((state) => ({
            ...state,
            activeSideBar: activeSide
        }))
    }
}));

export { useSideBarStore }