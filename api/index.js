import express from "express"
import data from "./data-access-temp"

const app = new express()
const PORT = 8888

const byId = (a, b) => {
  let comparison = 0
  if (a.id.toUpperCase() > b.id.toUpperCase()) comparison = 1
  else comparison = -1
  return comparison
}

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/api/nodes", (request, response) => {
  data.get("nodes").then(nodes => {
    const sorted = [
      ...nodes.sort(byId).map((node, index) => {
        return { key: index, ...node }
      })
    ]
    response.send(sorted).status(200)
  })
})

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`)
  console.log("CTRL + C to stop...")
})
