import Contacts from "./model/Contacts.js"

const form = document.querySelector("#form")

form.addEventListener("submit", async function (event) {
  event.preventDefault()
  const formData = new FormData(form)
  let data = {
    nom: formData.get("nom"),
    prenom: formData.get("prenom"),
    telephone: formData.get("telephone"),
    email: formData.get("email"),
    message: formData.get("message"),
  }
  const message = await Contacts.nouveauContact(data)
  const {isConfirmed} = await Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: true,
  })
  if (isConfirmed) {
    window.location.href = "index.html"
  }
})
