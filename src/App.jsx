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

  const edit = skill => {
    setData(
      [...data.filter(element => element.key !== skill.key), { ...skill }].sort(
        bySkill
      )
    )
  }

  const add = skill => {
    setData([...data, { ...skill }].sort(bySkill))
  }

  const sortBySkill = () => {
    setData([...data].sort(bySkill))
  }

  const sortByGroup = () => {
    setData([...data].sort(byGroup))
  }

  const bySkill = (a, b) => {
    let comparison = 0
    if (a.id.toUpperCase() > b.id.toUpperCase()) comparison = 1
    else comparison = -1
    return comparison
  }

  const byGroup = (a, b) => {
    let comparison = 0
    if (String(a.group).toUpperCase() > String(b.group).toUpperCase())
      comparison = 1
    else comparison = -1
    return comparison
  }

  return (
    <div className="columns">
      <div className="column is-two-thirds">
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>
                <a title="Sort by Skill" onClick={sortBySkill}>
                  Skill
                </a>
              </th>
              <th>Description</th>
              <th>
                <a title="Sort by Emphasis" onClick={sortByGroup}>
                  Emphasis
                </a>
              </th>
              <th>Weight</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {data.map((skill, index) => (
              <Skill
                key={skill.id + index}
                edit={edit}
                remove={remove}
                skill={skill}
              />
            ))}
          </tbody>
        </table>
      </div>
      <NewSkill add={add} />
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
