import { useEffect, useState } from "react";
import "./App.css";
import { FloatingBtn } from "./components/add_btn/component";
import { Header } from "./components/header/component";
import { RecipesPlaceholder } from "./components/recipe/componentPlaceholder";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:8080/v1/recipes", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res_data) => {console.log(res_data); setData(res_data)})
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <Header />
      <RecipesPlaceholder recipes={data} />
      <FloatingBtn />
    </div>
  );
}

export default App;
