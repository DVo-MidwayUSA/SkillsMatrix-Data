import React, { useState } from "react"

const NewSkill = () => {
  const [skill, setSkill] = useState({})
  const handleChange = event => {
    setSkill({ ...skill, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
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
                onChange={handleChange}>
                {skill.description}
              </textarea>
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

          {skill.id ? (
            <button className="button is-primary" type="submit">
              Add {skill.id}
            </button>
          ) : (
            <button className="button is-primary" disabled>
              Add Skill
            </button>
          )}

          <button className="button is-text">Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default NewSkill
