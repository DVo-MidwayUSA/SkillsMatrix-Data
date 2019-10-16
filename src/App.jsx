import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

import Skill from "./components/Skill.jsx"

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8888/api/nodes")
      .then(response => {
        return response.json()
      })
      .then(setData)
  }, [])

  const remove = skill => {
    setData([...data.filter(element => element.key !== skill.key)])
  }

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>&nbsp;</th>
          <th>Skill</th>
          <th>Description</th>
          <th>Group</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {data.map((skill, index) => (
          <Skill remove={remove} key={skill.id + index} skill={skill} />
        ))}
      </tbody>
    </table>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
