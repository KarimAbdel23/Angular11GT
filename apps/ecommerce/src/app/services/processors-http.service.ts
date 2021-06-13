import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Processor } from '../commons/interfaces/processor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProcessorsHttpService {

  constructor( private http: HttpClient ) { }


  getAll(): Observable<Processor[]> {
    return this.http.get<Processor[]>('http://localhost:3000/processors');
  }

  getOne(id:number): Observable<Processor> {
    return this.http.get<Processor>(`http://localhost:3000/processors/${id}`);
  }

  //Post
  save(processor:Processor): Observable<boolean> {
    return this.http.post<boolean>(`http://localhost:3000/processors`, processor);
  }

  //Put
  update(processor:Processor): Observable<boolean> {
    return this.http.put<boolean>(`http://localhost:3000/processors`, processor);
  }

  delete(id:number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/processors/${id}`);
  }

}
