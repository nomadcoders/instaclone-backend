import { gql } from "apollo-server";

export default gql`
  type Query {
    seeHashtag(hashtag: String!): Hashtag
  }
`;
