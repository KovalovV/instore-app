import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

import { store } from "store";
import { selectUser } from "store/user/selectors";

import { useAuth } from "hooks/useAuth";
import { useInitApp } from "hooks/useInitApp";

import App from "App";

import { SplashScreen } from "components/common/splash-screen";

import "styles/index.scss";

const queryClient = new QueryClient();

const Root = () => {
  const { isLoading } = useSelector(selectUser);

  useAuth();
  useInitApp();

  return isLoading ? <SplashScreen /> : <App />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Root />
        </QueryParamProvider>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
);
