/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  mapExchange,
} from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import toast from "solid-toast";

import App from "./App";
import { addAuthToOperation, getAuth } from "./utils/auth";
import { AuthProvider } from "./context/AuthContext";
import { PlayerProvider } from "./context/PlayerContext";

export const client = createClient({
  url: " http://localhost:4000",
  exchanges: [
    dedupExchange,
    cacheExchange,
    mapExchange({
      onError(error, _operation) {
        error.graphQLErrors.forEach((e) => {
          toast.error(e.message);
        });
      },
    }),
    authExchange({
      getAuth,
      addAuthToOperation,
    }),
    fetchExchange,
  ],
});

render(
  () => (
    <AuthProvider>
      <PlayerProvider>
        <Router>
          <App />
        </Router>
      </PlayerProvider>
    </AuthProvider>
  ),
  document.getElementById("root") as HTMLElement
);
