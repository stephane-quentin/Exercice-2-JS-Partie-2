function ex2(){
  var name = document.getElementById('lastname').value;
  if (isNaN(name) && name!=''){ // si la variable name n'est pas un chiffre et nn'est pas vide
    alert('Merci de votre participation ' + name);
} else {
    alert('Erreur de caractères !');
}
}
