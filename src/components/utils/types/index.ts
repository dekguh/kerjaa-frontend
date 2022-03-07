import { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'

export interface IButton {
    classes?: string;
    text?: string;
    onClick?: MouseEventHandler;
    Icon?: IconType;
}

export interface ITextHeading extends Pick<IButton, 'text' | 'classes'> {
    component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface IDividerBorder extends Pick<IButton, 'classes'> {
    width?: string;
    height?: string;
    color?: string;
    rounded?: string;
}