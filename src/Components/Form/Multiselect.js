import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styles from "./Select.module.css";
const animatedComponents = makeAnimated();
function Multiselect({
  label,
  options,
  value,
  setValue,
  placeholder,
  buscarAreas,
  ...props
}) {
  const [select, setSlect] = React.useState([]);
React.useEffect(()=>{
  buscarAreas(select)
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
        onChange={(item) => setSlect(item)}
      />
    </div>
  );
}

export default Multiselect;
