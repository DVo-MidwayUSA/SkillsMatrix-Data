import sql from "mssql/msnodesqlv8"

import nodes from "./data/nodes/"
import links from "./data/links/"

const config = {
  server: "devsql",
  database: "squat",
  options: {
    trustedConnection: true
  }
}

const read = () =>
  sql.connect(config).then(() => {
    new sql.Request().query`select * from website.teamskills`
      .then(recordSet => {
        console.dir(recordSet)
        console.log(recordSet.rowsAffected)
      })
      .then(() => {
        sql.close()
      })
  })

const write = input =>
  sql.connect(config).then(() => {
    new sql.Request()
      .input("modeldata", input)
      .query(`insert into website.teamskills (modeldata) values (@modeldata)`)
      .then(recordSet => {
        console.dir(recordSet)
        console.log(recordSet.rowsAffected)
      })
      .then(() => {
        sql.close()
      })
  })

const update = (id, input) =>
  sql.connect(config).then(() => {
    new sql.Request()
      .input("modeldata", input)
      .query(
        `update website.teamskills 
        set modeldata = @modeldata
        where _id = ${id}`
      )
      .then(recordSet => {
        console.dir(recordSet)
        console.log(recordSet.rowsAffected)
      })
      .then(() => {
        sql.close()
      })
  })

//update(8, `{"hello":"hello"}`)
read()
