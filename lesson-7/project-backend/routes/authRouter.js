import { Router } from "express";

import authControllers from "../controllers/authControllers.js";

import validateBody from "../decorators/validateBody.js";

import {userSignupSchema, userSigninSchema} from "../schemas/userSchemas.js";

const signupMiddleware = validateBody(userSignupSchema);
const signinMiddleware = validateBody(userSigninSchema);

const authRouter = Router();

authRouter.post("/signup", signupMiddleware, authControllers.signup);

authRouter.post("/signin", signinMiddleware, authControllers.signin);

export default authRouter;