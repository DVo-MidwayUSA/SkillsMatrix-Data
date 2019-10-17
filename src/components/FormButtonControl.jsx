import React from "react"

const FormButtonControl = props => {
  return props.skill ? (
    <>
      <button className="button is-primary" type="submit">
        Add {props.skill}
      </button>
      <button className="button is-text" onClick={props.reset}>
        Cancel
      </button>
    </>
  ) : (
    <button className="button is-primary" disabled>
      Add a new skill
    </button>
  )
}

export default FormButtonControl
