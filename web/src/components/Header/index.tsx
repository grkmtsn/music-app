import { Text } from "music-app-ui";
import { useAuth } from "../../context/AuthContext";

import { BellIcon, SearchIcon } from "../icons";
import {
  SearchBar,
  Wrapper,
  SearchInput,
  Actions,
  ItemWrapper,
  Avatar,
} from "./styles";

export const Header = () => {
  const { state: authState } = useAuth();
  return (
    <Wrapper>
      <SearchBar>
        <label for="search">
          <SearchIcon width="18" height="21" />
        </label>
        <SearchInput id="search" placeholder="Search your entertainment" />
      </SearchBar>
      <Actions>
        <ItemWrapper>
          <BellIcon width="21" height="26" />
        </ItemWrapper>
        <ItemWrapper>
          <Avatar />
          <Text bold>{authState.user.username}</Text>
        </ItemWrapper>
      </Actions>
    </Wrapper>
  );
};
