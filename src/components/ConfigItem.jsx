import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState, forwardRef } from "react";
import Modal from "react-modal";

import EditForm from "./EditForm";

Modal.setAppElement("#root");

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
     <Modal
      isOpen={showEdit === config_id}
      onRequestClose = {() => setState(0)}
      className="modal"
      >
      <EditForm
        onHide = {() => setState(0)}
        config = {props.config}
        onSubmit = {function(config) {
           setState(0);
           props.onEdit(config, config_id);
         }}
        />
    </Modal>
  </div>
  )
}

export default ConfigItem;
