import { ChangeEvent } from "react";

export interface IListItem {
    icon?: JSX.Element,
    key?: string | number,
    active?: boolean,
    label: string,
    isButton?: boolean,
    handleClick: (data: ISideBarData) => void;
}

export interface ISideBarData extends Omit<IListItem, "handleClick"> {}

export interface ICustomButton {
    text: string;
    icon?: JSX.Element;
    variant?: "text" | "contained" | "outlined";
    handleClick: () => void;
    color?: "info" | "inherit" | "primary" | "secondary" | "success" | "error" | "warning";
    fullWidth?: boolean;
}

export interface ISearchBox {
    placeholder: string;
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export interface INotesCard {
    id: number;
    title: string;
    tags: ITagData[];
    created_date: string;
    active?: boolean;
}

export interface ITagData {
    id: number;
    label: string;
}

export interface INotesDetail extends INotesCard {
    body: string;
}