import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubsub";

export default {
  Subscription: {
    roomUpdates: {
      subscribe: () => pubsub.asyncIterator(NEW_MESSAGE),
    },
  },
};
