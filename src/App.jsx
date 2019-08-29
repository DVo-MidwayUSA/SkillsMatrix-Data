import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import SkillForm from "./SkillForm.jsx"
import SkillTableRow from "./SkillTableRow.jsx"

const App = () => {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    id: "",
    description: "",
    group: 1,
    weight: 1
  })

  useEffect(() => {
    fetch("http://localhost:8888/api/nodes")
      .then(response => {
        return response.json()
      })
      .then(setData)
  }, [])

  const addSkill = skill => {
    setData(
      [
        ...data.filter(element => element.key !== skill.key),
        { ...skill, key: data.length }
      ].sort(byId)
    )
  }

  const removeSkill = skill => {
    setData([...data.filter(element => element !== skill)].sort(byId))
  }

  const onEditSkill = skill => {
    setFormData({ ...skill })
  }

  const byId = (a, b) => {
    let comparison = 0
    if (a.id.toUpperCase() > b.id.toUpperCase()) comparison = 1
    else comparison = -1
    return comparison
  }

  const byKey = (a, b) => {
    let comparison = 0
    if (a.key > b.key) comparison = 1
    else comparison = -1
    return comparison
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Definition</th>
            <th>Group</th>
            <th>Weight</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data.map(skill => (
            <SkillTableRow
              key={skill.key}
              skill={skill}
              onEdit={onEditSkill}
              // onSkillChange={updateSkill}
              // onRemove={removeSkill}
            />
          ))}
        </tbody>
      </table>
      <SkillForm skill={formData} onAdd={addSkill} />
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementsByTagName("main")[0])
