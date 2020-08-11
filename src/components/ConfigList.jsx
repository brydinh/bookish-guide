import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  return (
    <div className="list">
      <h2>Configurations</h2>
      <ul>
        {configurations.map(config =>
        <div className="listItem" key = {config.config_id}>
          <p>
            {config.key1}: {config.key2} ({config.minfloat} - {config.maxfloat}) {config.value}
            <span><FontAwesomeIcon className ="editIcon" icon="edit"/></span>
            <span><FontAwesomeIcon className ="trashIcon" icon="trash"/></span>
          </p>
        </div>)}
      </ul>
    </div>
  )
}

export default Configurations;
