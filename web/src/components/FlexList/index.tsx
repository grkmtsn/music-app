import { ParentComponent } from "solid-js";

import { Wrapper } from "./styles";

export const FlexList: ParentComponent = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
