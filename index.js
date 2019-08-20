import express from "express"
import path from "path"

import data from "./data-access-temp"

const app = new express()
const PORT = 8888

const byId = (a, b) => {
  let comparison = 0
  if (a.id > b.id) comparison = 1
  else comparison = -1
  return comparison
}

app.get("/api/nodes", (request, response) => {
  data.get("nodes").then(nodes => {
    const sorted = [...nodes].sort(byId)
    response.send(sorted).status(200)
  })
})

app.use("/", express.static(path.join(__dirname, "./public")))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log("CTRL + C to stop...")
})
