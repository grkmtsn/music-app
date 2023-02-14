import { Outlet, useNavigate } from "@solidjs/router";
import { createEffect, ParentComponent, Show } from "solid-js";
import { Spinner } from "music-app-ui";

import { useAuth } from "../../context/AuthContext";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { PageLayout, SpinnerWrapper } from "./styles";
import { usePlayer } from "../../context/PlayerContext";

export const Layout: ParentComponent = (props) => {
  const navigate = useNavigate();
  const { state: authState } = useAuth();
  const { state: playerState } = usePlayer();

  createEffect(() => {
    if (!authState.token) {
      navigate("/login");
    }
  });

  return (
    <Show when={authState.token}>
      <PageLayout>
        <aside class="sidebar">
          <Sidebar />
        </aside>
        <Header />
        <main class="main">
          <Outlet />
          {props.children}
        </main>
        <footer class="footer">
          Current playing: {playerState.currentTrack.name}
        </footer>
      </PageLayout>
    </Show>
  );
};

export const LayoutSpinner = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};
