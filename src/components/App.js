import dotenv from "dotenv";
dotenv.config();

function App() {
  const API = process.env.REACT_APP_API_BASE_URL;

  return (
    <div>
      <h1>Essa é a URL da minha API ${API}</h1>
    </div>
  );
}

export default App;
