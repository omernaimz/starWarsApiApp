import { Fragment } from "react";
import styles from "./Movie.module.css";

const Films = (props) => {
  return (
    <Fragment>
      <li className={styles.name}> {props.title} </li>
      <li className={styles.mid}> {props.opening_crawl} </li>
      <li className={styles.mid}> Producer: {props.producer} </li>
      <li className={styles.mid}> Release Date: {props.release_date} </li>
    </Fragment>
  );
};

export default Films;
