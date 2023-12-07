function pileface() {
var nb = Math.round(Math.random()*1);
if(nb == 1)
{
    document.getElementById("divpile").style.display = "block"
    document.getElementById("divface").style.display = "none"
    
}
else
{
    document.getElementById("divface").style.display = "block"
    document.getElementById("divpile").style.display = "none "
}
}

