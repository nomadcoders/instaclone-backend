import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadPhoto(file: String!, caption: String): Photo
  }
`;
