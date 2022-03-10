import { ChangeEventHandler, MouseEventHandler } from 'react'
import { IconType } from 'react-icons'
import { ActionMeta, SingleValue } from 'react-select';

export interface IButton {
    classes?: string;
    text?: string;
    onClick?: MouseEventHandler;
    Icon?: IconType;
    iconPosition?: 'left' | 'right' | undefined;
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

export interface IInitStateFilter {
    jobs: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
}

export interface IListLocation {
    onChangeList?: ((newValue: SingleValue<{
            value: string;
            label: string;
        }>, actionMeta: ActionMeta<{
            value: string;
            label: string;
        }>) => void) | undefined;
}

export interface IFormSearch extends Pick<IListLocation, 'onChangeList'> {
    onChangeJob?: ChangeEventHandler;
}

export interface ILabelCategory extends Pick<IButton, 'onClick'> {
    label?: string;
}

export interface ISalarySlider {
    onChange?: (value : number[], index : number) => void;
}