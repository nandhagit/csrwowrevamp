import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any=[];

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    let userId = route.snapshot.paramMap.get("id")
    userService.getUser(userId).subscribe(data=>{
      this.user=data;
    })
  }

  ngOnInit() {
  }

}
