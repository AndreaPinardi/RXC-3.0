import useComponentsLoader from "@/hooks/useComponentsLoader";
import { Outlet } from "react-router-dom";

function Layout({ data }) {
  const leftComponents = useComponentsLoader(data.previewSection.components);

  return (
    <div className="flex">
      <div className="relative flex-1 min-h-screen hidden lg:block bg-lightGray">
        {leftComponents}
      </div>
      <div className="flex-1 flex flex-col min-h-screen p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
