import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import ErrorMessage from "./ErrorMessage"

function ConfigForm(props) {
  // TODO: Populate comboboxes via config file
  const options1 = ["Accord", "Civic", "HR-V", "Odyssey", "Insight", "Pilot", "Passport"]
  const options2 = ["V4", "V6", "V8"];
  const options3 = ["Model1", "Model2", "Model3", "Model4", "Model1-6", "Model2-6"];

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm();

  // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  //
  // const validateRange = async(value) => {
  //   await sleep(1000);
  //   // do query to database for ranges
  // }

  // TODO Async function for range check on front end?

  // TODO Have POST reqs work w the website, updates the list as well
  function onSubmit(config) {
    axios.post("/configs", config)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
      <form className="App">
        <h4>Add New Config</h4>

        <label>Key 1:</label>
        <select name="key1" ref={register({ required: true })}>
          <option value="">Select...</option>
        {options1.map((option) => {
              return (
                <option value={option}>{option}</option>
              );
        })}
        </select>
        <ErrorMessage error={errors.key1} />
        <br />

        <label>Key 2:</label>
        <select name="key2"  ref={register({ required: true })}>
          <option value="">Select...</option>
        {options2.map((option) => {
              return (
                <option value={option}>{option}</option>
              );
        })}
        </select>
        <ErrorMessage error={errors.key2} />
        <br />


        <label>Key 3:</label>
        <input
          name="minFloat"
          placeholder="Center"
          ref={register({ required: true, pattern: /^(\d*\.)?\d+$/i })}
        />
        <ErrorMessage error={errors.minFloat} />


        <input
          name="maxFloat"
          placeholder="Span"
          ref={register({ required: true, pattern: /^(\d*\.)?\d+$/i })}
        />
        <ErrorMessage error={errors.maxFloat} />


        <label>Value:</label>
        <select name="value" ref={register({ required: true })}>
          <option value= "">Select...</option>
        {options3.map((option) => {
              return (
                <option value={option}>{option}</option>
              );
        })}
        </select>
        <ErrorMessage error={errors.value} />

        <button disabled={isSubmitting} className="subButton" onClick={handleSubmit(onSubmit)}>Add Config</button>
       </form>
  )
}

export default ConfigForm;
