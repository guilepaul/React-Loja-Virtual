const config = {
    apiKey: "AIzaSyCzfvGTt9NLTa_PWG-vtavYXcplJ4H0ssA",
    authDomain: "lojavirtual-f336a.firebaseapp.com",
    databaseURL: "https://lojavirtual-f336a.firebaseio.com",
    projectId: "lojavirtual-f336a",
    storageBucket: "gs://lojavirtual-f336a.appspot.com",
    messagingSenderId: "672562026154",
    appId: "1:672562026154:web:34b3a21af1477f13"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')
  
  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base