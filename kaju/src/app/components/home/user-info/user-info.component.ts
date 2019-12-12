import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  private userData:User

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user=>{
      this.userData=user
    })
  }
  //

  get userPhotoUrl():string{
    return this.userData.photoURL
  }

  get userName():string{
    return this.userData.displayName
  }

}
