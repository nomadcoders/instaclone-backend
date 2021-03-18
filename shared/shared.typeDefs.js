import { gql } from "apollo-server";

export default gql`
  type MutationResponse {
    ok: Boolean!
    id: Int
    error: String
  }
`;
