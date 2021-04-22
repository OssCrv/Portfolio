import { Component, Input, OnInit } from '@angular/core';

import { experience } from "../../../models/experience.model";

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: experience;

  constructor() {
    this.experience = {
      role: "string",
      company: "string",
      color:  "string",
      companylogo: "string",
      date: "string",
      desc: "string"
    }

   }

  ngOnInit(): void {
  }

}
