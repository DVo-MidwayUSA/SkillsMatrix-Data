import "./App.jsx"
import "./main.css"

// const render = nodes => {
//   const items = nodes.map(node => {
//     return `<tr>
//           <td><input type="text" name="id" value=${node.id} /></td>
//           <td><textarea name="description">${node.description}</textarea></td>
//           <td><input type="text" name="group" value=${node.group} /></td>
//           <td><input type="text" name="weight" value=${node.weight} /></td>
//           <td>&nbsp;</td>
//         </tr>`
//   })

//   const html = items.join("")
//   document.querySelector("tbody").innerHTML = html
// }

// document.querySelector("form").addEventListener("submit", e => {
//   e.preventDefault()
//   let json = {}
//   const formData = new FormData(e.currentTarget)
//   const entries = Object.fromEntries(formData)
//   console.log(entries)

//   // const json = JSON.stringify(Object.fromEntries(formData.getAll()))
//   // console.log(json)
// })

// fetch("http://localhost:8888/api/nodes")
//   .then(response => {
//     return response.json()
//   })
//   .then(render)
