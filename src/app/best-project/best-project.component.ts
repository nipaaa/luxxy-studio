import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-best-project',
  templateUrl: './best-project.component.html',
  styleUrls: ['./best-project.component.css']
})
export class BestProjectComponent implements OnInit {

  constructor() { }
faPlay = faPlayCircle
  ngOnInit(): void {
  }

}
