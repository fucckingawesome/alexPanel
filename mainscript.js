// import firebase from "https://cdn.skypack.dev/firebase/compat/app";
// import "https://cdn.skypack.dev/firebase/compat/auth";
// import "https://cdn.skypack.dev/firebase/compat/firestore";

import {acc as ACCOUNT} from "https://giterhaber.github.io/web-codes/configs.js"
import {cmBwsbFSqC as config} from "https://giterhaber.github.io/web-codes/configs.js"

const app1 = firebase.initializeApp(ACCOUNT);
const auth = firebase.auth(app1);

auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
      console.log('signed in')
    } else {
      // User is signed out
      // ...
      console.log('signed out')
      location.href = './'
    }
  });
  $('#logout').on('click', () => {
    auth.signOut()
})

  
//DATABASE

const _0x40791d=_0x1609;(function(_0x42250c,_0x4c0308){const _0x3d51f3=_0x1609,_0x4ef8cb=_0x42250c();while(!![]){try{const _0xff0e0d=parseInt(_0x3d51f3(0x196))/0x1+-parseInt(_0x3d51f3(0x1a6))/0x2*(parseInt(_0x3d51f3(0x195))/0x3)+parseInt(_0x3d51f3(0x18c))/0x4+parseInt(_0x3d51f3(0x1a0))/0x5+parseInt(_0x3d51f3(0x19f))/0x6+-parseInt(_0x3d51f3(0x182))/0x7*(parseInt(_0x3d51f3(0x192))/0x8)+parseInt(_0x3d51f3(0x194))/0x9*(-parseInt(_0x3d51f3(0x18e))/0xa);if(_0xff0e0d===_0x4c0308)break;else _0x4ef8cb['push'](_0x4ef8cb['shift']());}catch(_0x30f63c){_0x4ef8cb['push'](_0x4ef8cb['shift']());}}}(_0x32aa,0x290b0));const app2=firebase[_0x40791d(0x188)](config,'app2');var db=firebase[_0x40791d(0x18b)](app2);const rootDIV=document[_0x40791d(0x18d)](_0x40791d(0x1a4));function _0x32aa(){const _0x282042=['\x20<br>\x20','addEventListener','target','<p>Wallet:\x20','1887912hZmTjh','638630RiCNkq','doc','parentElement','createElement','#root','button','16WZPUvD','phrase','catch','log','24913yXRqrI','location','click','delete','delete\x20sure?','forEach','initializeApp','get','background-color:\x20rgb(54,\x2057,\x2063);\x20color:white;','firestore','352768appMlD','querySelector','350WCxWPJ','data','then','🗑️','568lSqbGo','prepend','53649ltTSWW','4359sVedTr','110490vPmNVg','reload','Data\x20Deleted','</p><br>','div'];_0x32aa=function(){return _0x282042;};return _0x32aa();}function _0x1609(_0x19f0af,_0x266785){const _0x32aa97=_0x32aa();return _0x1609=function(_0x160918,_0x4e596e){_0x160918=_0x160918-0x180;let _0x4ea36a=_0x32aa97[_0x160918];return _0x4ea36a;},_0x1609(_0x19f0af,_0x266785);}function deleteTodo(_0x2063f8){const _0x513ee7=_0x40791d;let _0x2fb8aa=_0x2063f8[_0x513ee7(0x19d)],_0x738325=_0x2fb8aa[_0x513ee7(0x1a2)]['id'];confirm(_0x513ee7(0x186))&&(console[_0x513ee7(0x181)](_0x738325),db['collection'](_0x513ee7(0x18f))[_0x513ee7(0x1a1)](_0x738325)[_0x513ee7(0x185)]()[_0x513ee7(0x190)](()=>{const _0x919ae4=_0x513ee7;alert(_0x919ae4(0x198)),window[_0x919ae4(0x183)][_0x919ae4(0x197)]();})[_0x513ee7(0x180)](_0x59f6dc=>{const _0x5eb37e=_0x513ee7;console[_0x5eb37e(0x181)](_0x59f6dc);}));}db['collection'](_0x40791d(0x18f))[_0x40791d(0x189)]()[_0x40791d(0x190)](_0x4c2efb=>{const _0x4095f2=_0x40791d;_0x4c2efb[_0x4095f2(0x187)](_0x411b34=>{const _0x26f82a=_0x4095f2;let _0x31b3df=_0x411b34[_0x26f82a(0x18f)]()['wallet'],_0x3a8d18=_0x411b34[_0x26f82a(0x18f)]()[_0x26f82a(0x1a7)],_0x598216=_0x26f82a(0x19e)+_0x31b3df+_0x26f82a(0x19b)+_0x3a8d18+_0x26f82a(0x199),_0x256635=document[_0x26f82a(0x1a3)](_0x26f82a(0x19a));_0x256635['id']=_0x411b34['id'],_0x256635['innerHTML']=_0x598216,rootDIV['appendChild'](_0x256635);let _0x6b0991=document[_0x26f82a(0x1a3)](_0x26f82a(0x1a5));_0x6b0991['setAttribute']('style',_0x26f82a(0x18a)),_0x6b0991['innerHTML']=_0x26f82a(0x191),_0x6b0991[_0x26f82a(0x19c)](_0x26f82a(0x184),deleteTodo),_0x256635[_0x26f82a(0x193)](_0x6b0991);});});
