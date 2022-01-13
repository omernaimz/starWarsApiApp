import { Fragment } from "react/cjs/react.production.min";
import Movies from "./Movie";
import styles from "./PlayersList.css";

const PlayersList = (props) => {
  return (
    <Fragment>
      {props.onAddPlayers.map((player) => (
        <Movies
          key={Math.random().toString()}
          name={player.name}
          height={player.height}
          mass={player.mass}
          hair_color={player.hair_color}
          skin_color={player.skin_color}
          //   this is for films
          title={player.title}
          opening_crawl={player.opening_crawl}
          direcror={player.direcror}
          release_date={player.release_date}
          producer={player.producer}
          // this is for planets
          terrain={player.terrain}
          population={player.population}
          //this if species
          average_height={player.average_height}
          //this if starships and veichels
          model={player.model}
          length={player.length}
        />

        
      ))}
    </Fragment>
  );
};

export default PlayersList;
