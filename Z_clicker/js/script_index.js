function send_username(){
    pseudo_envoie = document.getElementById("username");
    valeur_pseudo = pseudo_envoie.value;
    sessionStorage.setItem("username", valeur_pseudo);
}

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