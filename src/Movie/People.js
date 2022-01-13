import { Fragment } from "react";
import styles from "./Movie.module.css";

const People = (props) => {
  return (
    <Fragment>
      <li className={styles.name}> Name: {props.name} </li>
      <li className={styles.mid}> Height: {props.height} </li>
      <li className={styles.mid}> Hair Color: {props.hair_color} </li>
      <li className={styles.mid}> Skin Color: {props.skin_color} </li>
    </Fragment>
  );
};

export default People;
