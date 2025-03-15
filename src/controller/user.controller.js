export const getUser = async (request, reply) => {
  console.log("request de dados");

  return reply.status(200).send({
    user: {
      name: request.authUser.name,
      email: request.authUser.email,
      avatar_url: request.authUser.gitHub,
    },
  });
};
