var firebaseConfig = {
      apiKey: "AIzaSyAYDDuee9PP_0fOSNxJAzzB4hlIjPpXGa8",
      authDomain: "chat-project-e35c8.firebaseapp.com",
      databaseURL: "https://chat-project-e35c8-default-rtdb.firebaseio.com",
      projectId: "chat-project-e35c8",
      storageBucket: "chat-project-e35c8.appspot.com",
      messagingSenderId: "424847949366",
      appId: "1:424847949366:web:31ec0d19951480ddba2297",
      measurementId: "G-STBM6NDPJY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  function addroom(){
      a = document.getElementById("room_name").value;
      console.log(a);
      firebase.database().ref("/").child(a).set({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room",a);
      window.location="index3.html";
}
function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) 
  {
        document.getElementById("output1").innerHTML = "";
        snapshot.forEach(function(childSnapshot) 
        {
   childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("RoomName-",Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='navigate_index(this.id)' >Room name is - "+ Room_names +"</div><hr>";
  document.getElementById("output1").innerHTML += row;
  });
});
}
getData();
function navigate_index(y){
  console.log(y);
  localStorage.setItem("room",y);
  window.location="index3.html";
}
function profile(){
 window.location="index4.html";
}