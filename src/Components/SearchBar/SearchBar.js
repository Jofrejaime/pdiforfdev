import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({
  search,
  setValue,
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  ...props
}) {
  return (
    <div className={styles.content}>
      <form>
        <input
          className={styles.input}
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          {...props}
        />
      </form>
    </div>
  );
}

export default SearchBar;
