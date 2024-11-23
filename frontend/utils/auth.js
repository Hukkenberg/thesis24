export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return !!typeof window !== 'undefined' && localStorage.getItem("token");
}

export function logout() {
  if (typeof window !== "undefined") {
    typeof window !== 'undefined' && localStorage.removeItem("token");
    typeof window !== 'undefined' && localStorage.removeItem("role");
    window.location.href = "/";
  }
}

export function getRole() {
  if (typeof window === "undefined") return null;
  return typeof window !== 'undefined' && localStorage.getItem("role");
}
