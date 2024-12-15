
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const role = typeof window !== "undefined" ? localStorage.getItem("role") : null;

    switch (role) {
      case "doctor":
        router.push("/dashboard/doctor");
        break;
      case "patient":
        router.push("/dashboard/patient");
        break;
      case "admin":
        router.push("/dashboard/admin");
        break;
      case "lab":
        router.push("/dashboard/lab");
        break;
      default:
        router.push("/auth/login");
    }
  }, [router]);

  return <div>Loading...</div>; // Temporary placeholder while redirecting
}
