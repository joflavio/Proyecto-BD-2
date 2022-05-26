import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryInterface } from 'src/interfaces/querys.interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuerysService {
  

  constructor(private http: HttpClient) { 
    
}
  obtenerBd(query:QueryInterface){
    return this.http.post('localhost:8090/login',query);
  }

  
}
