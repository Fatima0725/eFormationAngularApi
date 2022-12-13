import { Component, OnInit } from '@angular/core';
import { FormationDataService } from '../services/formation-data.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
formations:any;
  constructor(private formationDataService:FormationDataService){ }

  ngOnInit(): void{
    this.getFormationData();
  }

  getFormationData(){
    console.log('liste des formations');
    this.formationDataService.getDataFormation().subscribe(res =>{
      console.log(res);
      this.formations = res;
    })
  }
}
