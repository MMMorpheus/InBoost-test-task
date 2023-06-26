import { useState } from "react";

// Additional type
export type TVariant = {
  label: string;
  checked: boolean;
};

// Hook type definition
type TuseCheckboxNode = (
  variants: string[],
) => [
  options: TVariant[],
  currentValue: string,
  isOpen: boolean,
  openHandler: () => void,
  openCheckboxHandler: (value: string, index: number) => void,
];

export const useCheckboxNode: TuseCheckboxNode = variants => {
  const defaultOptions = variants.map(i => {
    return { label: i, checked: false };
  });
  // modified variants for d-down list
  const [options, setOptions] = useState<TVariant[]>(defaultOptions);
  // current visible value
  const [currentValue, setCurrentValue] = useState<string>("");
  // toggle flag
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle checkbox list => open | close
  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  // Update visible checked value and toggle list
  const openCheckboxHandler = (value: string, index: number): void => {
    // note, that only one value can be checked
    if (value === currentValue) {
      setCurrentValue("");
      setOptions(defaultOptions);
    } else {
      setCurrentValue(value);
      setOptions(
        options.map((elem, i) => {
          if (i === index) {
            elem.checked = true;
          } else {
            elem.checked = false;
          }
          return elem;
        }),
      );

      openHandler();
    }
  };

  return [options, currentValue, isOpen, openHandler, openCheckboxHandler];
};
