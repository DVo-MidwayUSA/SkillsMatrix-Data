import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import TableRowForm from "./TableRowForm.jsx"

const defaultSkill = {
  id: "",
  description: "",
  group: "",
  weight: ""
}

const App = () => {
  const [data, setData] = useState([])
  const [newSkill, setNewSkill] = useState(() => {
    return defaultSkill
  })

  useEffect(() => {
    fetch("http://localhost:8888/api/nodes")
      .then(response => {
        return response.json()
      })
      .then(setData)
  }, [])

  const onClick = event => {
    event.preventDefault()
    setData([...data, newSkill])
    setNewSkill(defaultSkill)
  }

  const updateSkill = (skill, updatedSkill) => {
    setData([...data.filter(element => element !== skill), updatedSkill])
  }

  const addNewSkill = (skill, updateSkill) => {
    setNewSkill({ ...updateSkill })
  }

  return (
    <>
      <button onClick={onClick}>Save</button>
      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Definition</th>
            <th>Group</th>
            <th>Weight</th>
            <th>&nbsp;</th>
          </tr>
          <TableRowForm skill={newSkill} onSkillChange={addNewSkill} />
        </thead>
        <tbody>
          {data.map((skill, index) => (
            <TableRowForm
              key={index}
              skill={skill}
              onSkillChange={updateSkill}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementsByTagName("main")[0])
