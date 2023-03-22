import React from "react";
import styles from "./Select.module.css";
const Select = ({ label, options, value, setValue, placeholder, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <select
        className={styles.select}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          {placeholder} {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
