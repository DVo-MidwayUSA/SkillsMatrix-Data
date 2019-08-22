import React, { useState } from "react"

const NewSkill = props => {
  const [skill, setSkill] = useState({
    id: "",
    description: "",
    group: 1,
    weight: 1
  })

  const handleSubmit = event => {
    event.preventDefault()
    props.onAdd(skill)
    console.log(event.currentTarget)
    event.currentTarget.reset()
  }

  const onChange = event => {
    setSkill({ ...skill, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Skill
        <input
          type="text"
          name="id"
          value={skill.id}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Definition
        <input
          type="text"
          name="description"
          value={skill.description}
          onChange={onChange}
        />
      </label>
      <label>
        Group
        <input
          type="number"
          name="group"
          value={skill.group}
          onChange={onChange}
        />
      </label>
      <label>
        Weight
        <input
          type="number"
          name="weight"
          value={skill.weight}
          onChange={onChange}
        />
      </label>
      <button>Add New Skill</button>
    </form>
  )
}

export default NewSkill
