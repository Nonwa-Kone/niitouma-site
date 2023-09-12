const getAdherent = async() =>{
    const requete = await fetch("http://localhost:3000/api/v1/adherent")
    const data = await requete.json()
    const datas = afficheLesAdherentAuHasard(data,2);
    datas.map(adherent => {
        document.getElementById('section-content').innerHTML += `
        <div class="row mb-4 p-lg-5 p-md-3 shadow rounded-5 bg-light">
            <div id="card-image-profil" class="col-lg-4">
                <img style="height: 200px;" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" srcset="">
            </div>
            <div id="content-profil" class="col-lg-8">
                <h3>${adherent.nom}</h3>
                <p>${adherent.profession} habite à ${adherent.ville}</p>
                <p>Contact: +226 ${adherent.telephone}</p>
                <p>Intervient dans ${adherent.domaineIntervention} </p>
                <a href="profil-adherent.html?id_profil=${adherent.id}"><button class="btn btn-primary">Consulter son profil</button></a>
            </div>
        </div>
        `
    });
}

/**
 * Cette fonction permet d'afficher une liste de 10 Adherent sur la page d'accueil au hasard stocker sur le serveur
 * @param {array} Resultat renvoyé par le serveur
 * @param {number} number La limite de l'affichage
 * @return {array} Une liste de 10 Adherent au hasard
 */
const afficheLesAdherentAuHasard = (data) =>{
    let newData = data
    // let firstIndex = Math.floor(Math.random() * data.length)
    let lastIndex = Math.floor(Math.random() * (data.length))

    newData = newData.slice(lastIndex, -1)
    return newData
}


getAdherent().then(response => response)


