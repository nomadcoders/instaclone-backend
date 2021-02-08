import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editComment(id: Int!, payload: String!): MutationResponse!
  }
`;
