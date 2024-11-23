exports.getDashboardData = async (req, res) => {
  try {
    res.status(200).json({ message: "Admin dashboard data" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin dashboard data", error });
  }
};
