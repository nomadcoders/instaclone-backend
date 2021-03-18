import client from "../../client";

export default {
  Query: {
    searchPhotos: (_, { keyword }) => {
      return client.photo.findMany({
        where: {
          caption: {
            contains: keyword,
          },
        },
      });
    },
  },
};
