import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>welcome ! </h1>
      <button onClick={() => navigate("/login")}>visiter login</button>
    </div>
  );
}

export default Home;
