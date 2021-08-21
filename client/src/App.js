import "./App.css";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import ListCreate from "./Components/ListCreate";
import { GET_LIST } from "./Graphql/Query";
import Lists from "./Components/Lists";

function App() {
  const [title, setTitle] = useState("");

  const listInfo = useQuery(GET_LIST, {
    variables: { title },
  });

  return (
    <div className="App">
      <ListCreate listInfo={listInfo} title={title} setTitle={setTitle} />

      <Lists listInfo={listInfo} title={title} />
    </div>
  );
}

export default App;
