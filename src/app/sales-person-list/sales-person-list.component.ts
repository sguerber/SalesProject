import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList : SalesPerson[]=
  [
    new SalesPerson("Sarah", "Guerber", "sarah@sfr.fr", 5240),
    new SalesPerson("Emma", "Delahorte", "emmanuella@orange.fr", 4582),
    new SalesPerson("John", "Tianer", "john@yahoo.fr", 6598)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
