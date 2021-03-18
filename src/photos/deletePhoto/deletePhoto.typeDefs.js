import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deletePhoto(id: Int!): MutationResponse!
  }
`;
