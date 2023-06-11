import { Router } from "express";
import { addOperacion } from "../controllers/controllers.js";
import { getOperacion } from "../controllers/controllers.js";
import { deleteOperacion } from "../controllers/controllers.js";
import { deleteOperaciones } from "../controllers/controllers.js";
const router =  Router();



router.get("/registro/transfer", getOperacion); 

router.post("/registro/transfer", addOperacion);

router.delete("/registro/transfer/:id", deleteOperacion);

router.delete("/registro/transfer", deleteOperaciones);

export default router;