import { Heading, Text } from "music-app-ui";
import { useParams } from "@solidjs/router";

import { AlbumDetailWrapper, PlaylistWrapper, Row } from "./styles";
import useAlbum from "../../hooks/useAlbum";
import { LikeIcon, PlayingIcon, PlusIcon } from "../../components/icons";
import { For, Show } from "solid-js";
import { usePlayer } from "../../context/PlayerContext";

export const AlbumDetails = () => {
  const params = useParams();
  const album = useAlbum(params);
  const { play, state: playerState } = usePlayer();

  return (
    <AlbumDetailWrapper>
      <div class="img-wrapper">
        <img src={album()?.coverBannerPath} height="425" />
      </div>
      <div style={{ width: "100%" }}>
        <Heading size={4} css={{ fontWeight: "$bold", marginBottom: "$2" }}>
          // Album
        </Heading>
        <Heading size={1} css={{ fontWeight: "$bold", marginBottom: "$2" }}>
          {album()?.name}
        </Heading>
        <Heading
          size={3}
          css={{ fontWeight: "$bold", color: "$grey", marginBottom: "$2" }}
        >
          {album()?.artist?.name}
        </Heading>
        <Text
          size={2}
          css={{ color: "$grey", maxWidth: "490px", lineHeight: "1.6" }}
        >
          {album()?.description}
        </Text>
        <PlaylistWrapper>
          <For each={album()?.songs}>
            {({ name, _id }, idx) => (
              <Row
                onClick={() => {
                  play({ id: _id, name });
                }}
              >
                <div>
                  <Show
                    when={playerState.currentTrack.id === _id}
                    fallback={<Text css={{ width: "15px" }}>{idx() + 1}</Text>}
                  >
                    <PlayingIcon width="15" />
                  </Show>
                </div>
                <div>
                  <LikeIcon width="15" />
                </div>
                <div>
                  <PlusIcon width="15" />
                </div>
                <Text css={{ width: "auto", flex: 1 }}>{name}</Text>
                <Text css={{ width: "100px" }}>12,423</Text>
                <Text css={{ width: "100px" }}>3:43</Text>
              </Row>
            )}
          </For>
        </PlaylistWrapper>
      </div>
    </AlbumDetailWrapper>
  );
};
