import { postRegister } from "../controller/register.controller.js";

const registerRoutes = async (app, options) => {
 app.post("/", postRegister);
};

export default registerRoutes;
