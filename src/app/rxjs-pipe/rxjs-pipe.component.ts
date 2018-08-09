import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map, take, toArray, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-pipe',
  templateUrl: './rxjs-pipe.component.html',
  styleUrls: ['./rxjs-pipe.component.css'],
  exportAs: 'hello',
  moduleId:module.id
})
export class RxjsPipeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  totalIssues:any;
  test:any;
  allData:any = [0, 2,3,5,6,34];
  ngOnInit() {    
  }

}
