import { Component, OnInit, Input } from '@angular/core';
import { Transcription } from 'src/app/models/transcription.model';

@Component({
  selector: 'app-transcription-list-view',
  templateUrl: './transcription-list-view.component.html',
  styleUrls: ['./transcription-list-view.component.scss']
})
export class TranscriptionListViewComponent implements OnInit {
  @Input()transcriptionsArray:Transcription[];
  selectedTranscription:Transcription;
  filterWord:string;

  constructor() { }

  ngOnInit() {
  }
  onSelect(transcription:Transcription): void {
    this.selectedTranscription = this.selectedTranscription===transcription?null:transcription;
  }
  addTranscription(){
    //function to generate transcription
  }

}
