import { FC } from "react";
import { CheckboxList } from "..";

import { useCheckboxNode } from "../../hooks";
import { variants } from "../../variants";

import clsx from "clsx";
import "./checkboxNode.scss";

export const CheckboxNode: FC = () => {
  const [options, currentValue, isOpen, openHandler, openCheckboxHandler] =
    useCheckboxNode(variants);

  return (
    <>
      <div className="nodeWrapper">
        <div className="emptyBox"></div>
        <div
          className={clsx("listHandler", isOpen && "opened")}
          onClick={openHandler}
        >
          <span>
            {!currentValue && !isOpen && "Вибрати значення"}
            {!currentValue && isOpen && "Виберіть значення"}
            {currentValue.length > 0 && `${currentValue}`}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={clsx(isOpen ? "rotated" : "rotated-not")}
          >
            <g>
              <path
                d="M7.41 8.295L12 12.875L16.59 8.295L18 9.705L12 15.705L6 9.705L7.41 8.295Z"
                fill="#2C7DFA"
              />
            </g>
          </svg>
        </div>
        <CheckboxList
          values={options}
          isOpen={isOpen}
          handler={openCheckboxHandler}
        />
      </div>
    </>
  );
};
