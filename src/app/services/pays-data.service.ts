import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaysDataService {

  constructor(private HttpClient:HttpClient) { }
  getDataPays(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/pays');
  }}
