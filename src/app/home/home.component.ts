import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  yearsInBusiness: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateYearsInBusiness();
  }

  calculateYearsInBusiness(): void {
    const currentYear = new Date().getFullYear();
    const startYear = 2018;
    this.yearsInBusiness = currentYear - startYear;
  }
}
