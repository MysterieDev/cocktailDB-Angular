import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.scss']
})
export class DashboardShellComponent implements OnInit {
  firstWelcome: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  private clickedFirstWelcome(){
    console.log("click");
    this.firstWelcome = false;
  }

}
