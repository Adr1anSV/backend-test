"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.get('/', user_1.UserController.getAllUsers);
exports.userRoutes.post('/', user_1.UserController.createUser);
