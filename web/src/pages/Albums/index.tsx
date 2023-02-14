import { A, Outlet, useNavigate, useParams } from "@solidjs/router";
import { Heading, Text } from "music-app-ui";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  onMount,
  Show,
} from "solid-js";
import { createStore } from "solid-js/store";

import { client } from "../..";
import { FlexList } from "../../components/FlexList";
import { LayoutSpinner } from "../../components/Layout";
import useAlbums from "../../hooks/useAlbums";
import { CardWrapper, PageWrapper } from "./styles";

type IAlbum = {
  _id: string;
  name: string;
  coverImagePath: string;
  artist: {
    name: string;
  };
};

export const Albums = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [albums] = useAlbums();

  onMount(() => {
    if (params.id) {
      navigate(`/albums/${params.id}`);
    }
  });

  return (
    <Show
      when={albums.loading}
      fallback={
        <PageWrapper style={{ height: "100%" }}>
          <Heading size={3} css={{ fontWeight: "$bold", marginBottom: "$3" }}>
            Featured Albums
          </Heading>
          <FlexList>
            <For each={albums()}>
              {({ _id, name, coverImagePath, artist }) => (
                <A href={`/albums/${_id}`}>
                  <CardWrapper>
                    <img width="200" height="200" src={coverImagePath} />
                    <Text bold>{name}</Text>
                    <Text size={2}>{artist.name}</Text>
                  </CardWrapper>
                </A>
              )}
            </For>
          </FlexList>
          <Outlet />
        </PageWrapper>
      }
    >
      <LayoutSpinner />
    </Show>
  );
};
