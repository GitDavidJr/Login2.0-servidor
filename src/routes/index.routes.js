import { getIndex } from "../controllers/index.controller.js";

const indexRoutes = async (app, options) => {
  app.get("/", getIndex);
};

export default indexRoutes;
