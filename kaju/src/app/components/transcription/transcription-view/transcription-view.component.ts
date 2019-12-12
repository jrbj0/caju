import { Component, OnInit, Input } from '@angular/core';
import { Transcription } from 'src/app/models/transcription.model';

@Component({
  selector: 'app-transcription-view',
  templateUrl: './transcription-view.component.html',
  styleUrls: ['./transcription-view.component.scss']
})
export class TranscriptionViewComponent implements OnInit {
  @Input()selectedTranscription:Transcription

  constructor() { }

  ngOnInit() {
  }

}
