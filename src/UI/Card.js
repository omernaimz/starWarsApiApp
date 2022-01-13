import { Fragment } from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return <ul className={styles.divo}> {props.children} </ul>;
};

export default Card;
