import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-interior',
  templateUrl: './real-interior.component.html',
  styleUrls: ['./real-interior.component.css']
})
export class RealInteriorComponent implements OnInit {

  constructor() { }
  faPlay = faPlayCircle
  ngOnInit(): void {
  }

}
