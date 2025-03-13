import { postLogin } from "../controllers/login.controller.js";

const loginRoutes = async (app, options) => {
  app.post("/", postLogin);
};

export default loginRoutes;
