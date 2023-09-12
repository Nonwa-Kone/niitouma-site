// Import des modules
import Adherents from "./model/Adherents.js"

// Declaration des constantes
const contentAdherentList = document.getElementById('section-content')
// Reccuperation des données de nos adherents depuis notre API
const getData = async() =>{
    const requete = await fetch("https://comfortable-shawl-cow.cyclic.app/api/v1/adherent")
    const data = await requete.json()
    const datas = filterAdherents(data);
    console.log(datas);
}

getData()


const filterAdherents = (data) =>{
    const url = new URL(location.href)
    const profession = url.searchParams.get('profession')
    const ville = url.searchParams.get('ville')
    console.log({profession, ville});
    const result = data.filter(adherent=> {
        return adherent.profession.toLowerCase() === profession.toLowerCase() && adherent.ville.toLowerCase() === ville.toLowerCase()
    })
    result.map(adherent=> {
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
            adherent.domaineIntervention
            );

            contentAdherentList.innerHTML += newAdherent.templateAdherent()
    })
}