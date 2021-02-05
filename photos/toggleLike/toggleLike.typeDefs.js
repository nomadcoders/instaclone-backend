import { gql } from "apollo-server";

export default gql`
  type ToggleLikeResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    toggleLike(id: Int!): ToggleLikeResult!
  }
`;
