import React, { useState } from "react";

function CreateConfig(props) {
  const[config, setConfig] = useState({
    key1: "",
    key2: "",
    value: "",
    minFloat: "",
    maxFloat: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setConfig(prevConfig => {
      return {
        ...prevConfig,
        [name] : value
      };
    });
  }

  function submitConfig(event) {
    //TODO: Error check for blank entries
    props.onAdd(config);
    setConfig({
      key1: "",
      key2: "",
      value: "",
      minFloat: "",
      maxFloat: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <h4>Add New Config</h4>
      <form>

        <label>Key 1:</label>
        <select>
          <option>Accord</option>
        </select>
        <br />

        <label>Key 2:</label>
        <select>
          <option>V4</option>
        </select>
        <br />

        <label>Key 3:</label>
        <input
          placeholder="Center"
        />
        <input
          placeholder="Span"
        />
        <br />
        <label>Value:</label>
        <select>
          <option>Model1</option>
        </select>
        <br />
      </form>
    </div>
  )

  /*
  <form class="config" action="/" method="post">
  <label for="key1">Key 1:</label>
  <select id="key1" name="key1">
    <% foundKey1s.forEach(function(key1){ %>
    <option value=<%=key1 %>><%= key1 %></option>
    <% }); %>
  </select>
  <br />
  <label for="key2">Key 2:</label>
  <select id="key2" name="key2">
    <% foundKey2s.forEach(function(key2){ %>
    <option value=<%=key2 %>><%= key2 %></option>
    <% }); %>
  </select>
  <br />
  <label for="value">Value:</label>
  <select id="value" name="value">
    <% foundValues.forEach(function(value){ %>
    <option value=<%=value %>><%= value %></option>
    <% }); %>
  </select>
  <br />
  <label for="key3">Key 3:</label>
  <input type="text" id="key3" placeholder="Center" name="center">
  <input type="text" id="key3" placeholder="Span" name="span">
  <br><br>
  <button type="submit">Add Config</button>
</form>
  */
}

export default CreateConfig;
