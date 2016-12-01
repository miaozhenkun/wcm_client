import { Component, OnInit } from '@angular/core';

import { DemoService } from '../service/demo.service'

@Component({
  template:  `
    <h1>demo数据</h1>
    <table class="table" *ngIf="demos && demos.data">
      <tr>
        <td>医生名</td>
        <td>医院名</td>
      </tr>
      <tr
        *ngFor="let doctor of demos.data.doctors">
        <td>{{doctor.name}}</td>
        <td>{{doctor.hosOrgName}}</td>
      </tr>
    </table>
  `
})
export class HeroSanguoComponent implements OnInit {

  demos: any;
  errorMessage: any;

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.demoService.getAppointDoctors()
      .subscribe(
        datas => this.demos = datas,
        error =>  this.errorMessage = <any>error);
  }

}
