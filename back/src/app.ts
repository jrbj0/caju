import express from 'express'
import cors from 'cors'
import firebase from 'firebase'

class App {
    public express: express.Application

    constructor () {
      this.express = express()
    }

    private middlewares () {
      this.express.use(express.json())
      this.express.use(cors())
    }
}
