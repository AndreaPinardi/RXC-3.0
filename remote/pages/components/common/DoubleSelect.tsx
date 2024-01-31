import React, { FC, useState } from "react";
import { Listbox } from "@headlessui/react";

interface DoubleSelect_TYPE {}

const zero = { id: 1, name: "0" };

const positive = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
  { id: 6, name: "6" },
  { id: 7, name: "7" },
  { id: 8, name: "8" },
  { id: 9, name: "9" },
  { id: 10, name: "10" },
];

const negative = [
  { id: 1, name: "-1" },
  { id: 2, name: "-2" },
  { id: 3, name: "-3" },
  { id: 4, name: "-4" },
  { id: 5, name: "-5" },
  { id: 6, name: "-6" },
  { id: 7, name: "-7" },
  { id: 8, name: "-8" },
  { id: 9, name: "-9" },
  { id: 10, name: "-10" },
];

const DoubleSelect: FC<DoubleSelect_TYPE> = (props) => {
  const [selectedPerson, setSelectedPerson] = useState(zero);

  return (
    <div className="w-20">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        {({ open }) => (
          <>
            <Listbox.Button className="flex items-center justify-between border w-full p-1">
              <div className="">{selectedPerson.name}</div>

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
              <Listbox.Options className="flex flex-col justify-between border w-full">
                <div className="flex-1">
                  <Listbox.Option
                    value={zero}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    {zero.name}
                  </Listbox.Option>
                </div>
                <div className="flex justify-between w-full p-1 max-h-44 overflow-y-scroll">
                  <div className="flex-1">
                    {negative.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        {person.name}
                      </Listbox.Option>
                    ))}
                  </div>
                  <div className="flex-1">
                    {positive.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        {person.name}
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
