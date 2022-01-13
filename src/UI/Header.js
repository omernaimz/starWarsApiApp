import { useState } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  //   const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [h1ValueToShow, setH1VvalueToShow] = useState("people");
  const imgLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png";
  return (
    <div>
      <div className={styles.box}>
        <img className={styles.theLogo} src={imgLogo} />
        <h1 className={styles.header}></h1>
      </div>
      <div className={styles.secondBox}>
        <label>Pick a request</label>
        {/* <input
        placeholder="Movie"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      /> */}
        <select
          className={styles.selectElem}
          onChange={(e) => {
            setDropdownValue(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="people">people</option>
          <option value="films">films</option>
          <option value="planets">planets</option>
          <option value="species">species </option>
          <option value="starships">starships </option>
          <option value="vehicles">vehicles </option>
        </select>
        <button
          className={styles.button}
          onClick={() => {
            props.inputField(dropdownValue);
            setH1VvalueToShow(dropdownValue);
          }}
        >
          Search
        </button>
      </div>
      <h1>You see result of: {h1ValueToShow}</h1>
    </div>
  );
};

export default Header;
