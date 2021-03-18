import { gql } from "apollo-server";

export default gql`
  type Mutation {
    followUser(username: String!): MutationResponse!
  }
`;
