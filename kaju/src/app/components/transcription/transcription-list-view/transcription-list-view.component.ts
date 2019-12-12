import { Component, OnInit, Input } from '@angular/core';
import { Transcription } from 'src/app/models/transcription.model';

import { Router } from '@angular/router';

import { FirebaseUtilsService } from 'src/app/services/firebase-utils.service';


@Component({
  selector: 'app-transcription-list-view',
  templateUrl: './transcription-list-view.component.html',
  styleUrls: ['./transcription-list-view.component.scss']
})
export class TranscriptionListViewComponent implements OnInit {
  @Input()transcriptionsArray:Transcription[];
  selectedTranscription:Transcription;
  filterWord:string;



  constructor(private fb:FirebaseUtilsService, private router: Router) { }


  ngOnInit() {
  }
  onSelect(transcription:Transcription): void {
    this.selectedTranscription = this.selectedTranscription===transcription?null:transcription;
  }
  addTranscription(){

    this.router.navigateByUrl('/upload');

    this.fb.addTranscription({
      id:this.transcriptionsArray.length+1,
      name:"teste",
      confidence:0.8,
      transcript:"testando"
    })
  }

}
