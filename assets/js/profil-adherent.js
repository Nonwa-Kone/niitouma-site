const url = new URL(location.href)
const id = url.searchParams.get("id_profil")
const getData = async id => {
  return await fetch(
    `http://localhost:3000/api/v1/adherent/${id}`,
  )
    .then(res => res.json())
    .then(data => {
      document.getElementById("propos").innerHTML = template(data)
      templateCommentaire(data)
    })
    .catch(err => console.log(err))
    .finally(() => console.log("Opération effectué"))
}

getData(id)
const template = adherent => {
  return `
  <img class="img-fluid object-filtre-cover rounded shadow" src="./assets/img/profil-img.jpg" alt="Profile professionnelle">
  <h1>${adherent.nom} ${adherent.prenom}</h1>
  <p>spécialisé dans ${adherent.profession}</p>
  <p>Intervient sur <strong>${adherent.domaineIntervention}</strong></p>
  <p>Contact : ${adherent.telephone}</p>
  <p>habite à ${adherent.ville}</p>
  <div class="btn-group py-lg-3">
    <a href="./reservation.html?id=${id}"><button type="submit" class="btn btn-primary">Reserver</button></a>
    <a href="./index.html"><button type="submit" class="btn btn-dark">Rechercher autre professionelle</button></a>
  </div>
  `
}

const templateCommentaire = adherent => {
  adherent.commentaire
    .map(comment => {
      document.querySelector(".owl-carousel").innerHTML += `
      <div class="testimonial-item">
      <div class='testimonial-avatar'>
        <h1 style='background: green; padding: 1rem; border-radius: 50%; color: white;'>${comment.nom
          .substr(0, 1)
          .toUpperCase()}</h1>
        </div>
        <div>
        <h2>${comment.nom}</h2>
        <cite>${comment.message}</cite>
        <strong>Pubié le 10/02/2023 à 10h00</strong>
        <p><i class="bi bi-star-fill"></i> ${comment.note}</p>
        </div>
      </div>
    `
    })
    .join(",")
}
