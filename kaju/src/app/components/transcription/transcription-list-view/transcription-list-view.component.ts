import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-transcription-list-view',
  templateUrl: './transcription-list-view.component.html',
  styleUrls: ['./transcription-list-view.component.scss']
})
export class TranscriptionListViewComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(i=>console.log(i.displayName))
  }

}
