import React from "react"

const SaveControl = props => {
  return (
    <div className="box">
      <div className="buttons">
        <button className="button is-primary">
          <span className="icon">
            <i className="fas fa-database"></i>
          </span>
          <span>Commit changes</span>
        </button>
        <button className="button" onClick={props.reset}>
          Discard changes
        </button>
      </div>
    </div>
  )
}

export default SaveControl
