import React, { FC } from "react";

interface Card_TYPE {
  children?: React.ReactNode;
  onClick: () => void;
}

const Card: FC<Card_TYPE> = (props) => {
  return (
    <div className="flex p-2 border rounded-md" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
