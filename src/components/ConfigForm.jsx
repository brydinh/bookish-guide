import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import ErrorMessage from "./ErrorMessage";

function ConfigForm() {
  const key1s = window.Keys.key1s;
  const key2s =  window.Keys.key2s;
  const values = window.Keys.values;

  const {register, handleSubmit, errors, formState: { isSubmitting }} = useForm();

  // TODO Calculate the min/max float using formula
  function onSubmit(config) {
    axios.post("/configs", config)
      .then(res => {
        if(res.data === "Range Conflict"){
          alert("Range Conflict");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
      <form className= "container">
        <h2>Add New Config</h2>

        <div className= "key1">
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
        </div>

        <div className="key2">
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
        </div>

        <div className="key3">
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
        </div>

        <div className="value">
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
        </div>


        <button disabled={isSubmitting} className="subButton" onClick={handleSubmit(onSubmit)}>Add Config</button>
       </form>
  )
}

export default ConfigForm;
