import React from "react";
import { useForm } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";

function EditForm(props) {
  const key1s = window.Keys.key1s;
  const key2s =  window.Keys.key2s;
  const values = window.Keys.values;

  const {config_id, key1, key2, minfloat, maxfloat, value} = props.config;

  const {register, handleSubmit, errors, formState: { isSubmitting }} = useForm();

  // TODO Refactor to only use one component instead of two
  // TODO Calculate center and span using min/max float
  function onSubmit(config) {
    props.onSubmit(config);
  }

  return (
   (
      <form className= "container modal">
        <h2>Edit Config</h2>

        <div className= "key1">
          <label>Key 1:</label>
          <select defaultValue={key1} name="key1" ref={register({ required: true })}>
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
        <select defaultValue={key2} name="key2"  ref={register({ required: true })}>
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
          defaultValue={minfloat}
          placeholder="Center"
          ref={register({ required: true, pattern: /^(\d*\.)?\d+$/i })}
        />
        <ErrorMessage error={errors.minFloat} />


        <input
          name="maxFloat"
          defaultValue={maxfloat}
          placeholder="Span"
          ref={register({ required: true, pattern: /^(\d*\.)?\d+$/i })}
        />
        <ErrorMessage error={errors.maxFloat} />
        </div>

        <div className="value">
        <label>Value:</label>
        <select defaultValue={value} name="value" ref={register({ required: true })}>
          <option value= "">Select...</option>
        {values.map((option) => {
              return (
                <option key={option} value={option}>{option}</option>
              );
        })}
        </select>
        <ErrorMessage error={errors.value} />
        </div>

        <button disabled={isSubmitting} className="subButton" onClick={handleSubmit(onSubmit)}>Edit Config</button>
        <button onClick={props.onHide}>Close Form</button>
       </form>
     )
  )
}

export default EditForm;
