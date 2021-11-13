
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDeO2w9bzAxsqXm_pIbVciYeDgJJealuR0",
  authDomain: "kwitter-ed697.firebaseapp.com",
  databaseURL: "https://kwitter-ed697-default-rtdb.firebaseio.com",
  projectId: "kwitter-ed697",
  storageBucket: "kwitter-ed697.appspot.com",
  messagingSenderId: "350160828264",
  appId: "1:350160828264:web:bd8dce810cf39431e008dd",
  measurementId: "G-NHB23CDGLX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");//update html with username
document.getElementById("user_name").innerHTML = "Welcome to " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    child1name: "adding  one room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";//rediecting to the next page
}

//datbase() means we want to add data to the database.
//ref() means the reference, where we want to add a user name in the database.
// “/” - to add the user name in the root as the main folder.
// child()to give the name to the main folder.room_name is the name of the main folder
//● update, firebase function used to update the database with thevalues
// gets all the room names from firebase and displays on kwitterpage.html
function getData()

 {  
  firebase.database().ref("/").on('value', 
  function(snapshot)
   {
      //document.getElementById("output").innerHTML = ""; 
      snapshot.forEach
      (
          function(childSnapshot) 
        { 
        childKey  = childSnapshot.key;
       Room_names = childKey;// holds all the room names coming from the firebase.
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;//to display all the room names inside a single HTML element,
      //that’s why we use += and then we write the variable row.
       }
    );
  });

}

getData();

function redirectToRoomName(name)// function should be called when we click on any room name under the #TRENDINGROOMS:

{
  console.log(name);
  localStorage.setItem("room_name", name);// It will add the room name in the localStorage, redirect to that particular  room page
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
