import { Router } from "express";

import isValidId from "../middlewares/isValidId.js";

import moviesControllers from "../controllers/moviesControllers.js";

import validateBody from "../decorators/validateBody.js";

import {movieAddSchema, movieUpdateSchema} from "../schemas/moviesSchemas.js";

const addMiddleware = validateBody(movieAddSchema);
const updateMiddleware = validateBody(movieUpdateSchema);

const moviesRouter = Router();

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", isValidId, moviesControllers.getById);

moviesRouter.post("/", addMiddleware, moviesControllers.add);

moviesRouter.put("/:id", isValidId, updateMiddleware, moviesControllers.updateById);

moviesRouter.delete("/:id", isValidId, moviesControllers.deleteById);

export default moviesRouter;