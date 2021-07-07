import { gql } from "@apollo/client";
export const GET_ALLCANVAS_BY_USER = gql`
  query getAllCanvaByUser($username: String!) {
    getAllCanvaByUser(username: $username) {
      name
      create_date
      name
      id
      pjson
      user_id
    }
  }
`;
