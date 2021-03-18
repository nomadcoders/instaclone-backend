import { gql } from "apollo-server";

export default gql`
  type Subscription {
    roomUpdates(id: Int!): Message
  }
`;
