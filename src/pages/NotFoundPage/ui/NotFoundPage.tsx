import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export interface NotFoundProps {
    className?: string;
}

export const NotFoundPage = ({ className }:NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
