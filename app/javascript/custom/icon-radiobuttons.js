const iconRadiobuttons = () => {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  const radioButtons = document.querySelectorAll('.devis-informations .form-check.form-check-inline.icon-tooltip');
  radioButtons.forEach((radioButton) => {
    const petitElectro = "<strong>Petit électroménager :</strong><br><ul><li>Machine à café</li><li>Bouilloire</li><li>Grille-pain</li><li>Aspirateur</li><li>Pèse-personne</li><li>Fer à repasser</li><li>Table à repasser</li></ul>";
    const grosElectro = "<strong>Gros électroménager :</strong><br><ul><li>Hotte aspirante</li><li>Lave-vaisselle</li><li>Four</li><li>Lave-linge</li></ul>";
    const lingeMaison = "<strong>Linge de maison :</strong><br><ul><li>Drap housse</li><li>Taies d&#39;oreillers</li><li>Housse de couette</li><li>Tapis de bain</li><li>Petite serviette 70x140</li><li>Grande serviette 100x150</li></ul>";
    const menageComplet = "<strong>Ménage complet :</strong><br>Prestation de ménage intégral, poussière, balai, aspirateur, serpillière, vitres, dans toutes les pièces y compris salle de bain et cuisine.";
    const livraisonSeule = "<strong>Livraison seule :</strong><br>Profitez de la prestation livraison seule au pied de l&#39;immeuble ou en étage sur votre palier, à vous de décider.";
    const mobilierExterieur = "<strong>Mobilier extérieur :</strong><br>Tables et chaises.";
    const packEtudiant = "<strong>Pack Étudiant :</strong><br>Ensemble du mobilier nécessaire adapté à la vie étudiante.";
    const packEssentiel = "<strong>Pack essentiel :</strong><br>Ensemble du mobilier nécessaire à la location meublée, dans un style moderne qui conviendra au plus grand nombre.";
    const packConfort = "<strong>Pack confort :</strong><br>Ensemble du mobilier nécessaire à la location meublée, dans un style moderne ainsi que tous les éléments de décoration qui sublimeront votre bien.";
    const packMesure = "<strong>Pack sur-mesure :</strong><br>Mise en relation avec notre décorateur(trice) d&#39;intérieur pour une prestation sur-mesure.";
    const realPhotos = "<strong>Réalisation de photos:</strong><br>Photos réalisées par notre photographe professionnel spécialisé dans l&#39;immobilier, pour donner à vos biens plus de visibilité sur les plateformes.";
    const value = radioButton.firstChild.value;
    let title = "";
    if (value === "Pack essentiel"){
      title = packEssentiel
    } else if (value === "Pack confort") {
      title = packConfort
    } else if (value === "Pack étudiant") {
      title = packEtudiant
    } else if (value === "Pack sur-mesure") {
      title = packMesure
    } else if (value === "Petit électroménager") {
      title = petitElectro
    } else if (value === "Gros électroménager") {
      title = grosElectro
    } else if (value === "Linge de maison") {
      title = lingeMaison
    } else if (value === "Mobilier extérieur") {
      title = mobilierExterieur
    } else if (value === "Ménage complet") {
      title = menageComplet
    } else if (value === "Réalisation de photos") {
      title = realPhotos
    } else if (value === 'Livraison seule') {
      title = livraisonSeule
    };
    const icon_html = `<a href="" data-toggle='tooltip' data-html="true" title='${title}'><span class="far fa-sm fa-info-circle ml-1"></span></a>`;
    radioButton.insertAdjacentHTML('beforeend', icon_html);
  })
  const as = document.querySelectorAll('.devis-informations .form-check.form-check-inline a');
  as.forEach((a) => {
    a.addEventListener('click', (event) => {
      event.preventDefault();
    })
  })
};



export { iconRadiobuttons };
