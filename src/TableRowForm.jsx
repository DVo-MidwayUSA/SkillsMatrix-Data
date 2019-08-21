import React, { useState } from "react"

const TableRowForm = props => {
  const [skill, setSkill] = useState(
    props.skill || {
      id: "",
      description: "",
      group: "",
      weight: ""
    }
  )

  const onChange = event => {
    const updatedSkill = { ...skill, [event.target.name]: event.target.value }
    setSkill(updatedSkill)
    props.onSkillChange(skill, updatedSkill)
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
    </tr>
  )
}

export default TableRowForm
