import { FormikValues } from "formik";
import { ChangeEvent } from "react";

export interface IListItem {
    icon?: JSX.Element,
    id?: string,
    active?: boolean,
    label: string,
    isButton?: boolean,
    handleClick: (data: ISideBarData) => void;
    listType: TSideBarListType;
    canDelete?: boolean;
}

export interface ISideBarData extends Omit<IListItem, "handleClick"> {
    type?: TButtonActionType
}

export type TButtonActionType = "archive" | "delete"
export type TSideBarListType = "all" | "archive" | "tag" | "button";

export interface ICustomButton {
    text: string;
    icon?: JSX.Element;
    variant?: "text" | "contained" | "outlined";
    handleClick?: () => void;
    color?: "info" | "inherit" | "primary" | "secondary" | "success" | "error" | "warning";
    fullWidth?: boolean;
    type?: "button" | "submit"
    disabled?: boolean
}

export interface ISearchBox {
    placeholder: string;
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export interface INotesCard {
    id: string;
    title: string;
    tags: ITagData[];
    created_date: string;
    active?: boolean;
    handleClick?: (id: string) => void;
}
export interface INotesData extends FormikValues {
    title: string;
    tags: ITagData[];
    body: string;
}

export interface ITagData {
    id: string;
    label: string;
    listType: TSideBarListType;
}

export interface INotesDetail extends INotesCard {
    body: string;
    isArchived: boolean;
}

export interface INoteData extends INotesDetail {
    isArchived: boolean;
}

export interface IModalData {
    title: string;
    open: boolean;
    handleClose: () => void;
    children: JSX.Element;
}
