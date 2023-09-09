const getData = async() =>{
    const response = await fetch('http://localhost:3000', { method: 'GET' })
    const data = await response.json()
    return data
}

getData().then(txt => console.log(txt)).catch(err => console.log(err))

// const url = new URL('http://127.0.0.1:5500/index.html?profession=Informaticien&profession=Ouaga&search=')
// console.log(url.searchParams.get('profession'));