const Student = require("../modules/userModule");

// create a new Student
const createNewUser = (req, res) => {
  const newUser = req.body;
  console.log(newUser); // for logging purpose
  Student.create(newUser)
    .then((student) =>
      res.send({ message: "User created successfully", data: student })
    )
    .catch((err) => res.status(400).json(err));
};

// get all students
const getAllUsers = (req, res) => {
  Student.find()
    .then((student) => {
      console.log("from Routers");
      res.send({
        message: "All users fetched successfully",
        total: student.length,
        data: student,
      });
    })
    .catch((err) => res.status(400).json(err));
};
// get student by userId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  console.log(userId); // for logging purpose
  Student.findById(userId)
    .then((student) => {
      if (!student) {
        return res.status(404).send({ message: "User not found" });
      } else {
        res.send({ message: "User fetched successfully", data: student });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getUserByCategory = (req, res) => {
  const { department } = req.params;
  console.log(department); // for logging purpose
  Student.find({ department: "Computer Science" })
    .then((student) => {
      if (!student) {
        return res.status(404).send({ message: "User not found" });
      } else {
        res.send({
          message: "User fetched successfully",
          total: student.length,
          data: student,
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// update student by userId
const updateExistingUser = (req, res) => {
  const { userId } = req.params;
  const dataToBeUpdated = req.body;

  // Find user by ID and update
  Student.findByIdAndUpdate(userId, dataToBeUpdated, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send({ message: "User updated successfully", data: updatedUser });
    })
    .catch((error) => {
      console.error("Error updating user:", error);
      res.status(500).send({ message: "Internal Server Error" });
    });
};
// Delete user
const deleteUserById = (req, res) => {
  const { userId } = req.params;

  Student.findByIdAndDelete(userId)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send({ message: "User deleted successfully", data: deletedUser });
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      res.status(500).send({ message: "Internal Server Error" });
    });
};
const getPaginatedData = (req, res) => {
  const { pageNo, size } = req.query;

  // Student.find()
  //   .skip((pageNo - 1) * size)
  //   .limit(size)
  //   .then((data) => {
  //     console.log(data);

  //     res.send({ length: data.length, records: data });
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });

  Student.paginate({}, { page: pageNo, limit: size })
    .then((data) => {
      console.log(data);

      res.send({ length: data.length, records: data });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  getUserByCategory,
  updateExistingUser,
  deleteUserById,
  getPaginatedData,
};
