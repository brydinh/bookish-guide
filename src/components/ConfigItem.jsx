import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState, forwardRef } from "react";
import Modal from "react-modal";

import EditForm from "./EditForm";
import DeleteMsg from "./DeleteMsg";

Modal.setAppElement("#root");

function ConfigItem(props) {
  library.add(faTrash);
  library.add(faEdit);

  const {config_id, key1, key2, minfloat, maxfloat, value} = props.config;

  const [show, setState] = useState({
    edit: 0,
    del: 0
  });

  return (
    <div className="listItem" key={config_id}>
      <p>
        {key1}: {key2} ({minfloat} - {maxfloat}) {value}
        <span>
          <FontAwesomeIcon className="editIcon" icon="edit" onClick={() => setState({edit: config_id, del: 0})}/>
        </span>
        <span>
          <FontAwesomeIcon className="trashIcon" icon="trash" onClick={() => setState({edit: 0, del: config_id})}/>
        </span>
     </p>
     <Modal
      isOpen={show.edit === config_id}
      onRequestClose = {() => setState({edit: 0, del: 0})}
      className="modal"
      >
      <EditForm
        onHide = {() => setState({edit: 0, del: 0})}
        config = {props.config}
        onSubmit = {function(config) {
           setState({edit: 0, del: 0});
           props.onEdit(config, config_id);
         }}
        />
    </Modal>
    <Modal
      isOpen={show.del === config_id}
      onRequestClose ={() => setState({edit: 0, del: 0})}
      className="modal"
      >
      <DeleteMsg
      onHide = {() => setState({edit: 0, del: 0})}
      config = {props.config}
      onDelete = {function() {
        console.log(config_id);
        setState({edit: 0, del: 0});
        props.onDelete(config_id);
       }}
      />
    </Modal>
  </div>
  )
}

export default ConfigItem;
