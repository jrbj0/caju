import { Component, OnInit, ViewChild } from '@angular/core';
import { Transcription } from 'src/app/models/transcription.model';
import { TranscriptionsMock } from './transcription-mock';
import { TranscriptionListViewComponent } from './transcription-list-view/transcription-list-view.component';

@Component({
  selector: 'app-transcription',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.scss']
})
export class TranscriptionComponent implements OnInit {
  @ViewChild("transcriptionListView",{static:false}) transcriptionListView:TranscriptionListViewComponent
  transcriptionsArray:Transcription[] = TranscriptionsMock

  constructor() { }

  ngOnInit() {
  }
  get selectedTranscription(){
    if(this.transcriptionListView) return this.transcriptionListView.selectedTranscription
  }

}
