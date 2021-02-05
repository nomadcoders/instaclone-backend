import { gql } from "apollo-server";

export default gql`
  type LikePhotoResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    likePhoto(id: Int!): LikePhotoResult
  }
`;
