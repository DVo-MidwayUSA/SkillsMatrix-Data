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
    <tr>
      <td>
        <button onClick={save}>Save</button>
        <button onClick={props.makeReadonly}>Cancel</button>
      </td>
      <td>
        <input type="text" name="id" value={skill.id} onChange={handleChange} />
      </td>
      <td>
        <input
          type="text"
          name="description"
          value={skill.description}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="group"
          value={skill.group}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="weight"
          value={skill.weight}
          onChange={handleChange}
        />
      </td>
    </tr>
  )
}

export default EditSkill
