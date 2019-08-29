import React, { useState, useEffect } from "react"

const initialSkill = {
  id: "",
  description: "",
  group: 1,
  weight: 1
}

const SkillForm = props => {
  const [skill, setSkill] = useState(initialSkill)

  useEffect(() => {
    setSkill({ ...props.skill })
  }, [props.skill])

  const handleSubmit = event => {
    event.preventDefault()
    props.onAdd(skill)
    setSkill(initialSkill)
  }

  const onChange = event => {
    setSkill({ ...skill, [event.target.name]: event.target.value })
  }

  const reset = event => {
    event.preventDefault()
    setSkill(initialSkill)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label className="form-label" htmlFor="id">
          Skill Name <span className="help-text">(Required)</span>
        </label>
        <input
          className="form-input"
          id="id"
          type="text"
          name="id"
          value={skill.id}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="description">
          Definition
        </label>
        <textarea
          className="form-input"
          id="description"
          name="description"
          value={skill.description}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="group">
          Group
        </label>
        <input
          className="form-input"
          id="group"
          type="number"
          name="group"
          value={skill.group}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="weight">
          Weight
        </label>
        <input
          className="form-input"
          id="weight"
          type="number"
          name="weight"
          value={skill.weight}
          onChange={onChange}
        />
      </div>
      <div className="form-actions">
        <button className="primary">Save Skill</button>
        <button className="secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  )
}

export default SkillForm
