import { useEffect, useState } from "react";
import "./App.css";
import { FloatingBtn } from "./components/add_btn/component";
import { Header } from "./components/header/component";
import { RecipesPlaceholder } from "./components/recipe/componentPlaceholder";

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(0);
  console.log(window.API);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        'ngrok-skip-browser-warning': 'true',
        "Content-Type": "application/json",
      },
    };

    fetch(window.API, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res_data) => {
        console.log(res_data);
        setData(res_data);
      })
      .catch((err) => console.error(err));
  }, [state]);
  return (
    <div className="App">
      <Header />
      <RecipesPlaceholder
        recipes={data}
        update={() => setState((s) => s + 1)}
      />
      <FloatingBtn update={() => setState((s) => s + 1)} />
    </div>
  );
}

export default App;
