import React from 'react';
import styles from './Select.module.css'
const Select = ({ label, options, value, setValue, ...props }) => {
  return (
  <div className={styles.wrapper}>
  <label>{label}</label>
    <select className={styles.select}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione o seu {label}
      </option>
      {options.map((option) => (
        <option key={option.ordem} value={option.nome}>
          {option.nome}
        </option>
      ))}
    </select> 
    </div>
  );
};

export default Select;
