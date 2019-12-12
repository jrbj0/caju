import { Component, OnInit, Input } from '@angular/core';
import { Transcription } from 'src/app/models/transcription.model';

@Component({
  selector: 'app-transcription-view',
  templateUrl: './transcription-view.component.html',
  styleUrls: ['./transcription-view.component.scss']
})
export class TranscriptionViewComponent implements OnInit {
  @Input()selectedTranscription:Transcription
  @Input()filterWord:string

  constructor() { }

  ngOnInit() {
  }
  get countWords(){
    return this.selectedTranscription.transcript.split(" ").length
  }
  get conficende(){
    return (this.selectedTranscription.confidence*100).toFixed(2)
  }
  get ocurrences(){
    return this.selectedTranscription.transcript.split(this.filterWord).length-1
  }

}
