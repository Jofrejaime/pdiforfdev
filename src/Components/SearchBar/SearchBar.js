import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.content}>
      <form>
        <input
          className={styles.input}
          type={"text"}
          name="search"
          id="search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
