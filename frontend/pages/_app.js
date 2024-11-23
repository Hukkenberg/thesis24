
import "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const role = "patient"; // Replace with dynamic role detection logic

  return (
    <>
      <NavBar role={role} />
      <main>
        <Component {...pageProps} role={role} />
      </main>
    </>
  );
}

export default MyApp;
