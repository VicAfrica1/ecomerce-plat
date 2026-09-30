import {
  register,
  login,
  logout,
  getAuthCookieOptions,
  updateProfile,
  updateAvatar,
} from "../services/auth.service.js";
import {
  validateRegister,
  validateLogin,
  validateUpdateProfile,
} from "../validators/auth.validator.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file upload
const uploadDir = path.join(__dirname, "..", "..", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

function setAuthCookie(res, token) {
  res.cookie("token", token, getAuthCookieOptions(token));
}

function clearAuthCookie(res) {
  res.clearCookie("token", getAuthCookieOptions());
}

export async function registerHandler(req, res, next) {
  try {
    const errors = validateRegister(req.body || {});
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    const { user, token } = await register(req.body);
    setAuthCookie(res, token);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
}

export async function loginHandler(req, res, next) {
  try {
    const errors = validateLogin(req.body || {});
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    const { user, token } = await login(req.body);
    setAuthCookie(res, token);
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}

export async function logoutHandler(req, res, next) {
  try {
    logout();
    clearAuthCookie(res);
    res.status(200).json({ ok: true });
  } catch (err) {
    next(err);
  }
}

export async function meHandler(req, res) {
  res.status(200).json({ user: req.user });
}

export async function updateProfileHandler(req, res, next) {
  try {
    const errors = validateUpdateProfile(req.body || {});
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    const user = await updateProfile(req.user.id, req.body);
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}

export const uploadAvatarHandler = [upload.single("avatar"), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }
    const avatarUrl = `/uploads/${req.file.filename}`;
    const user = await updateAvatar(req.user.id, avatarUrl);
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}];
