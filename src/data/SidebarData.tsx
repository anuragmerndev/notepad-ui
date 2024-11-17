import { ISideBarData } from "../types/components";
import { IconsData } from "./IconsData";

export const mainSideBarData: ISideBarData[] = [
  {
    icon: <IconsData.home />,
    label: "All Notes",
    listType: "all",
  },
  {
    icon: <IconsData.archive />,
    label: "Archived Notes",
    listType: "archive",
  },
];

export const rightSideBarData: ISideBarData[] = [
  {
    icon: <IconsData.archive />,
    label: "Archive Note",
    type: "archive",
    listType: "button",
  },
  {
    icon: <IconsData.delete />,
    label: "Delete Note",
    type: "delete",
    listType: "button",
  },
];
