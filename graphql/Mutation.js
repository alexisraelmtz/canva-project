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

export const DELETE_USER = gql`
  mutation createUser($id: ID!) {
    deleteUser(id: $id) {
      successfull
      message
    }
  }
`;
