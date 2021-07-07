import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
      password
    }
  }
`;

export const CREATE_CANVA = gql`
  mutation createCanva($username: String!) {
    createCanva(username: $username) {
      id
      user_id
      pjson
      name
    }
  }
`;
