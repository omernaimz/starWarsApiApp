import { Fragment } from "react";
import styles from "./Movie.module.css";

const Planets = (props) => {
  return (
    <Fragment>
      <li className={styles.name}> Terrain: {props.terrain} </li>
      <li className={styles.mid}> Population: {props.population} </li>
    </Fragment>
  );
};

export default Planets;
