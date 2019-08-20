import React, { useState } from "react"

const TableHead = () => {
  const [id, setId] = useState()

  return (
    <tr>
      <td>
        <input
          type="text"
          name="id"
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </td>
      <td />
    </tr>
  )
}

export default TableHead
