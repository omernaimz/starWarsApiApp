import { Fragment } from "react";
import styles from "./Movie.module.css";

const StarshipsNVechicles = (props) => {
  return (
    <Fragment>
      <li className={styles.name}> Model: {props.model} </li>
      <li className={styles.mid}> Length: {props.length} </li>
    </Fragment>
  );
};

export default StarshipsNVechicles;
