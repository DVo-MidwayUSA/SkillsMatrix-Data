import React, { useState } from "react"

const TableHead = () => {
  const [skill, setSkill] = useState({
    id: "",
    description: "",
    group: "",
    weight: ""
  })

  const onChange = event => {
    setSkill({ ...skill, [event.target.name]: event.target.value })
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
          type="text"
          name="group"
          value={skill.group}
          onChange={onChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="weight"
          value={skill.weight}
          onChange={onChange}
        />
      </td>
      <td>
        {skill.id}
        {skill.description}
        {skill.group}
        {skill.weight}
      </td>
    </tr>
  )
}

export default TableHead
