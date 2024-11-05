import { getCredentials } from "../components/Loginpage.jsx";

function HomePage() {
  return (
    <>
      <h1>I am home page</h1>
      <p>{getCredentials}</p>
    </>
  );
}

export default HomePage;
