import { Component, OnInit } from '@angular/core';
import { Data } from '../../data';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent implements OnInit {

  shownData: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.dataService.getData().subscribe(data => this.shownData = data);
  }

}
