import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  constructor(private http:HttpClient) { }
  totalIssues:any;
  ngOnInit() {
    this.http.get('https://api.github.com/repos/facebook/react/issues').subscribe((res)=> {
      this.totalIssues = res;
    })
  }

}
