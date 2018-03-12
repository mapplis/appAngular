import { Component, OnInit } from '@angular/core';
declare function require(moduleName: string): any;
const { version: appVersion } = require('../../../../package.json');
const { name: appName } = require('../../../../package.json');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public appName;
  public appVersion;

  constructor() { }


  ngOnInit() {
    this.appName = appName;
    this.appVersion = appVersion;
  }


}
