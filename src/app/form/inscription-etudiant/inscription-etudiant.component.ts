import { Component, OnInit } from '@angular/core';
import { PaysDataService } from 'src/app/services/pays-data.service';
import { ApprenantDataService } from 'src/app/services/apprenant-data.service';
import { Pays } from 'src/app/model/pays.model';
import { Apprenant } from 'src/app/model/apprenant.model';

@Component({
  selector: 'app-inscription-etudiant',
  templateUrl: './inscription-etudiant.component.html',
  styleUrls: ['./inscription-etudiant.component.css']
})
export class InscriptionEtudiantComponent implements OnInit{
  apprenants:any;
  pays:any;
  apprenantObj = new Apprenant();
  constructor(private apprenantDataService:ApprenantDataService, private paysDataService:PaysDataService){ }
  ngOnInit(): void{

    this.getApprenantData();
  }
  getPaysData(){
    console.log('liste des Pays');
    this.paysDataService.getDataPays().subscribe(res =>{
      console.log(res);
      this.pays = res;
    })
  }
  getApprenantData(){
    console.log('liste des apprennats');
    this.apprenantDataService.getDataApprenant().subscribe(res =>{
      console.log(res);
      this.apprenants = res;
    })
  }
  addApprenant()
  {
    console.log(this.apprenantObj);
  }
}
