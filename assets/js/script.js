function ex2(){
  var name = document.getElementById('lastname').value;
  if (isNaN(name) && name!=''){
    alert('Merci de votre participation ' + name);
} else {
    alert('Erreur de caractères !');
}
}
