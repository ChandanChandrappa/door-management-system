import React from "react";

const Door = (props) => {
  const cardBgColor = props.IsOpen ? "border-success" : "border-danger";
  return (
    <div className="col">
      <div className="col-sm-3">
        <div
          className={"card text-black " + cardBgColor + " border-3 mb-6 m-2"}
        >
          <div className="card-body">
            <div className="input-group m-2">
              <input
                type="text"
                class="form-control"
                id="inputFirstName"
                onChange={(e) => props.onChange(e.currentTarget.value, props)}
              />
              <i class="fa fa-edit m-2"></i>
            </div>
            <h5>{props.Name}</h5>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={() => props.OnHandleLock(props)}
                checked={props.IsLocked}
                disabled={props.IsOpen}
              />
              <label className="form-check-label">
                {props.IsLocked ? "Locked" : "Un-Locked"}
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={() => props.HandleOpenClose(props)}
                checked={props.IsOpen}
              />
              <label className="form-check-label">
                {props.IsOpen ? "Opened" : "Closed"}
              </label>
            </div>
            <button
              className="btn btn-danger m-2"
              onClick={() => props.HandleRemove(props.Id)}
            >
              Remove Door
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Door;
