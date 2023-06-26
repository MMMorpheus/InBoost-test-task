import { FC } from 'react';
import { Checkbox } from '..';

import { TVariant } from '../../hooks';

import "./checkboxList.scss"

import clsx from 'clsx';

interface CheckboxListProps {
  values: TVariant[];
  isOpen: boolean;
  handler: (value: string, index: number) => void;

}

export const CheckboxList: FC<CheckboxListProps> = ({ values, isOpen, handler }) => {
  return (
    <ul className={clsx("list", isOpen && "opened")}>
      {values.map((item, i) => {
        return <Checkbox key={i} label={item.label} checked={item.checked} handler={() => {
            handler(item.label, i)
        }}/>;
      })}
    </ul>
  );
};
