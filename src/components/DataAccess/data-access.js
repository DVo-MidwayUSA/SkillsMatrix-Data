const API_BASE_URL = "http://localhost:8888/api"

export const get = () =>
  new Promise(resolve => {
    fetch(`${API_BASE_URL}/nodes`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        resolve(data)
      })
  })
