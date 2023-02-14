import { A } from "@solidjs/router";
import { Component, For } from "solid-js";
import { Text } from "music-app-ui";

import logo from "../../assets/logo.svg";

import { AlbumsIcon, DiscoveryIcon, ArtistsIcon, SongsIcon } from "../icons";
import {
  ImageWrapper,
  MenuWrapper,
  Wrapper,
  IconWrapper,
  MenuItem,
} from "./styles";

const menuItems = [
  {
    text: "Discover",
    path: "/discover",
    icon: <DiscoveryIcon />,
  },
  {
    text: "Songs",
    path: "/songs",
    icon: <SongsIcon />,
  },
  {
    text: "Albums",
    path: "/albums",
    icon: <AlbumsIcon />,
  },
  {
    text: "Artists",
    path: "/artists",
    icon: <ArtistsIcon />,
  },
];

export const Sidebar: Component = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={logo} width="89" height="34" />
      </ImageWrapper>
      <MenuWrapper>
        <For each={menuItems}>
          {(item) => (
            <A href={item.path}>
              <MenuItem>
                <IconWrapper>{item.icon}</IconWrapper>
                <Text
                  size={1}
                  css={{ lineHeight: "$normal", fontWeight: "$semibold" }}
                >
                  {item.text}
                </Text>
              </MenuItem>
            </A>
          )}
        </For>
      </MenuWrapper>
    </Wrapper>
  );
};
