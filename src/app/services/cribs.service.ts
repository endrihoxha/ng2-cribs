import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSUbject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllCribs(){
    return this.http.get<any>('assets/data/cribs.json')
  }

  addCrib(data: any){
    data.image='default-crib';
    this.newCribSUbject.next(data);
  }
}
