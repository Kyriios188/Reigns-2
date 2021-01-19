//Initialisation après chargement du DOM : HYPER IMPORTANT
document.addEventListener("DOMContentLoaded", function() {

    let tour_fin = 20;
    let fin_du_jeu=false;
    tour = 0; // Variable globale

    function jouer(tour) {
        if ((tour>=tour_fin) && (fin_du_jeu==false)){
            fin(tour);
            Ajout(cartes_jouables,go_apocalypse);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        } else if ((document.getElementById("bank").value==0) && (fin_du_jeu==false)) {
            fin(tour);
            Ajout(cartes_jouables,go_banque_bas);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        } else if ((document.getElementById("bank").value==100) && (fin_du_jeu==false)){
            fin(tour);
            Ajout(cartes_jouables,go_banque_haut);
            fin_du_jeu=true;
            tour = tour + 1;
            jouer(tour);
        } else if ((document.getElementById("army").value==0) && (fin_du_jeu==false)){
            fin(tour);
            Ajout(cartes_jouables, go_militaire_bas);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        }  else if ((document.getElementById("army").value==100) && (fin_du_jeu==false)){
            fin(tour);
            Ajout(cartes_jouables, go_militaire_haut);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        } else if ((document.getElementById("people").value==0)&& (fin_du_jeu==false)) {
            fin(tour);
            Ajout(cartes_jouables, go_peuple_bas);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        } else if ((document.getElementById("people").value==100)&& (fin_du_jeu==false)){
            fin(tour);
            Ajout(cartes_jouables, go_peuple_haut);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        } else if ((document.getElementById("religion").value==0)&& (fin_du_jeu==false)) {
            fin(tour);
            Ajout(cartes_jouables, go_religion_bas);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        } else if ((document.getElementById("religion").value==100)&& (fin_du_jeu==false))  {
            fin(tour);
            Ajout(cartes_jouables, go_religion_haut);
            tour = tour + 1;
            fin_du_jeu=true;
            jouer(tour);
        } else {  
            carteChoisie = piocher(cartes_jouables);
            console.log(carteChoisie.getname());
            changeCarte(carteChoisie);

            d = document.getElementsByClassName("right"); // ByClassName renvoie une liste avec un seul élément d'où le g[0]
            g = document.getElementsByClassName("left");

            const listenerG = function() {
                enclencheG(carteChoisie, tour, g, d);
            }
            const listenerD = function() {
                enclencheD(carteChoisie, tour, g, d);
            }

            const enclencheG = function(carte, tour, g, d) { // On donne un nom à cette fonction pour enlever l'eventlistener
                carte.enclencheEffetsG(); // Test avec ça quand ça marche
                g[0].removeEventListener("click", listenerG);
                d[0].removeEventListener("click", listenerD);
                tour = tour + 1;
                if (fin_du_jeu==false){
                    jouer(tour);
                } 
            }
        
            const enclencheD = function(carte, tour, g, d) {
                carte.enclencheEffetsD();
                g[0].removeEventListener("click", listenerG);
                d[0].removeEventListener("click", listenerD);
                tour = tour + 1;
                if (fin_du_jeu==false){
                    jouer(tour);
                } 
            }

            g[0].addEventListener("click", listenerG);
            d[0].addEventListener("click", listenerD);}
    }
    jouer(tour);
});
