import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from "@angular/http";

import "rxjs/add/operator/map";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sitesList$;
  constructor(public navCtrl: NavController,
  private http: Http) {
    this.sitesList$ = this.http
    .get("https://api.myjson.com/bins/4kwpm")
    .map(data => data.json());

  }

}
