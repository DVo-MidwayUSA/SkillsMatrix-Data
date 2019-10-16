import React, { useState } from "react"
import ReadSkill from "./ReadSkill.jsx"
import EditSkill from "./EditSkill.jsx"

const Skill = props => {
  const [skill, setSkill] = useState({ ...props.skill })
  const [editable, setEditable] = useState(false)

  const makeEditable = () => {
    setEditable(true)
  }

  const makeReadonly = () => {
    setEditable(false)
  }

  return editable ? (
    <EditSkill set={setSkill} makeReadonly={makeReadonly} skill={skill} />
  ) : (
    <ReadSkill remove={props.remove} edit={makeEditable} skill={skill} />
  )
}

export default Skill
