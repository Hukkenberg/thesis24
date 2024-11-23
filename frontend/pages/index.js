import { isAuthenticated } from "../utils/auth";

export default function Home() {
  if (typeof window !== "undefined" && !isAuthenticated()) {
    window.location.href = "/login";
    return null; // Prevent rendering until redirection
  }

  return (
    <div>
      <h1>Welcome to the Healthcare Management System</h1>
      <p>This is the home page of the system.</p>
    </div>
  );
}
