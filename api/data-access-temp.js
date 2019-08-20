import nodes from "../data/nodes"
import links from "../data/links"

const get = id =>
  new Promise(resolve => {
    if (id === "nodes") resolve(nodes)
    else resolve(links)
  })

const generic = (id, input) => {}

export default {
  get: get,
  update: generic,
  write: generic
}
