import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styles from "./Select.module.css";
const animatedComponents = makeAnimated();
function MultiselectLinguagens({
  label,
  options,
  value,
  setValue,
  placeholder,
  buscarLinguagens,
  ...props
}) {
  const [select, setSelect] = React.useState([]);
React.useEffect(()=>{
  buscarLinguagens(select)
},[select])
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <Select
        isMulti
        options={options}
        components={animatedComponents}
        isClearable={true}
        isLoading={false}
        isSearchable={true}
        isRtl={false}
        isDisabled={false}
        placeholder={placeholder}
        onChange={(item) => setSelect(item)}
      />
    </div>
  );
}

export default MultiselectLinguagens;
