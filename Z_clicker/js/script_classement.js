data = document.getElementById('data');

httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = traitement;
httpRequest.open('GET', `https://sae-301.azurewebsites.net/get-leaderboard.php`, true);
httpRequest.send();

function traitement(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var i=0;
            var b = 1;
            donnees = JSON.parse(httpRequest.responseText); 
            donnees.sort(function compare(a, b) {
                if (a.score < b.score)
                   return -1;
                if (a.score > b.score )
                   return 1;
                return 0;
            });
            donnees.reverse();
            //var a=[];
            //var b=[];
            while(i<300){
                //a.push(donnees[i].username);
                //a.push(donnees[i].score);
                if(donnees[i].username.length>15){
                    donnees[i].username = donnees[i].username.substr(0, 15) + "(...)";
                }
                data.innerHTML += (b+ " : " + donnees[i].username + " : ");
                data.innerHTML += (donnees[i].score + " pt</br>");
                i++;
                b++;
              }
              console.log(donnees);

        } else {
            alert('Il y a eu un problème avec la requête.');
        }
    }
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
