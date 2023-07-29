import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export interface LoaderProps {
className?: string;}

export const Loader = ({ className }:LoaderProps) => (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
