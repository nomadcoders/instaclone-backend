import client from "../../client";

export default {
  Query: {
    seePhoto: (_, { id }) =>
      client.photo.findUnique({
        where: {
          id,
        },
      }),
  },
};
