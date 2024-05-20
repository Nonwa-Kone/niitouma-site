import Reservation from "../model/Reservation.js"

window.addEventListener('DOMContentLoaded', ()=> {
  const form = document.querySelector('form')
  form.addEventListener('submit', async(e)=> {
    e.preventDefault()
    const formData = new FormData(form)
    const data = {
      typeDeService: formData.get('profession'),
      dateService: formData.get('date-heure'),
      emplacement: formData.get('emplacement'),
      nom: formData.get('nom'),
      prenom: formData.get('prenom'),
      numeroTelephone: formData.get('telephone'),
      email: formData.get('email'),
      description: formData.get('description')
    }
    const result =  await Reservation.nouveauReservation(data)
    if (result==="success") {
      window.location.href="remerciement.html"
    }
  })
})