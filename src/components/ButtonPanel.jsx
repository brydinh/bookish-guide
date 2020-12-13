import React from "react";

function ButtonPanel() {
  return (
      <div className="btn-group-vertical btn-panel">
          <button
              type="button"
              className="btn btn-primary btn-lg btn-block">
              <i class="fas fa-faucet fa-lg"> Start</i>
          </button>
          <button
              type="button"
              className="btn btn-primary btn-lg btn-block">
              <i class="fas fa-book-reader fa-lg"> History</i>
          </button>
          <button
              type="button"
              className="btn btn-primary btn-lg btn-block">
              <i class="fas fa-cogs fa-lg"> Settings</i>
          </button>
      </div>
  )
}

export default ButtonPanel;
