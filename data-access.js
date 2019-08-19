import sql from "mssql/msnodesqlv8"

const config = {
  server: "devsql",
  database: "squat",
  options: {
    trustedConnection: true
  }
}

const get = id =>
  new Promise(resolve => {
    new sql.ConnectionPool(config).connect().then(async pool => {
      const result = await pool.request()
        .query`select * from website.teamskills where _id = ${id}`
      const modeldata = JSON.parse(result.recordset[0].modeldata)
      resolve(modeldata)
      sql.close()
    })
  })

const write = (id, input) =>
  new sql.ConnectionPool(config).connect().then(async pool => {
    await pool
      .request()
      .input("id", id)
      .input("modeldata", input)
      .query`insert into website.teamskills (_id, modeldata)
    values (@id, @modeldata)`
    sql.close()
  })

const update = (id, input) =>
  new sql.ConnectionPool(config).connect().then(async pool => {
    await pool.request().input("modeldata", input)
      .query`update website.teamskills
            set modeldata = @modeldata
            where _id = ${id}`
    sql.close()
  })

export default {
  get: get,
  update: update,
  write: write
}
