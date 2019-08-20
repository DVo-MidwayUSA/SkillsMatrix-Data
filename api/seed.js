import data from "./data-access"

import nodes from "../data/nodes"
import links from "../data/links"

data.write("nodes", JSON.stringify(nodes)).then(() => {
  data.write("links", JSON.stringify(links))
})
