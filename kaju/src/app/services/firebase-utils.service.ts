import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Transcription } from '../models/transcription.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUtilsService {
  private userId:string

  constructor(private db:AngularFirestore) { }

  getTranscriptions(userId):Observable<Transcription[]>{
    this.userId=userId
    return this.db.doc(`users/${userId}`).collection<Transcription>(`transcriptions`).valueChanges()
  }
  addTranscription(item:Transcription){
    return this.db.doc(`users/${this.userId}`).collection<Transcription>(`transcriptions`).add(item)
  }
}
