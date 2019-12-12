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
    return this.selectedTranscription.transcript.toLowerCase().split(this.filterWord.toLowerCase()).length-1
  }
  get showOcurrences(){
    if(this.filterWord){
      return this.filterWord.length>0 && this.ocurrences>0
    }
    return false
  }
  get transcription(){
    if(!this.filterWord) return this.selectedTranscription.transcript
    if(this.filterWord.length===0)return this.selectedTranscription.transcript
    let text=this.selectedTranscription.transcript
    var idx = text.toLowerCase().indexOf(this.filterWord.toLowerCase());
    while (idx != -1) {
      text = text.substring(0,idx) + "<span class='highlight'>" + text.substring(idx,idx+this.filterWord.length) + "</span>" + text.substring(idx+this.filterWord.length, text.length);

      idx = text.toLowerCase().indexOf(this.filterWord.toLowerCase(), idx + 30);
    }
    return text
  }

}
