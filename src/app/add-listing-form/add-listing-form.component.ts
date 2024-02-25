import { Component, OnInit, ViewChild } from '@angular/core';
import { CribsService} from '../services/cribs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrl: './add-listing-form.component.css'
})
export class AddListingFormComponent implements OnInit{

  @ViewChild('newCribForm') newCribForm: NgForm;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Condo'];

  constructor(private cribsService: CribsService){}

  ngOnInit(){
    
  }

  onCribSubmit(data: any): void{
    console.log(data);
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }
}
