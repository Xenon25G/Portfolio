pseudo = sessionStorage.getItem("username");
console.log(pseudo);
console.log(pseudo.length);

if(pseudo.length < 5){
    alert("Pseudo incorrect : Vous allez être redirigez vers la page d'accueil. Votre Pseudo doit contenir au moins 5 caractères.");
    window.location.replace("https://www.mphan.iuteiffel.o2switch.site/Z_clicker/index.html");

}

function send_pseudo_score(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = traitement;
    httpRequest.open('POST', 'https://sae-301.azurewebsites.net/save-score.php', true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({"username": pseudo, "score": score_valeur});
    httpRequest.send(data);
}

function traitement(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
        console.log("envois effectué");
    } 
    else {
        console.log(httpRequest.responseText)
    }
    }
}

setInterval(() => {
    if(score_valeur > 0){
        send_pseudo_score()
    }
}, 60000);

score = document.getElementById('score');
life_barre = document.getElementById('barre');

couteau_compteur = document.getElementById('compteur_couteau');
gun_compteur = document.getElementById('compteur_gun');
shotgun_compteur = document.getElementById('compteur_shotgun');

couteau_compteur_valeur = 0;
gun_compteur_valeur = 0;
shotgun_compteur_valeur = 0;

kill_affichage = document.getElementById('kill_affichage');
kill = 0;

score_valeur = 0;

couteau = document.getElementById('prix_couteau');
gun = document.getElementById('prix_gun');
shotgun = document.getElementById('prix_shotgun');

couteau_container = document.getElementById('couteau_container');
gun_container = document.getElementById('gun_container');
shotgun_container = document.getElementById('shotgun_container');
couteau_bool = false;
gun_bool = false;
shotgun_bool = false;


prix_couteau = 100;
prix_gun = 100;
prix_shotgun = 1000;

pv = 200;
pv_max = pv;
mort = false;

succes10pt_img = document.getElementById('succes10pt');
succes1000pt_img = document.getElementById('succes1000pt');
succes100000pt_img = document.getElementById('succes100000pt');
succes_first_buy_img = document.getElementById('succes_first_buy');

succes10pt = 0;
succes1000pt = 0;
succes100000pt = 0;
succes_first_buy = 0;

mort_zombie = document.getElementById('mort_zombie');
zombie1 = document.getElementById('zombie1');
zombie2 = document.getElementById('zombie2');
zombie3 = document.getElementById('zombie3');
zombie4 = document.getElementById('zombie4');
zombie5 = document.getElementById('zombie5');
zombie6 = document.getElementById('zombie6');

score.innerHTML = (score_valeur);

var audio = document.getElementById("background_sound"); 

var sons_on = document.getElementById("sons_on"); 
var sons_off = document.getElementById("sons_off"); 

function play_musique() { 
  audio.play(); 
  sons_on.style.display ="none"
  sons_off.style.display ="block"

} 

function pause_musique() { 
  audio.pause(); 
  sons_on.style.display ="block"
  sons_off.style.display ="none"
} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval(() => {
    if (score_valeur >= prix_couteau){
        couteau_container.style.backgroundColor = "#DF9898";
        couteau_bool = true;
        couteau_container.style.cursor = "pointer"
    }

    if(score_valeur >= prix_gun){
        gun_container.style.backgroundColor = "#DF9898";
        gun_bool = true;
        gun_container.style.cursor = "pointer"
    }

    if(score_valeur >= prix_shotgun){
        shotgun_container.style.backgroundColor = "#DF9898";
        shotgun_bool = true;
        shotgun_container.style.cursor = "pointer"
    }

    if (score_valeur <= prix_couteau){
        couteau_container.style.backgroundColor = "#383838";
        couteau_bool = false;
        couteau_container.style.cursor = "default"
    }

    if(score_valeur <= prix_gun){
        gun_container.style.backgroundColor = "#383838";
        gun_bool = false;
        gun_container.style.cursor = "default"
    }

    if(score_valeur <= prix_shotgun){
        shotgun_container.style.backgroundColor = "#383838";
        shotgun_bool = false;
        shotgun_container.style.cursor = "default"
    }

    if(score_valeur >= 10){
        succes10pt_img.style.opacity ="1";
        succes10pt++;
    }

    if(succes10pt == 1){
        alert("Succès débloqué ! : Vous avez atteint un score de 10 point !");
    }

    if(score_valeur >= 1000){
        succes1000pt_img.style.opacity ="1";
        succes1000pt++;
    }

    if(succes1000pt == 1){
        alert("Succès débloqué ! : Vous avez atteint un score de 1 000 point !");
    }

    if(score_valeur >= 100000){
        succes100000pt_img.style.opacity ="1";
        succes100000pt++;
    }

    if(succes100000pt == 1){
        alert("Succès débloqué ! : Vous avez atteint un score de 100 000 point !");
    }

    if(couteau_compteur_valeur >=1 || gun_compteur_valeur >=1 || shotgun_compteur_valeur >=1 ){
        succes_first_buy_img.style.opacity ="1";
        succes_first_buy++;
    }

    if(succes_first_buy == 1){
        alert("Succès débloqué ! : Vous venez de faire votre premier achat !");
    }

    if(pv <= 0){
        mort = true;
    }

    if(mort == true){
        kill++;
        zombie1.style.opacity = "0";
        zombie2.style.opacity = "0";
        zombie3.style.opacity = "0";
        zombie4.style.opacity = "0";
        zombie5.style.opacity = "0";
        zombie6.style.opacity = "0";
        spwan_monstre();
        pv = 200;
        pv_max += pv * (100*kill);
        mort = false;
    }
    
    degat_clic = 1 + (10*couteau_compteur_valeur) +(1000 * shotgun_compteur_valeur);
    life_barre_valeur = pv + "px";
    life_barre.style.width = life_barre_valeur;

    score.innerHTML = (Math.round(score_valeur));

    couteau.innerHTML = (Math.round(prix_couteau));
    gun.innerHTML = (Math.round(prix_gun));
    shotgun.innerHTML = (Math.round(prix_shotgun));

    kill_affichage.innerHTML = ("X" + kill);
    couteau_compteur.innerHTML = ("X" + couteau_compteur_valeur);
    gun_compteur.innerHTML = ("X" + gun_compteur_valeur);
    shotgun_compteur.innerHTML = ("X" + shotgun_compteur_valeur);
}, 100);


function boutonclic(){
    score_valeur += (1 + (10*couteau_compteur_valeur) +(1000 * shotgun_compteur_valeur));

    pv_max_tmp = pv_max;
    pv_max = pv_max - 1 - (10*couteau_compteur_valeur) - (1000 * shotgun_compteur_valeur);

    pv = (pv * pv_max) / pv_max_tmp;

    console.log(pv_max);
    console.log(kill);
}

function hit_up(){
    life_barre.style.backgroundColor = "#ff0000";
}

function hit_down(){
    life_barre.style.backgroundColor = "#40000d";
}

function buy_couteau(){
    if(couteau_bool == true){
        score_valeur = score_valeur - prix_couteau;
        prix_couteau = prix_couteau*1.5;
        couteau_compteur_valeur++;
    }
}

function buy_gun(){
    if(gun_bool == true){
        score_valeur = score_valeur - prix_gun;
        prix_gun = prix_gun*1.5;
        gun_compteur_valeur++;
    }
}

function buy_shotgun(){
    if(shotgun_bool == true){
        score_valeur = score_valeur - prix_shotgun;
        prix_shotgun = prix_shotgun*3;
        shotgun_compteur_valeur++;
    }
}

setInterval(() => {
    if(gun_compteur_valeur > 0 || shotgun_compteur_valeur > 0){
        score_valeur += (10*gun_compteur_valeur) + (1000*shotgun_compteur_valeur);

        pv_max_tmp = pv_max;
        pv_max = pv_max - 1 - (10*gun_compteur_valeur) - (1000 * shotgun_compteur_valeur);
        pv = (pv * pv_max) / pv_max_tmp;
    }
}, 1000);

function spwan_monstre(){
    new_nb_random = nb_random;
    
    while(new_nb_random == nb_random){
        nb_random = getRandomInt(6);
    }

    if(nb_random == 0){
        zombie1.style.opacity = "1";
        zombie2.style.opacity = "0";
        zombie3.style.opacity = "0";
        zombie4.style.opacity = "0";
        zombie5.style.opacity = "0";
        zombie6.style.opacity = "0";
    }

    if(nb_random == 1){
        zombie1.style.opacity = "0";
        zombie2.style.opacity = "1";
        zombie3.style.opacity = "0";
        zombie4.style.opacity = "0";
        zombie5.style.opacity = "0";
        zombie6.style.opacity = "0";
    }

    if(nb_random == 2){
        zombie1.style.opacity = "0";
        zombie2.style.opacity = "0";
        zombie3.style.opacity = "1";
        zombie4.style.opacity = "0";
        zombie5.style.opacity = "0";
        zombie6.style.opacity = "0";
    }

    if(nb_random == 3){
        zombie1.style.opacity = "0";
        zombie2.style.opacity = "0";
        zombie3.style.opacity = "0";
        zombie4.style.opacity = "1";
        zombie5.style.opacity = "0";
        zombie6.style.opacity = "0";
    }

    if(nb_random == 4){
        zombie1.style.opacity = "0";
        zombie2.style.opacity = "0";
        zombie3.style.opacity = "0";
        zombie4.style.opacity = "0";
        zombie5.style.opacity = "1";
        zombie6.style.opacity = "0";
    }

    if(nb_random == 5){
        zombie1.style.opacity = "0";
        zombie2.style.opacity = "0";
        zombie3.style.opacity = "0";
        zombie4.style.opacity = "0";
        zombie5.style.opacity = "0";
        zombie6.style.opacity = "1";
    }
}

nb_random = getRandomInt(6);
spwan_monstre();
