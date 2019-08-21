import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import TableRowForm from "./TableRowForm.jsx"

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8888/api/nodes")
      .then(response => {
        return response.json()
      })
      .then(setData)
  }, [])

  const onClick = event => {
    event.preventDefault()
    setData(data)
  }

  const updateSkill = (skill, updatedSkill) => {
    setData([...data.filter(element => element !== skill), updatedSkill])
  }

  const addSkill = (skill, updateSkill) => {
    console.log(skill)
    console.log(updateSkill)
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
          <TableRowForm onSkillChange={addSkill} />
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
