import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

import Skill from "./components/Skill.jsx"
import NewSkill from "./components/NewSkill.jsx"

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
    <div className="columns">
      <div className="column is-two-thirds table-container">
        <table className="table is-striped is-narrow">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Skill</th>
              <th>Description</th>
              <th>Emphasis</th>
              <th>Weight</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {data.map((skill, index) => (
              <Skill remove={remove} key={skill.id + index} skill={skill} />
            ))}
          </tbody>
        </table>
      </div>
      <NewSkill />
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
