import { createMemo } from "solid-js";
import useAlbums from "./useAlbums";

export default (params: any) => {
  const [albums] = useAlbums();
  const album = createMemo(() => albums()?.find(({ _id }) => _id === params.id));
  return album;
};
