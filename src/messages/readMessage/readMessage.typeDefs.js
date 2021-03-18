import { gql } from "apollo-server";

export default gql`
  type Mutation {
    readMessage(id: Int!): MutationResponse!
  }
`;
