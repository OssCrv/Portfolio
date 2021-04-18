import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Ossman O C",
    title: `¡Hola! me llamo Ossman Carvajal`,
    subTitle: "Un desarrollador con conocimiento en construcción de bases de datos relacionales y aplicaciones usando Java Spring Boot y Angular",
    resumeLink: "https://bit.ly/CV_OssCrv"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

