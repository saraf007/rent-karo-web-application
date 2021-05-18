// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  showPack = false;
  packageNames = ['Weekly', 'Monthly', 'Yearly'];
  packageName;
  weeklyPackagePrices = [10000, 6000, 4000];
  weeklyPackagePrice;
  isMonthly = false;
  isPremium = false;
  isWeeklyPackage = false;
  isWeeklyStandard = false;
  premiumPrice;
  standardPrice;
  basicPrice;
  packageDuration;

  constructor() { }

  ngOnInit(): void {
  }

  showWeeklyPackage() {
    this.showPack = true;
    this.packageName = this.packageNames[0];
    this.premiumPrice = 10000;
    this.standardPrice = 7000;
    this.basicPrice = 5000;
    this.packageDuration = "week";
  }

  showMonthlyPackage() {
    this.showPack = true;
    this.packageName = this.packageNames[1];
    this.premiumPrice = 7000;
    this.standardPrice = 5000;
    this.basicPrice = 3000;
    this.packageDuration = "month";
  }

  showYearlyPackage() {
    this.showPack = true;
    this.packageName = this.packageNames[2];
    this.premiumPrice = 5000;
    this.standardPrice = 3000;
    this.basicPrice = 2000;
    this.packageDuration = "year";
  }

}
