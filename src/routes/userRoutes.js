const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createNewUser,
  getUserByCategory,
  updateExistingUser,
  deleteUserById,
  getPaginatedData,
} = require("../controllers/userController");

router.post("/new_user", createNewUser);
router.get("/all", getAllUsers);
router.get("/:userId", getUserById);
router.get("/filter/all", getUserByCategory);
router.patch("/:userId", updateExistingUser);
router.delete("/:userId", deleteUserById);
router.get('/filter/page',getPaginatedData)

module.exports = router;
