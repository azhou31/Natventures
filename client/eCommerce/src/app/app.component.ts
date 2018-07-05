import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = new User();
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }

  ngOnInit(){

  }

}

