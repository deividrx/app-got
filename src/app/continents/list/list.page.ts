import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Continents } from '../continents';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  data: Continents[] = []

  constructor(
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.data.subscribe(
      ({continents}) => {
        this.data = continents
      }
    )
  }
  
}
