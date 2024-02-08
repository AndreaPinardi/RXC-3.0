import React, { FC } from "react";

interface RXC_BRAND_LOGO_TYPE {
  position: string;
}

const RXC_BRAND_LOGO: FC<RXC_BRAND_LOGO_TYPE> = (props) => {
  return <div className="absolute top-2 left-2">RXC_BRAND_LOGO</div>;
};

export default RXC_BRAND_LOGO;
