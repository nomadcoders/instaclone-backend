export default {
  User: {
    totalFollowing: (root) => {
      console.log(root.username);
      return 0;
    },
    totalFollowers: () => 999,
  },
};
