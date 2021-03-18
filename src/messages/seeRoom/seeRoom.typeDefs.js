import { gql } from "apollo-server";

export default gql`
  type Query {
    seeRoom(id: Int!): Room
  }
`;
