import React from "react"
import { get } from "./data-access"

const DataAccessContext = React.createContext({ get })

export default DataAccessContext
