import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Maria",
          email: "maria@gmail.com",
          bio: "Sou um advogado",
          role: "admin",
        }}
      />
    </>
  );
}

export default App;
