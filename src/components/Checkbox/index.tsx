import { FC } from "react";

import "./checkbox.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  handler: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ label, checked, handler }) => {
  return (
    <div className="checkboxWrapper">
      <label>
        <input type="checkbox" checked={checked} onChange={handler} />
        <span>{label}</span>
      </label>
    </div>
  );
};
