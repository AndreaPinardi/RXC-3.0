import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Backend from "../backend";

const queryClient = new QueryClient();

export default function Main({ config = null }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Backend config={config} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
