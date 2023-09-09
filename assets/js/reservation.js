const form = document.querySelector('#form')

form.addEventListener('submit', async function(event){
    event.preventDefault()

    const url = new URL(location.href)
    const id = url.searchParams.get('id')

    const formData = new FormData(form)

    let nom = formData.get('nom')
    let prenom = formData.get('prenom')
    let telephone = formData.get('telephone')
    let quartier = formData.get('quartier')
    let ville = formData.get('ville')
    let email = formData.get('email')

    let data = { ville, quartier, nom, prenom, email, id }

    console.log(data);
    
    const result = await fetch('http://localhost:3000/api/v1/reservation', {
        method: "post",
        body: data
    })
    
    const response = result.json()
   
    console.log(response);

})