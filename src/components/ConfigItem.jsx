import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState, forwardRef } from "react";

import EditForm from "./EditForm";

function ConfigItem(props) {
  library.add(faTrash);
  library.add(faEdit);

  const {config_id, key1, key2, minfloat, maxfloat, value} = props.config;

  const [showEdit, setState] = useState(0);

  return (
    <div className="listItem" key={config_id}>
      <p>
        {key1}: {key2} ({minfloat} - {maxfloat}) {value}
        <span>
          <FontAwesomeIcon className="editIcon" icon="edit" onClick={() => setState(config_id)}/>
        </span>
        <span>
          <FontAwesomeIcon className="trashIcon" icon="trash" onClick={() => props.onDelete(config_id)}/>
        </span>
     </p>
     <EditForm
      show = {showEdit === config_id}
      onHide = {() => setState(0)}
      config = {props.config}
      onSubmit = {(config) => props.onEdit(config, config_id)}
     />
  </div>
  )
}

export default ConfigItem;
