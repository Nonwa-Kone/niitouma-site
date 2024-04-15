const form = document.querySelector("#form")

form.addEventListener("submit", async function (event) {
  event.preventDefault()

  const url = new URL(location.href)
  const id = url.searchParams.get("id")

  const formData = new FormData(form)

  let nom = formData.get("nom")
  let prenom = formData.get("prenom")
  let telephone = formData.get("telephone")
  let quartier = formData.get("quartier")
  let ville = formData.get("ville")
  let email = formData.get("email")
  let msg = formData.get("message")

  let data = {
    ville: ville,
    quartier: quartier,
    nom: nom,
    prenom: prenom,
    email: email,
    adherent: id,
    message: msg,
  }

  const result = await fetch(
    "https://comfortable-shawl-cow.cyclic.app/api/v1/reservation",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  )

  const { message } = await result.json()

  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: true,
  }).then(result => {
    if (result.isConfirmed) {
      window.location.href = "index.html"
    }
  })
})
