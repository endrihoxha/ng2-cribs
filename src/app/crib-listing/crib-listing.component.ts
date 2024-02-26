import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { CribsService} from '../services/cribs.service';
import {UtilService} from '../services/util.service';
@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit{
  cribs: Array<any>;
  error: string;
  sortFields: Array<string>=['address','area','bedrooms','bathrooms','price','type'];
  sortField: string = 'price';
  sortDirection: string='asc';
  constructor(private http: HttpClient,private cribsService: CribsService, public utilService: UtilService){}

  ngOnInit(){
    /*this.http.get<any>('assets/data/cribs.json').
    subscribe(data=>this.cribs=data,
      error => this.error=error.statusText);*/

      this.cribsService.getAllCribs().subscribe(data=>this.cribs=data,
        error => this.error=error.statusText);

      this.cribsService.newCribSUbject.
      subscribe(data => this.cribs=[data, ...this.cribs]);
  }

}
