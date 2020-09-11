function afficher() {
  var name = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var passwd = document.getElementById("password").value;
  var sexe = document.forms[0].sexe.value;

  var loisir = [];
  var formLoisir = document.forms[0].loisir;
  formLoisir.forEach((element) => {
    if (element.checked) {
      loisir.push(element.value);
    }
  });

  var comment = document.forms[0].commentaire.value;

  document.querySelector(".container").firstElementChild.innerHTML =
    " <div class='cart'><h1 name='title'></h1><p></p></div>";
  var cart = document.querySelector(".cart");
  cart.firstElementChild.innerText = "Bonjour " + name;
  cart.lastElementChild.innerHTML =
    "<strong> prenom : </strong>" +
    prenom +
    "<br>" +
    "<strong> sexe : </strong>" +
    sexe +
    "<br>" +
    "<strong> loisir : </strong>" +
    loisir +
    "<br>";
}
