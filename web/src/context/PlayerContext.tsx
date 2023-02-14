import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type ITrack = {
  id: string;
  name: string;
};

type PlayerContextType = {
  state: {
    currentTrack: ITrack;
  };
  play: (track: ITrack) => void;
};

const initialValues: PlayerContextType = {
  state: {
    currentTrack: {
      id: "",
      name: "",
    },
  },
  play: () => {},
};

const PlayerContext = createContext<PlayerContextType>(initialValues);

export const PlayerProvider: ParentComponent = (props) => {
  const [state, setState] = createStore<PlayerContextType["state"]>(
    initialValues.state
  );

  const value = {
    state,
    play: (currentTrack: ITrack) => {
      setState({ currentTrack });
    },
  };

  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export function usePlayer() {
  return useContext<PlayerContextType>(PlayerContext);
}
