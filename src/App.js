import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Card from "./UI/Card";
import Header from "./UI/Header";
import PlayersList from "./Movie/PlayersList";
import styles from "./Main.module.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [action, setAction] = useState("people");

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/${action}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlayers(data.results);
      });
  }, [action]);

  const inputValueHandler = (value) => {
    console.log(value);
    setAction(value);
  };

  return (
    <Fragment>
      <Header inputField={inputValueHandler} />
      <Card>
        <PlayersList onAddPlayers={players} />
      </Card>
    </Fragment>
  );
}

export default App;
