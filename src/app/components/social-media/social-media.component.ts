import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  socialMediaLinks = {

    github: "https://github.com/OssCrv",
    linkedin: "https://www.linkedin.com/in/carvajalossman/",
    gmail: "work@carvajalossman.com",
    instagram : "https://www.instagram.com/crv_oss",
    facebook: "https://www.facebook.com/CarvajalOssman"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
