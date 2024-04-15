const getData = async () => {
  const response = await fetch("http://localhost:3000", { method: "GET" })
  const data = await response.json()
  return data
}

getData()
  .then(txt => console.log(txt))
  .catch(err => console.log(err))
