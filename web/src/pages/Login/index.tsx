import { createEffect } from "solid-js";
import { Heading, Text } from "music-app-ui";
import { useNavigate } from "@solidjs/router";

import { Wrapper, Card, InputWrapper } from "./styles";

import LoginBg from "../../assets/login_bg.svg";
import { client } from "../..";
import { useAuth } from "../../context/AuthContext";

const LOGIN_MUTATION = `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token,
      user {
        username,
        email,
        playlistIds,
        favouriteSongIds,
        favouriteAlbumIds
      }
    }
  }
`;

let formRef: HTMLFormElement;

export const Login = () => {
  const navigate = useNavigate();
  const { state: authState, setAuth } = useAuth();

  createEffect(() => {
    if (authState.token) {
      navigate("/albums");
    }
  });

  return (
    <Wrapper>
      <Card>
        <img src={LoginBg} />
        <Heading size={2} css={{ fontWeight: "bold", marginBottom: "$4" }}>
          Listening and watching anytime, anywhere
        </Heading>
        <Text css={{ marginBottom: "$4" }}>
          The artists we represent are one of the most successful in Romania and
          also were a huge breakthrough.
        </Text>
        <form
          ref={formRef}
          style={{ width: "100%" }}
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(formRef);
            const response = await client
              .mutation(LOGIN_MUTATION, {
                email: formData.get("email"),
                password: formData.get("password"),
              })
              .toPromise();

            if (response.data?.login?.token) {
              setAuth(response.data?.login?.user, response.data?.login?.token);
              navigate("/albums");
            }
          }}
        >
          <InputWrapper>
            <label for="email">Email</label>
            <input type="email" id="email" required name="email" />
          </InputWrapper>
          <InputWrapper>
            <label for="password">Password</label>
            <input type="password" id="password" required name="password" />
          </InputWrapper>
          <InputWrapper>
            <button type="submit">
              <Text bold css={{ color: "$red" }}>
                Login
              </Text>
            </button>
          </InputWrapper>
        </form>
      </Card>
    </Wrapper>
  );
};
