import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  faPlay = faPlayCircle
  constructor() { }

  ngOnInit(): void {
  }

}
