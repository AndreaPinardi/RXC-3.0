import useComponentsLoader from "@/hooks/useComponentsLoader";
import { Outlet } from "react-router-dom";

function Layout({ data }) {
  const leftComponents = useComponentsLoader(data.layout.left.components);
  const [nav, footer] = useComponentsLoader(data.layout.right.components);

  return (
    <div className="flex">
      <div className="left flex-1 min-h-screen hidden lg:block">
        {leftComponents}
      </div>
      <div className="right flex-1 flex flex-col min-h-screen">
        {nav}
        <Outlet />
        <div className="mt-auto hidden lg:block">{footer}</div>
      </div>
    </div>
  );
}

export default Layout;
