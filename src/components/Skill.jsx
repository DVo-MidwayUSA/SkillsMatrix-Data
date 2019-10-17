import React, { useState } from "react"
import ReadSkill from "./ReadSkill.jsx"
import EditSkill from "./EditSkill.jsx"

const Skill = props => {
  const [editable, setEditable] = useState(false)

  const makeEditable = () => {
    setEditable(true)
  }

  const makeReadonly = () => {
    setEditable(false)
  }

  return editable ? (
    <EditSkill
      edit={props.edit}
      makeReadonly={makeReadonly}
      skill={props.skill}
    />
  ) : (
    <ReadSkill remove={props.remove} edit={makeEditable} skill={props.skill} />
  )
}

export default Skill
