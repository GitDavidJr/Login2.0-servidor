import { postUser } from "../controllers/user.controller.js";

const UserRoutes = async (app, options) => {
  app.post("/", postUser);
};

export default UserRoutes;
