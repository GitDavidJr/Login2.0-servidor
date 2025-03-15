import { postLogin } from "../controller/login.controller.js";

const loginRoutes = async (app, options) => {
  app.post("/", postLogin);
};

export default loginRoutes;
