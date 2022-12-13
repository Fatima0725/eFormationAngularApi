import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.model';
import { AdminDataService } from 'src/app/services/admin-data.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  login = new Login;
  constructor(

    private userdata:AdminDataService
  ) {}
  ngOnInit(): void {
    
  }

  registerUser(){
    console.log('Bienvenue')
  }
}
