import React, { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  setDate(date: Date): void;
}
const AtomDatePicker: FC<IProps> = ({ setDate }) => {
  const today = new Date();
  return (
    <DatePicker
      className="w-full bg-white text-black text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
      selectsStart
      selected={today}
      dateFormat="dd/MM/yyyy"
      minDate={today}
      onChange={(date: Date) => setDate(date)}
    />
  );
};
export default AtomDatePicker;
