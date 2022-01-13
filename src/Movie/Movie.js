import { Fragment } from "react";
import Films from "./Films";
import styles from "./Movie.module.css";
import People from "./People";
import Planets from "./Planets";
import Species from "./Species";
import StarshipsNVechicles from "./StarshipsNVechicles";

const Movies = (props) => {
  return (
    <Fragment>
      <ul className={styles.box}>
        {props.hair_color ? (
          <People
            name={props.name}
            height={props.height}
            hair_color={props.hair_color}
            skin_color={props.skin_color}
          />
        ) : null}

        {props.opening_crawl ? (
          <Films
            title={props.title}
            opening_crawl={props.opening_crawl}
            release_date={props.release_date}
            producer={props.producer}
          />
        ) : null}

        {props.population ? (
          <Planets terrain={props.terrain} population={props.population} />
        ) : null}

        {props.average_height ? (
          <Species name={props.name} average_height={props.average_height} />
        ) : null}

        {props.model ? (
          <StarshipsNVechicles model={props.model} length={props.length} />
        ) : null}
      </ul>
    </Fragment>
  );
};

export default Movies;
