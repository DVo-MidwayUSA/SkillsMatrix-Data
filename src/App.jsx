import React from "react"
import ReactDOM from "react-dom"
import TableHeadForm from "./TableHeadForm.jsx"

const App = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Definition</th>
          <th>Group</th>
          <th>Weight</th>
          <th>&nbsp;</th>
        </tr>
        <TableHeadForm />
      </thead>
    </table>
  )
}

export default App

ReactDOM.render(<App />, document.getElementsByTagName("main")[0])
