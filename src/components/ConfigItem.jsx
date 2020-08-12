import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState, forwardRef } from "react";

import EditForm from "./EditForm";

function ConfigItem(props) {
  library.add(faTrash);
  library.add(faEdit);

  const [showEdit, setState] = useState(0);

  function getEdit(value) {
    setState(value);
  }

  function hideEdit () {
    setState(0);
  }

  return (
    <div className="listItem" key={props.config.config_id}>
      <p>
        {props.config.key1}: {props.config.key2} ({props.config.minfloat} - {props.config.maxfloat}) {props.config.value}
        <span>
          <FontAwesomeIcon className="editIcon" icon="edit" onClick={() => getEdit(props.config.config_id)}/>
        </span>
        <span>
          <FontAwesomeIcon className="trashIcon" icon="trash" onClick={() => props.onDelete(props.config.config_id)}/>
        </span>
     </p>
     <EditForm
      show = {showEdit === props.config.config_id}
      onHide={() => hideEdit()}
      config={props.config}
     />
  </div>
)
}

export default ConfigItem;
