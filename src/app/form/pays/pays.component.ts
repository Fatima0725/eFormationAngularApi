import { Component, OnInit } from '@angular/core';
import { PaysDataService } from 'src/app/services/pays-data.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit{
  pays:any;
  constructor(private paysDataService:PaysDataService){}

  ngOnInit(): void {
    this.getPaysData();
  }

  getPaysData(){
    console.log("liste des pays");
    this.paysDataService.getDataPays().subscribe(res =>{
      console.log(res);
      this.pays = res;
  })
}
}
