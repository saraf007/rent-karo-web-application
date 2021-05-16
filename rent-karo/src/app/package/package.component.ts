// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  showPack = false;
  showMonthlyPack = false;
  showYearlyPack = false;
  packageNames = ['Weekly', 'Monthly', 'Yearly'];
  packageName;

  constructor() { }

  ngOnInit(): void {
  }

  showWeeklyPackage() {
    this.showPack = true;
    this.packageName = this.packageNames[0];
  }

  showMonthlyPackage() {
    this.showPack = true;
    this.packageName = this.packageNames[1];
  }

  showYearlyPackage() {
    this.showPack = true;
    this.packageName = this.packageNames[2];
  }

}
