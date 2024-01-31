import React, { FC } from "react";

interface Card_TYPE {
  children?: React.ReactNode;
}

const Card: FC<Card_TYPE> = (props) => {
  return <div className="flex p-2 border rounded-md">{props.children}</div>;
};

export default Card;
