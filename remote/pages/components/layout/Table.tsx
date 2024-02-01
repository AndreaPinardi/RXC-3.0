import React, { FC } from "react";
import DoubleSelect from "../common/DoubleSelect";

interface Table_TYPE {}

const Table: FC<Table_TYPE> = (props) => {
  return (
    <table className="border-collapse border border-grey-400">
      <thead>
        <tr>
          <th className="border border-grey-400 min-w-28 p-2"></th>
          <th className="border border-grey-400 min-w-28 p-2">SPH (Sphere)</th>
          <th className="border border-grey-400 min-w-28 p-2">
            CYL (Cylinder)
          </th>
          <th className="border border-grey-400 min-w-28 p-2">Axis</th>
          <th className="border border-grey-400 min-w-28 p-2">Add</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-grey-400 p-2">OD (Right)</td>
          <td className="border border-grey-400">
            <DoubleSelect />
          </td>
          <td className="border border-grey-400">
            <DoubleSelect />
          </td>
          <td className="border border-grey-400"></td>
          <td className="border border-grey-400"></td>
        </tr>
        <tr>
          <td className="border border-grey-400 p-2">OS (Left)</td>
          <td className="border border-grey-400">
            <DoubleSelect />
          </td>
          <td className="border border-grey-400">
            <DoubleSelect />
          </td>
          <td className="border border-grey-400"></td>
          <td className="border border-grey-400"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
