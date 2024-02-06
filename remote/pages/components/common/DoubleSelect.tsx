import React, { FC, useState } from "react";
import { Listbox } from "@headlessui/react";

interface DoubleSelect_TYPE {}

const zero = { id: 1, value: "0", name: "NONE" };

const positive = [
  { id: 1, value: "1" },
  { id: 2, value: "2" },
  { id: 3, value: "3" },
  { id: 4, value: "4" },
  { id: 5, value: "5" },
  { id: 6, value: "6" },
  { id: 7, value: "7" },
  { id: 8, value: "8" },
  { id: 9, value: "9" },
  { id: 10, value: "10" },
];

const negative = [
  { id: 1, value: "-1" },
  { id: 2, value: "-2" },
  { id: 3, value: "-3" },
  { id: 4, value: "-4" },
  { id: 5, value: "-5" },
  { id: 6, value: "-6" },
  { id: 7, value: "-7" },
  { id: 8, value: "-8" },
  { id: 9, value: "-9" },
  { id: 10, value: "-10" },
];

const DoubleSelect: FC<DoubleSelect_TYPE> = (props) => {
  const [selectedValue, setSelectedValue] = useState(zero);

  return (
    <div className="relative w-full">
      <Listbox value={selectedValue} onChange={setSelectedValue}>
        {({ open }) => (
          <>
            <Listbox.Button className="flex items-center justify-between w-full p-2 bg-white">
              <div className="">{selectedValue.value}</div>

              <div className={open ? "transform rotate-180" : ""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.862 11.8043L7.99998 4.94264L1.13798 11.8043L0.195312 10.8616L7.99998 3.05664L15.8046 10.8616L14.862 11.8043Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Listbox.Button>
            {open && (
              <Listbox.Options className="absolute flex flex-col justify-between border w-full bg-white z-10">
                <div className="flex gap-[1px] text-white whitespace-nowrap">
                  <button className="flex-1 text-center bg-primary">-</button>
                  <button className="flex-1 text-center bg-primary">+</button>
                </div>
                <div className="flex-1">
                  <Listbox.Option
                    value={zero}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    {zero.value}
                  </Listbox.Option>
                </div>
                <div className="flex justify-between w-full p-2 max-h-44 overflow-y-scroll overflow-x-hidden">
                  <div className="flex-1">
                    {negative.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        value={option}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        {option.value}
                      </Listbox.Option>
                    ))}
                  </div>
                  <div className="flex-1">
                    {positive.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        value={option}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        {option.value}
                      </Listbox.Option>
                    ))}
                  </div>
                </div>
              </Listbox.Options>
            )}
          </>
        )}
      </Listbox>
    </div>
  );
};

export default DoubleSelect;
