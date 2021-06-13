import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motherboard } from '../commons/interfaces/motherboard.interface';

@Injectable({
  providedIn: 'root'
})
export class MotherboardsHttpService {
  listadoActivo= true;


  constructor( private http: HttpClient ) { }


  getAll(): Observable<Motherboard[]> {
    return this.http.get<Motherboard[]>('http://localhost:3000/motherboards');
  }

  getOne(id:number): Observable<Motherboard> {
    console.log('MotherboardsHttpService -- getOne');
    return this.http.get<Motherboard>(`http://localhost:3000/motherboards/${id}`);
  }

  save(motherboard:Motherboard): Observable<boolean> {
    return this.http.post<boolean>(`http://localhost:3000/motherboards`, motherboard);
  }

  update(motherboard:Motherboard): Observable<boolean> {
    return this.http.put<boolean>(`http://localhost:3000/motherboards`, motherboard);
  }

  delete(id:number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/motherboards/${id}`);
  }



}
