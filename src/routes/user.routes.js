import { getUser } from "../controller/user.controller.js";

const userRoutes = async (app, options) => {
  app.get("/", getUser);
};

export default userRoutes;
