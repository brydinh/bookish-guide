import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

function ConfigForm(props) {
  const[config, setConfig] = useState({
    key1: "",
    key2: "",
    value: "",
    minFloat: "",
    maxFloat: ""
  });

  // TODO Have POST reqs work w the website, updates the list as well
  function handleChange(event) {
   const {name, value} = event.target;
    setConfig(prevConfig => {
      return {
        ...prevConfig,
        [name] : value
      };
    });
  }

// TODO: refactor code to use only 1 function
  function handleSelectChange(event) {
    console.log(event);
    setConfig(prevConfig =>{
      return {
        ...prevConfig,
        key1: event.value
      }
    });
  }

  function handleSelectChange2(event) {
    console.log(event);
    setConfig(prevConfig =>{
      return {
        ...prevConfig,
        key2: event.value
      }
    });
  }

  function handleSelectChange3(event) {
    console.log(event);
    setConfig(prevConfig =>{
      return {
        ...prevConfig,
        value: event.value
      }
    });
  }


  // TODO: Populate comboboxes via config file
  const options1 = [
    {value: 'Accord', label: 'Accord' },
    {value: 'Civic', label: 'Civic' }
  ];

  const options2 = [
  { value: 'V4', label: 'V4' },
  { value: 'V6', label: 'V6' }
  ];

  const options3 = [
  { value: 'Model1', label: 'Model1' },
  { value: 'Model2', label: 'Model2' }
  ];

  function submitConfig(event) {
    // TODO: Validate form

    axios.post("/configs", config)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });


    // props.onAdd(config);
    // event.preventDefault();
  }

  return (
    <div>
      <h4>Add New Config</h4>
      <form>

        <label>Key 1:</label>
        <Select name="key1" onChange={handleSelectChange} options={options1}/>
        <br />

        <label>Key 2:</label>
        <Select name="key2" onChange={handleSelectChange2} options={options2}/>
        <br />

        <label>Key 3:</label>
        <input
          name="minFloat"
          onChange={handleChange}
          value={config.minFloat}
          placeholder="Center"
        />

        <input
          name="maxFloat"
          onChange={handleChange}
          value={config.maxFloat}
          placeholder="Span"
        />
        <br />

        <label>Value:</label>
        <Select name="value" onChange={handleSelectChange3} options={options3}/>
        <br />

        <button onClick={submitConfig}>Add</button>
      </form>
    </div>
  )
}

export default ConfigForm;
