import express from 'express'
import cors from 'cors'
// This import loads the firebase namspace along with all its type information
// To load the full sdk is not efficient
import * as firebase from 'firebase/app'
// These imports load individual services into the firebase namespace
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

class App {
    public express: express.Application
    public kajuDatabase: firebase.database.Database
    public kajuFirestore: firebase.firestore.Firestore
    public kajuAuth: firebase.auth.Auth

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      const firebaseConfig = {
        apiKey: 'AIzaSyBILRrFEggYMewJ9nAPCFnoQzn_1FQorh0',
        authDomain: 'kaju-projetao.firebaseapp.com',
        databaseURL: 'https://kaju-projetao.firebaseio.com',
        projectId: 'kaju-projetao',
        storageBucket: 'kaju-projetao.appspot.com',
        messagingSenderId: '469781068117',
        appId: '1:469781068117:web:ab4b79824e93134531d7dc',
        measurementId: 'G-499Q5P0CSZ'
      }
      const kaju: firebase.app.App = firebase.initializeApp(firebaseConfig)
      this.kajuDatabase = kaju.database()
      this.kajuAuth = kaju.auth()
      this.kajuFirestore = kaju.firestore()
    }

    private routes (): void {
      this.express.get('/', (req, res) => {
        return res.send('Hello World')
      })
    }
}

export default new App().express
