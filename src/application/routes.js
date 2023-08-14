import { Router } from "express";
import multer from 'multer';

import authMiddleware from "./middlewares/auth.middleware.js";

import uploadConfig from "../config/upload.config.js";

import authController from "./controllers/auth.controller.js";
import userController from "./controllers/user.controller.js";

// https://expressjs.com/en/resources/middleware/multer.html
const upload = multer(uploadConfig);

const router = Router();

router.use(authMiddleware);

// Authentication
router.post('/login', authController.login);
router.get('/auth', authController.getAuth); // Lấy thông tin người dùng đang đăng nhập
router.post('/logout', authController.logout);
router.post('/register', authController.register);

// User management
router.get('/users', userController.searchUsers);
router.post('/users', upload.single('avatar'), userController.addUser);
router.get('/users/:id', userController.getDetailUser);
router.put('/users/:id', upload.single('avatar'), userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Product management

// Order management

// Contact management

export default router;
