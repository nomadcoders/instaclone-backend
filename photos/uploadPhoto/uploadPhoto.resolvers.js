import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        if (caption) {
          /// parse caption
          // get or create Hashtags
        }
        // save the photo WITH the parsed hashtags
        // add the photo to the hashtags
      }
    ),
  },
};
