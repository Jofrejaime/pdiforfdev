import React from 'react'
import styles from './Input.module.css'
function TextArea({label, name, value, onChange, error, onBlur, ...props}) {
  return (
    <div className={styles.wrapper}>
     {label!=='' && <label htmlFor={name} className={styles.label}>
        {label}
      </label> } 
    <textarea 
        className={styles.input}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        rows='5'
        {...props}
    />  
     {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default TextArea