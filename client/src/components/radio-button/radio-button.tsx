import React, { ChangeEvent, FC, ReactElement } from "react";

interface RadioProps {
  name?: string;
  label: string;
  id?: string;
  value: string;
  onCheck?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
const Radiobutton: FC<RadioProps> = ({
  name,
  label,
  id,
  value,
  checked,
  onCheck,
}): ReactElement => {
  return (
    <>
      <input
        className="rounded-full h-4 w-4 duration-200 mt-1 float-left mr-2 cursor-pointer"
        type="radio"
        name="radio"
        id={id}
        checked={checked}
        onChange={onCheck}
        value={value}
      />
      <label className="font-normal text-lg" htmlFor={id}>
        {label}{" "}
      </label>
    </>
  );
};
export default Radiobutton;
