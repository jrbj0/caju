import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Transcription } from '../models/transcription.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUtilsService {

  constructor(private db:AngularFirestore) { }

  getTranscriptions(userId):Observable<Transcription[]>{
    return this.db.doc(`users/${userId}`).collection<Transcription>(`transcriptions`).valueChanges()
  }
}
