var Nombre_usuario = localStorage.getItem("Usuario");
document.getElementById("Nombre_usuario").innerHTML = "¡Bienvenido, " + Nombre_usuario;

function addRoom(){
    var nombre_sala = document.getElementById("Nombre_sala").value;
    localStorage.setItem("Sala", nombre_sala);
    window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Inicia código
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    //Termina código
    });});}
    getData();

    function redirectToRoomName(){
        localStorage.setItem("Sala", nombre_sala);
    window.location = "Kwitter_page.html";
    }

    function logOut(){
        localStorage.removeItem("Usuario");
        localStorage.removeItem("Room_name");
        window.location="index.html";
      }