import { Router } from "express";
import multer from 'multer';

import uploadConfig from "../config/upload.config.js";

import userController from "./controllers/user.controller.js";

// https://expressjs.com/en/resources/middleware/multer.html
const upload = multer(uploadConfig);

const router = Router();

// User management
router.get('/users', userController.searchUsers);
router.post('/users', upload.single('avatar'), userController.addUser);
router.get('/users/:id', userController.getDetailUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Product management

// Order management

// Contact management

export default router;
