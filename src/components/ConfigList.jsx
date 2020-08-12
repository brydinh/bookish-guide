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
// TODO: Add confirmation dialog
  function deleteConfig(id) {
    console.log("in delete");
    // axios.delete("/configs/"+parseInt(id))
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  function editConfig(config){
    console.log(config);
  }

  return (
    <div className="list">
      <h2>Configurations</h2>
        <ul>
        <FlipMove>
          {configurations.map(config =>
            <ConfigItem
              key = {config.config_id}
              onEdit = {editConfig}
              onDelete = {deleteConfig}
              config = {config}
            />
          )}
          </FlipMove>
        </ul>
    </div>
  )
}

export default ConfigList;
