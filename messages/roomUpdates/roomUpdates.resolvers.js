import { withFilter } from "apollo-server";
import client from "../../client";
import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubsub";

export default {
  Subscription: {
    roomUpdates: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_MESSAGE),
        ({ roomUpdates }, { id }) => {
          return roomUpdates.roomId === id;
        }
      ),
    },
  },
};
