import { Component, OnInit } from '@angular/core';

import { ExperienceCardComponent } from "./experience-card/experience-card.component";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Físico técnico",
        company: "Sievert",
        color: "#004E92",
        companylogo: "../../../assets/work/Sievert.png",
        date: "Nov 2019 - Jul 2020",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "La principal tarea era la de realizar controles de calidad a equipos de rayos x.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Desarrollador",
        company: "T&B Soluciones",
        color: "#85AE52",
        companylogo: "../../../assets/work/TyB.png",
        date: "Jul 2019 – Nov 2019",
        desc: "Mi principal labor era desarrollar orientados a la salud para moviles y escritorio.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Auxiliar",
        company: "SSS y UNAL",
        color: "#00883C",
        companylogo: "../../../assets/work/SSS.png",
        date: "Ago 2019 – Dic 2019",
        desc: "La responsabilidad fue la de realizar controles de calidad alrededor de toda Antioquia.",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
