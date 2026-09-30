import { Router } from "express";
import {
  registerHandler,
  loginHandler,
  logoutHandler,
  meHandler,
  updateProfileHandler,
  uploadAvatarHandler,
} from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);
router.post("/logout", logoutHandler);
router.get("/me", requireAuth, meHandler);
router.put("/me", requireAuth, updateProfileHandler);
router.post("/avatar", requireAuth, uploadAvatarHandler);

export default router;
