class Adherents {
  #id;
  #email;
  genre;
  #nom;
  nombreExperience;
  pays;
  #prenom;
  profession;
  quartier;
  realisations;
  telephone;
  ville;
  commentaire;
  domaineIntervention;

  constructor(
    id,
    nom,
    prenom,
    telephone,
    email,
    genre,
    profession,
    nombreExperience,
    realisations,
    pays,
    ville,
    quartier,
    commentaire,
    domaineIntervention,
  ) {
    this.#id = id;
    this.#nom = nom;
    this.#prenom = prenom;
    this.telephone = telephone;
    this.#email = email;
    this.genre = genre;
    this.profession = profession;
    this.nombreExperience = nombreExperience;
    this.realisations = realisations;
    this.pays = pays;
    this.ville = ville;
    this.quartier = quartier;
    this.commentaire = commentaire;
    this.domaineIntervention = domaineIntervention;
  }

  get getId() {
    return this.#id;
  }

  get getNom() {
    return this.#nom;
  }

  get getPrenom() {
    return this.#prenom;
  }

  get getEmail() {
    return this.#email;
  }

  templateAdherent() {
    return `
        <div class="row mb-4 p-lg-5 p-md-3 rounded-5">
            <div id="card-image-profil" class="col-lg-4">
                <img style="height: 200px;" src="./assets/img/profil-img.jpg" alt="" srcset="">
            </div>
            <div id="content-profil" class="col-lg-8">
                <h3>${this.getNom} ${this.getPrenom}</h3>
                <p><b>${this.profession} habite à ${this.ville}</b></p>
                <p>Contact: +226 ${this.telephone}</p>
                <p>Intervient dans ${this.domaineIntervention} </p>
                <a href="profil-adherent.html?id_profil=${this.#id}"><button class="btn btn-primary">Consulter son profil</button></a>
            </div>
        </div>
    `;
  }
}

export default Adherents;
