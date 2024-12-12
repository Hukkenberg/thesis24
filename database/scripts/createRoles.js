const { User } = require('../models'); // Adjust to your project structure

const createRoles = async () => {
  const roles = ['admin', 'doctor', 'lab', 'patient'];
  try {
    for (const role of roles) {
      for (let i = 1; i <= 4; i++) {
        await User.create({
          name: `${role} User ${i}`,
          email: `${role}${i}@example.com`,
          password: 'hashed_password', // Replace with a hashed password
          role,
        });
      }
    }
    console.log('Roles created successfully');
  } catch (error) {
    console.error('Error creating roles:', error);
  }
};

createRoles();
