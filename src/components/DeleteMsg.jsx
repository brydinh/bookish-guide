import React from "react";


function DeleteMsg(props) {
  const {key1, key2, minfloat, maxfloat, value} = props.config;

  return (
   (
      <div className = "container modal">
        <h2>Delete Config</h2>
        <p>Are you sure you want to delete {key1}: {key2} ({minfloat} - {maxfloat}) {value}?</p>
        <button onClick ={props.onDelete}>Delete Config</button>
        <button onClick={props.onHide}>Cancel</button>
      </div>
     )
  )
}

export default DeleteMsg;
