export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  }
}

export function getRole() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("role");
}
