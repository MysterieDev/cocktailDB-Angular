import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  firstWelcome: boolean = true;

  constructor() {}

  ngOnInit() {}

  private clickedFirstWelcome() {
    console.log("click");
    this.firstWelcome = false;
  }
}
