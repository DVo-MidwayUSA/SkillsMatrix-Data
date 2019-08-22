import React, { useState, useEffect } from "react"

const TableRow = props => {
  const [skill, setSkill] = useState(props.skill)

  const onChange = event => {
    const updatedSkill = { ...skill, [event.target.name]: event.target.value }
    setSkill(updatedSkill)
    props.onSkillChange(skill, updatedSkill)
  }

  const remove = event => {
    event.preventDefault()
    props.onRemove(skill)
  }

  return (
    <tr>
      <td>
        <input type="text" name="id" value={skill.id} onChange={onChange} />
      </td>
      <td>
        <input
          type="text"
          name="description"
          value={skill.description}
          onChange={onChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="group"
          value={skill.group}
          onChange={onChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="weight"
          value={skill.weight}
          onChange={onChange}
        />
      </td>
      <td>
        <button title="Delete Skill" onClick={remove}>
          x
        </button>
      </td>
    </tr>
  )
}

export default TableRow
