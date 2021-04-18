import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "Diseño de base de datos y desarrollo Java",
      duration: "2021",
      subtitle: "Oracle Academy",
      content: "Parte de MinTIC 2.0 (Jovenes 2.0). Trabajando Java y conectandolo usando JDBC con servidores de bases de datos Oracle.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Desarrollo Backend con Java",
      duration: "2020",
      subtitle: "Platzi",
      content: "Desarrollo de API usando Java Spring Boot; programación funcional, testing y gestión de base de datos. REST usando Angular",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Ingeniería física",
      duration: "2014",
      subtitle: "Universidad Nacional - sede Medellín",
      content: "Desarrollo de proyectos, física aplicada a la tecnología. Profondización en protección radiologica y física de radiaciones.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
