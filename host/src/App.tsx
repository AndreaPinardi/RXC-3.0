import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import brain from "./brain";

const RemoteComponent = lazy(() =>
  import("remote/nextjs-remote-page").catch(() => {
    return { default: () => <>NextJs remote unavailable!</> };
  })
);

const App = ({ config = null }: any) => {
  return (
    <Suspense fallback={null}>
      <RemoteComponent config={config} />
    </Suspense>
  );
};

const rxcWidget = {
  new: (config: any) => {
    rxcWidget["selector"] = config?.selector || "";
    return {
      render: () => {
        ReactDOM.render(
          <App config={config} />,
          document.querySelector(config.selector)
        );
      },
    };
  },
};

window.RXC = { rxcWidget };

window.RXCBrain = brain;

//ReactDOM.render(<App />, document.getElementById("app"));
