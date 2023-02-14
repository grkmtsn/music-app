import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type IUser = {
  username: string;
  email: string;
  favouriteAlbumIds: string[];
  playlistIds: string[];
  favouriteSongIds: string[];
};

type AuthContextType = {
  state: {
    user: IUser;
    token: string;
  };
  setAuth: (user: IUser, token: string) => void;
  logout: () => void;
};

const initialValues: AuthContextType = {
  state: {
    user: {
      username: "",
      email: "",
      playlistIds: [],
      favouriteSongIds: [],
      favouriteAlbumIds: [],
    },
    token: "",
  },
  setAuth: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(initialValues);

export const AuthProvider: ParentComponent = (props) => {
  const [state, setState] = createStore<{ token: string; user: IUser }>({
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : initialValues.state.user,
  });

  const auth = {
    state,
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setState({ token: "", user: initialValues.state.user });
    },
    setAuth: (user: IUser, token: string) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setState({ user, token });
    },
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext<AuthContextType>(AuthContext);
}
