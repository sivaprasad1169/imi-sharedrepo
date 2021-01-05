import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    this.getInfo();
  }

  public getInfo(): void {
    // start loader
    // make a request to server ( by using a service )  and fetch data
    // in the success callback ->  prepare FormGroup instance with data received
    // in the error callback -> display  proper error message to the user
    // stop loader
  }

  public save(): void {
    // start loader
    // make a request to server ( by using a service ) for saving the form data
    // in the success callback -> display message as successful
    // in the error callback -> display  proper error message to the user
    // stop loader
  }

}
