const postsResolver = require("./posts");
const usersResolver = require("./users");
const commentResolver = require("./comment");
module.exports = {
  Query: {
    ...postsResolver.Query,
  },
  Mutation: {
    ...usersResolver.Mutation,
    ...postsResolver.Mutation,
    ...commentResolver.Mutation,
  },
};
