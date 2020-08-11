import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FlipMove from "react-flip-move";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Configurations() {
  library.add(faTrash);
  library.add(faEdit);

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

// TODO: Add confirmation dialog
  function deleteConfig(id) {
    axios.delete("/configs/"+parseInt(id))
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function editConfig(id){
    console.log("Edit config");
    console.log(id);
  }

  return (
    <div className="list">
      <h2>Configurations</h2>
        <ul>
        <FlipMove leaveAnimation="accordionVertical">
          {configurations.map(config =>
            <div className="listItem" key = {config.config_id}>
              <p>
                {config.key1}: {config.key2} ({config.minfloat} - {config.maxfloat}) {config.value}
                <span>
                  <FontAwesomeIcon className ="editIcon" icon="edit" onClick={() => editConfig(config.config_id)}/>
                </span>
                <span>
                  <FontAwesomeIcon className ="trashIcon" icon="trash" onClick={() => deleteConfig(config.config_id)}/>
                </span>
             </p>
          </div>
        )}
        </FlipMove>

        </ul>
    </div>
  )
}

export default Configurations;
