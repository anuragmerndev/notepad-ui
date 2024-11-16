import { ISideBarData } from "../types/components";
import { IconsData } from "./IconsData";

export const mainSideBarData: ISideBarData[] = [
  {
    icon: <IconsData.home />,
    label: "All Notes",
  },
  {
    icon: <IconsData.archive />,
    label: "Archived Notes",
  },
];

export const rightSideBarData: ISideBarData[] = [
  {
    icon: <IconsData.archive />,
    label: "Archive Note",
  },
  {
    icon: <IconsData.delete />,
    label: "Delete Note",
  },
];
