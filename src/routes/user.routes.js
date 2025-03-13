import {postUser} from "../controllers/user.controller.js";

const loginRoutes = async (app, options) => {
  app.post("/", postUser);
};

export default loginRoutes;
