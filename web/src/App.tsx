import { Component, For } from "solid-js";
import { UIProvider, styled, Heading } from "music-app-ui";

import { Route, Routes } from "@solidjs/router";
import { Layout } from "./components/Layout";

import NotFound from "./assets/not_found.svg";
import { Login } from "./pages/Login";
import { Albums } from "./pages/Albums";

import { Toaster } from "solid-toast";
import { AlbumDetails } from "./pages/AlbumDetails";

const NotFoundWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "100px",
});

const App: Component = () => {
  return (
    <UIProvider
      enableCssReset
      config={{
        fonts: {
          default: "Nunito",
        },
      }}
    >
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/albums" component={Layout}>
          <Route path="/" component={Albums}>
            <Route path="/" component={Albums} />
            <Route path="/:id" component={AlbumDetails} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundWrapper>
                <img src={NotFound} width="500" />
                <Heading size={2} css={{ marginTop: "$6" }}>
                  PAGE NOT FOUND
                </Heading>
              </NotFoundWrapper>
            </Layout>
          }
        />
      </Routes>
      <Toaster position="bottom-right" gutter={8} />
    </UIProvider>
  );
};

export default App;
