import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Transcription } from 'src/app/models/transcription.model';
import {TranscriptionsMock} from './transcription-mock'

@Component({
  selector: 'app-transcription-list-view',
  templateUrl: './transcription-list-view.component.html',
  styleUrls: ['./transcription-list-view.component.scss']
})
export class TranscriptionListViewComponent implements OnInit {
  selectedTranscription:Transcription
  transcriptionsArray:Transcription[]=TranscriptionsMock

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(i=>console.log(i.displayName))
  }
  onSelect(transcription:Transcription): void {
    this.selectedTranscription = transcription;
  }
  addTranscription(){
    //function to generate transcription
  }

}
