import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  title = "Suche";

  constructor() {  }

  ngOnInit() {}
}
