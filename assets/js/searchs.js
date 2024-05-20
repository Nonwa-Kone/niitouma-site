// Import des modules
import Adherents from "./model/Adherents.js"

// Declaration des constantes
const contentAdherentList = document.getElementById("section-content")
// Reccuperation des données de nos adherents depuis notre API
const getData = async () => {
  const url = new URL(location.href)
  const profession = url.searchParams.get("profession")
  const ville = url.searchParams.get("ville")
  const adherent = url.searchParams.get('adherent')
  const requete = await fetch(
    `http://localhost:3000/api/v1/adherent?profession=${profession}&ville=${ville}&adherent=${adherent}`,
  )
  const data = await requete.json()
  console.log(data);
  const datas = filterAdherents(data)
  console.log(datas)
}

getData()

const filterAdherents = data => {

  const {adherents, message} = data

  contentAdherentList.innerHTML += `<h1>${message}</h1>`
  adherents.map(adherent => {
    const newAdherent = new Adherents(
      adherent._id,
      adherent.nom,
      adherent.prenom,
      adherent.telephone,
      adherent.email,
      adherent.genre,
      adherent.profession,
      adherent.nomExperience,
      adherent.realisations,
      adherent.pays,
      adherent.ville,
      adherent.quartier,
      adherent.commentaire,
      adherent.domaineIntervention,
    )
    contentAdherentList.innerHTML += `${newAdherent.templateAdherent()}`
  })
}
