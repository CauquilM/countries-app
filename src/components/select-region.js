import { useState } from "react";
import Select from "react-select";

function SelectRegion(props) {
  const [selectedValue, setSelectedValue] = useState();
  const options = [
    { value: "World", label: "World" },
    { value: "Asia", label: "Asia" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const handleChange = (e) => {
    setSelectedValue(e.value);
    props.onMoveData(e.value);
  };

  return (
    <div className="col s12 m4 offset-m3 ">
      <Select
        placeholder="Filter by region"
        value={options.find((obj) => obj.value === selectedValue)}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}

export default SelectRegion;
