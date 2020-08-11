import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import ErrorMessage from "./ErrorMessage";

function ConfigForm() {
  const key1s = window.Keys.key1s;
  const key2s =  window.Keys.key2s;
  const values = window.Keys.values;

  const {register, handleSubmit, errors, formState: { isSubmitting }} = useForm();

  // TODO Async function for range check on front end?
  // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  //
  // const validateRange = async(value) => {
  //   await sleep(1000);
  //   // do query to database for ranges
  // }

  // TODO Calculate the min/max float using formula

  // TODO update list componenet as well
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
        {key1s.map((option) => {
              return (
                <option key={option} value={option}>{option}</option>
              );
        })}
        </select>
        <ErrorMessage error={errors.key1} />
        <br />

        <label>Key 2:</label>
        <select name="key2"  ref={register({ required: true })}>
          <option value="">Select...</option>
        {key2s.map((option) => {
              return (
                <option key={option} value={option}>{option}</option>
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
        {values.map((option) => {
              return (
                <option key={option} value={option}>{option}</option>
              );
        })}
        </select>
        <ErrorMessage error={errors.value} />

        <button disabled={isSubmitting} className="subButton" onClick={handleSubmit(onSubmit)}>Add Config</button>
       </form>
  )
}

export default ConfigForm;
