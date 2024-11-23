const bcrypt = require("bcrypt");
const { User } = require("../src/models");

async function createUser(username, email, password, role) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    console.log(`User ${username} created successfully.`);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Example: Create users
(async () => {
  await createUser("patient_one", "patient1@example.com", "password", "patient");
  await createUser("doctor_one", "doctor1@example.com", "password", "doctor");
  await createUser("lab_one", "lab1@example.com", "password", "lab");
  await createUser("admin", "admin@example.com", "Admin123!", "admin");
})();
