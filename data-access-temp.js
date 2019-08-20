import nodes from "./data/nodes/"
import links from "./data/links/"

const get = id =>
  ({
    nodes: nodes,
    links: links
  }[id])

const update = (id, input) => {}

const write = (id, input) => {}

export default {
  get: get,
  update: update,
  write: write
}
