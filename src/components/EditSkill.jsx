import React, { useState } from "react"

const EditSkill = props => {
  const [skill, setSkill] = useState({ ...props.skill })
  const handleChange = event => {
    setSkill({ ...skill, [event.target.name]: event.target.value })
  }
  const save = () => {
    props.set(skill)
    props.makeReadonly()
  }
  return (
    <tr className="is-selected">
      <td>
        <button className="button is-text" onClick={save}>
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
        />
      </td>
      <td>
        <input
          className="input"
          type="text"
          name="description"
          value={skill.description}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="input"
          type="text"
          name="group"
          value={skill.group}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="input"
          type="number"
          name="weight"
          value={skill.weight}
          onChange={handleChange}
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
