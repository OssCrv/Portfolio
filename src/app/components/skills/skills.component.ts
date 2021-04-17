import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "Perfil profesional",
    subTitle: "Apasionado por la tecnología en busca de hacer las mejores aplicaciones empresariales",
    skills: [
      "- Desarrollo de interfaces web usando Angular",
      "- Diseño e implementación de bases de datos relacionales",
      "- Generación de API usando Java Spring Boot",
      "- Integración usando servicios cloud como AWS",
      "- Realización de principio a fin de Software seguro y escalable para optimización de procesos"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
