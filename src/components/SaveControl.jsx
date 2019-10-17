import React from "react"

const SaveControl = () => {
  return (
    <div className="box">
      <form>
        <div className="buttons">
          <button className="button is-primary">
            <span className="icon">
              <i className="fas fa-database"></i>
            </span>
            <span>Commit changes</span>
          </button>
          <button className="button">Discard changes</button>
        </div>
      </form>
    </div>
  )
}

export default SaveControl
