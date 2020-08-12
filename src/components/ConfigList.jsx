import React, { useState, useEffect } from "react";
import axios from "axios";

import FlipMove from "react-flip-move";

import ConfigItem from "./ConfigItem";

function ConfigList() {

  const [configurations, setConfigurations] = useState([]);

  async function fetchData() {
    const res = await fetch("/configs");
    res
      .json()
      .then(res => setConfigurations(res))
  }

  useEffect(() => {
    fetchData();
  });

// TODO fix flipmove
// TODO: Add delete confirmation dialog
  function deleteConfig(id) {
    console.log("Delete");
    axios.delete("/configs/"+parseInt(id))
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function editConfig(config, id){
    console.log("Edit");
    axios.put("/configs/"+parseInt(id), config)
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
    <div className="list">
      <h2>Configurations</h2>
        <ul>
          {configurations.map(config =>
            <ConfigItem
              key = {config.config_id}
              onEdit = {editConfig}
              onDelete = {deleteConfig}
              config = {config}
            />
          )}
        </ul>
    </div>
  )
}

export default ConfigList;
