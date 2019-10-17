import React, { useState } from "react"

import EmphasisSelectControl from "./EmphasisSelectControl.jsx"

const EditSkill = props => {
  const [skill, setSkill] = useState({ ...props.skill })
  const handleChange = event => {
    setSkill({ ...skill, [event.target.name]: event.target.value })
  }
  const handleKeyPress = event => {
    if (event.key === "Enter") update()
  }
  const update = () => {
    props.edit(skill)
    props.makeReadonly()
  }
  return (
    <tr className="is-selected">
      <td>
        <button className="button is-text" onClick={update}>
          <span className="icon is-small">
            <i className="fas fa-save"></i>
          </span>
        </button>
      </td>
      <td>
        <input
          className="input"
          type="text"
          name="id"
          value={skill.id}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </td>
      <td>
        <input
          className="input"
          type="text"
          name="description"
          value={skill.description}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </td>
      <td>
        <EmphasisSelectControl
          group={skill.group}
          handleChange={handleChange}
        />
      </td>
      <td>
        <input
          className="input"
          type="number"
          name="weight"
          value={skill.weight}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </td>
      <td>
        <button className="button is-text" onClick={props.makeReadonly}>
          <span className="icon is-small">
            <i className="fas fa-ban"></i>
          </span>
        </button>
      </td>
    </tr>
  )
}

export default EditSkill
