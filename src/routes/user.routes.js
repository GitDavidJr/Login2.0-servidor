import { postUser } from "../controllers/user.controller.js";

const userRoutes = async (app, options) => {
  app.post("/", postUser);
};

export default userRoutes;
