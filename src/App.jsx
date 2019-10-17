import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"

import Skill from "./components/Skill.jsx"
import NewSkill from "./components/NewSkill.jsx"
import SaveControl from "./components/SaveControl.jsx"
import DataAccessContext from "./components/DataAccess/index.js"

const App = () => {
  const [data, setData] = useState([])

  const dataAccess = useContext(DataAccessContext)

  useEffect(() => {
    dataAccess.get().then(data => {
      setData([...data])
    })
  }, [])

  const reset = () => {
    dataAccess.get().then(data => {
      setData([...data])
    })
  }

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
    if (String(a.id).toUpperCase() > String(b.id).toUpperCase()) comparison = 1
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
                <abbr title="Sort by Skill" onClick={sortBySkill}>
                  Skill
                </abbr>
              </th>
              <th>Description</th>
              <th>
                <abbr title="Sort by Emphasis" onClick={sortByGroup}>
                  Emphasis
                </abbr>
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
      <div className="form-container column is-one-third">
        <SaveControl reset={reset} />
        <NewSkill add={add} />
      </div>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
