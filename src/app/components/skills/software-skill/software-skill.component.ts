import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skills',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {

  skillsSection = {
    softwareSkills: [
      {
        skillName: "Html5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "Css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "Sass",
        fontAwesomeClassname: "fab fa-sass"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "Angular",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "Java",
        fontAwesomeClassname: "fab fa-java"
      },
      {
        skillName: "Spring Boot",
        fontAwesomeClassname: "fas fa-power-off"
      },
      {
        skillName: "Diseño y despliegue de bases de datos",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "Python",
        fontAwesomeClassname: "fab fa-python"
      },
      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }

    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
