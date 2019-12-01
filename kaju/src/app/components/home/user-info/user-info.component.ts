import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get userPhotoUrl():string{
    return "https://middle.pngfans.com/20190526/yi/user-logo-png-user-computer-icons-clipart-c58837c78f66866c.jpg"
  }

  get userName():string{
    return 'José Reginaldo'
  }

}
