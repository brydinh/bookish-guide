import React, { useState, useEffect } from "react";

function Configurations() {
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
        <li key = {config.config_id}>
          {config.key1}: {config.key2} ({config.minfloat} - {config.maxfloat}) {config.value}
        </li>)}
    </ul>
    </div>
  )
}

export default Configurations;
