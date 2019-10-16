import React, { useState } from "react"

const ReadSkill = props => {
  const [skill] = useState({ ...props.skill })
  const remove = () => {
    props.remove(skill)
  }

  return (
    <tr>
      <td>
        <button onClick={props.edit}>Edit</button>
        <button onClick={remove}>Remove</button>
      </td>
      <td>{skill.id}</td>
      <td>{skill.description}</td>
      <td>{skill.group}</td>
      <td>{skill.weight}</td>
    </tr>
  )
}

export default ReadSkill
