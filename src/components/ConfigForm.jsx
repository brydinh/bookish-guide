import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function ConfigForm(props) {
  const[config, setConfig] = useState({
    key1: "",
    key2: "",
    value: "",
    minFloat: "",
    maxFloat: ""
  });

  const {register, handleSubmit, watch, errors} = useForm();

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
  const options1 = ["Accord", "Civic", "HR-V", "Odyssey", "Insight", "Pilot", "Passport"];
  const options2 = ["V4", "V6", "V8"];
  const options3 = ["Model1", "Model2", "Model3", "Model4", "Model1-6", "Model2-6"];

  function submitConfig(event) {
    // TODO: Add Validations for form

    console.log(config);
    // axios.post("/configs", config)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // props.onAdd(config);
    // event.preventDefault();
  }

  return (
    <div>
      <h4>Add New Config</h4>
      <form>

        <label>Key 1:</label>
        <select name="key1">
          <option>Select...</option>
        {options1.map((option) => {
              return (
                <option value={option}>{option}</option>
              );
        })}
        </select>

        <br />
        <label>Key 2:</label>
        <select name="key2">
          <option>Select...</option>
        {options2.map((option) => {
              return (
                <option value={option}>{option}</option>
              );
        })}
        </select>

        <br />

        <label>Key 3:</label>
        <input
          name="minFloat"
          onChange={handleChange}
          value={config.minFloat}
          placeholder="Center"
          ref={register({ required: true})}
        />

        <input
          name="maxFloat"
          onChange={handleChange}
          value={config.maxFloat}
          placeholder="Span"
          ref={register({ required: true})}
        />
        <br />

        <label>Value:</label>
        <select name="value">
          <option>Select...</option>
        {options3.map((option) => {
              return (
                <option value={option}>{option}</option>
              );
        })}
        </select>
        <br />

        <button onClick={handleSubmit(submitConfig)}>Add</button>
      </form>
    </div>
  )
}

export default ConfigForm;
