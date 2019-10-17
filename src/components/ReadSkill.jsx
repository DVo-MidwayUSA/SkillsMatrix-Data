import React, { useState } from "react"

const ReadSkill = props => {
  const [skill] = useState({ ...props.skill })
  const remove = () => {
    props.remove(skill)
  }

  return (
    <tr onDoubleClick={props.edit}>
      <td>
        <button className="button is-text" onClick={props.edit}>
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
      </td>
      <td>{skill.id}</td>
      <td>{skill.description}</td>
      <td>{skill.group}</td>
      <td>{skill.weight}</td>
      <td>
        <button className="button is-text" onClick={remove}>
          <span className="icon is-small">
            <i className="far fa-trash-alt"></i>
          </span>
        </button>
      </td>
    </tr>
  )
}

export default ReadSkill
