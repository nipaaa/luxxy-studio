import { Component, OnInit } from '@angular/core';
import { faYoutube,faFacebook, faTwitter,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFaceAngry } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
faYoutube = faYoutube;
faFacebook = faFacebook;
faTwitter = faTwitter;
faGoogle = faGoogle;
  ngOnInit(): void {
  }

}
