import { Component, OnInit, ViewChild } from '@angular/core';
import { Transcription } from 'src/app/models/transcription.model';
import { TranscriptionsMock } from './transcription-mock';
import { TranscriptionListViewComponent } from './transcription-list-view/transcription-list-view.component';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseUtilsService } from 'src/app/services/firebase-utils.service';

@Component({
  selector: 'app-transcription',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.scss']
})
export class TranscriptionComponent implements OnInit {
  @ViewChild("transcriptionListView",{static:false}) transcriptionListView:TranscriptionListViewComponent
  transcriptionsArray:Transcription[]

  constructor(private auth:AuthService,
    private fb:FirebaseUtilsService) {
      this.auth.user$.subscribe(user=>{
        this.fb.getTranscriptions(user.uid).subscribe(item=>{
          this.transcriptionsArray=item
        })
      })
    }

  ngOnInit() { }

  get selectedTranscription(){
    if(this.transcriptionListView) return this.transcriptionListView.selectedTranscription
  }

}
