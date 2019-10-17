import React, { useState } from "react"

import FormButtonControl from "./FormButtonControl.jsx"

const NewSkill = props => {
  const initialSkill = {
    id: "",
    description: "",
    group: "",
    weight: ""
  }
  const [skill, setSkill] = useState({ ...initialSkill })
  const handleChange = event => {
    setSkill({ ...skill, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
  }

  const reset = event => {
    event.preventDefault()
    setSkill({ ...initialSkill })
  }
  return (
    <div className="form-container column is-one-third">
      <div className="box">
        <h2 className="title is-medium">Add a new skill</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Skill name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="id"
                value={skill.id}
                onChange={handleChange}
                placeholder="e.g. JavaScript Development"
                required
              />
            </div>
            <p className="help">
              Commonly used name of the represented technical skill, language,
              or technique
            </p>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="description"
                onChange={handleChange}
                value={skill.description}></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Area of Emphasis</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="group"
                value={skill.group}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Weight</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="weight"
                value={skill.weight}
                onChange={handleChange}
              />
            </div>
          </div>
          <FormButtonControl skill={skill.id} reset={reset} />
        </form>
      </div>
    </div>
  )
}

export default NewSkill
