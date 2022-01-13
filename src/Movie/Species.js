import { Fragment } from "react";
import styles from "./Movie.module.css";

const Species = (props) => {
  return (
    <Fragment>
      <li className={styles.name}> Name: {props.name} </li>
      <li className={styles.mid}> Height: {props.average_height} </li>
    </Fragment>
  );
};

export default Species;
