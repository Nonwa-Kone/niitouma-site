class Adherents {
    id
    email
    genre
    nom
    nombreExperience
    pays
    prenom
    profession
    quartier
    realisations
    telephone
    ville
    commentaire
    domaineIntervention

    constructor(id, nom, prenom, telephone, email, genre, profession, nombreExperience, realisations, pays, ville, quartier, commentaire, domaineIntervention){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.telephone = telephone
        this.email = email
        this.genre = genre
        this.profession = profession
        this.nombreExperience = nombreExperience
        this.realisations = realisations 
        this.pays = pays
        this.ville = ville
        this.quartier = quartier
        this.commentaire = commentaire
        this.domaineIntervention = domaineIntervention
    }

    get getNom(){
        return this.nom
    }

    templateAdherent () {
        return `
        <div class="row mb-4 p-lg-5 p-md-3 shadow rounded-5 bg-light">
            <div id="card-image-profil" class="col-lg-4">
                <img style="height: 200px;" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" srcset="">
            </div>
            <div id="content-profil" class="col-lg-8">
                <h3>${this.getNom}</h3>
                <p>${this.profession} habite à ${this.ville}</p>
                <p>Contact: +226 ${this.telephone}</p>
                <p>Intervient dans ${this.domaineIntervention} </p>
                <a href="profil-adherent.html?id_profil=${this.id}"><button class="btn btn-primary">Consulter son profil</button></a>
            </div>
        </div>
    `
    }
}


export default Adherents

